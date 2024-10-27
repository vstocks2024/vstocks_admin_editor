"use client";

import { z } from "zod";
import { observer } from "mobx-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingButton } from "@/components/ui/loading-button";
import MultipleSelector, { Option } from "@/components/ui/multiple-selector";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from "next/navigation";
import { StoreContext } from "@/store";
import { EditorElement } from "@/types";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MAX_UPLOAD_SIZE = 1024 * 1024 * 10; // 10MB
const categoryoptionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const tagoptionSchema = z.object({
  label: z.string(),
  value: z.string(),
  disable: z.boolean().optional(),
});

const FormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum characters must be 3" })
    .max(50, { message: "Maximum characters must be 50" }),
  description: z
    .string()
    .min(2, { message: "Minimum characters must be 2" })
    .max(500, { message: "Maximum characters must be 500" }),
  category_id: z.array(categoryoptionSchema).min(1, {
    message:
      "Minimum 1 category has to be there if no category is showing add category first then add a vector",
  }),
  tag_id: z.array(tagoptionSchema).min(1, {
    message:
      "Minimum 1 tag has to be there if no tag is showing add tag first then add a vector",
  }),
  license: z.enum(["free", "premium"], {
    required_error: "You must select an option",
  }),
  orientation: z.enum(["horizontal", "vertical", "square"], {
    required_error: "You must select an option",
  }),
  thumbnail: z.instanceof(File).refine((file) => {
    return !file || file.size <= MAX_UPLOAD_SIZE;
  }, "File size must be less than 3MB"),
  template: z.any(),
  canvas_data: z.any()
});

const CategorySchema = z.object({
  id: z.string().min(1, { message: "Id must be of min 1 character" }),
  name: z.string().min(1, { message: "Name should be  of min 2 character" }),
});

const TagSchema = z.object({
  id: z.string().min(1, { message: "Id must be of min 1 character" }),
  name: z.string().min(1, { message: "Name should be  of min 2 character" }),
});

async function getCategorysData(): Promise<z.infer<typeof CategorySchema>[]> {
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/categories/listidname`,
    {
      method: "GET",
      cache: "no-store",
    }
  );
  if (resp.status === 200 && resp.statusText === "OK") return resp.json();
  return [];
}

async function getTagsData(): Promise<z.infer<typeof TagSchema>[]> {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_URL}/tags/listidname`, {
    method: "GET",
    cache: "no-store",
  });
  if (resp.status === 200 && resp.statusText === "OK") return resp.json();
  return [];
}

export const AnimationForm = observer(() => {
  const store = React.useContext(StoreContext);
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
      license: "free",
    },
    resetOptions:{
      keepDirtyValues:false,
    }
  });
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    data = { ...data, template: store.editorElements ,canvas_data :store.canvas?.toJSON()};
    console.log(data.template);
    
    setLoading(true);
    const resp = await axios.post(
      `${process.env.NEXT_PUBLIC_URL}/animations/create`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (resp.statusText === "Created" && resp.status===201) {
      console.log(resp);
      
      (() => handleFormReset())();
      setLoading(false);
      (() => form.reset())();
      toast({
        title: "Success",
        description: `Animation Successfully Submitted`,
      });
      store.setModal(false);
      store.canvas?.clear();
      store.setEditorElements([]);
    } else {
      console.log(resp);
      setLoading(false);
      toast({
        title: "Failure",
        description:
          "Animation doesn't get added please fill the details carefully",
        variant: "destructive",
      });
    }
  }

  function handleFormReset() {
    form.resetField("name");
    form.resetField("description");
    form.resetField("category_id");
    form.resetField("tag_id");
    form.resetField("orientation");
    form.resetField("license");
  }

  const [category, setCategory] = useState<z.infer<typeof CategorySchema>[]>(
    []
  );

  const [tag, setTag] = useState<z.infer<typeof TagSchema>[]>([]);

  const [categoryOption, setCategoryOption] = useState<Option[]>([]);
  const [tagOption, setTagOption] = useState<Option[]>([]);

  useEffect(() => {
    (async () => {
      setCategory(await getCategorysData());
      setTag(await getTagsData());
    })();
  }, []);

  useEffect(() => {
    (async () => {
      category.map((item) => {
        setCategoryOption((prev) => [
          ...prev,
          { label: item.name, value: item.id },
        ]);
      });
    })();
  }, [category]);

  useEffect(() => {
    (async () => {
      tag.map((item) => {
        setTagOption((prev) => [...prev, { label: item.name, value: item.id }]);
      });
    })();
  }, [tag]);

  return (
    <>
      <div
        id="EditAnimationOverlay"
        className="fixed flex justify-center py-7  z-50 top-0 left-0 w-full h-full  bg-white bg-opacity-20 overflow-auto"
      >
        <div
          className={`
                        relative bg-[#202020] w-full max-w-[750px] sm:h-[580px] h-[655px] mx-3 p-4 rounded-lg  overflow-y-auto
                        
                    `}
        >
          <div className="flex items-center justify-between w-full my-2">
            <h1 className="text-[20px] font-medium">Animation Details</h1>
            <button
              onClick={() => {
                store.setModal(false);
              }}
              className="p-1 rounded-full"
            >
              <AiOutlineClose size="22" />
            </button>
          </div>
          <div className="flex flex-row items-center justify-center p-2">
            <Form {...form}>
              <form
                encType="multipart/form-data"
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 w-full"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Animation Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Animation Name" {...field} />
                      </FormControl>
                      <FormDescription>
                        Write a name of animation
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Animation Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Write a brief description about the category"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Write a brief description about this animation word
                        limit is upto(500 words).
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {categoryOption && categoryOption.length > 0 ? (
                  <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animation Categories</FormLabel>
                        <FormControl>
                          <MultipleSelector
                            {...field}
                            hidePlaceholderWhenSelected={true}
                            defaultOptions={categoryOption}
                            placeholder="Select Category for Animation"
                            emptyIndicator={
                              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                no results found.
                              </p>
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Select atleast one category for the animation
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <></>
                )}
                {tagOption && tagOption.length > 0 ? (
                  <FormField
                    control={form.control}
                    name="tag_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Animation Tags</FormLabel>
                        <FormControl>
                          <MultipleSelector
                            {...field}
                            hidePlaceholderWhenSelected={true}
                            defaultOptions={tagOption}
                            placeholder="Select Tags for Animation"
                            emptyIndicator={
                              <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                                no results found.
                              </p>
                            }
                          />
                        </FormControl>
                        <FormDescription>
                          Select at atleast one tag for the animation
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <></>
                )}
                <FormField
                  control={form.control}
                  name="license"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel>Animation License</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-row items-center justify-start"
                        >
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="free" />
                            </FormControl>
                            <FormLabel className="font-normal">Free</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <RadioGroupItem value="premium" />
                            </FormControl>
                            <FormLabel className="font-normal">
                              Premium
                            </FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="orientation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Animation Size</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a size of animation" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="horizontal">
                            Facebook Event Cover (1920 x 1080)
                          </SelectItem>
                          <SelectItem value="vertical">
                            Instagram Post (1080 x 1920)
                          </SelectItem>
                          <SelectItem value="square">
                            Instagram Story (1080 x 1080)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                      <FormDescription>
                        Select the size of your animation
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="thumbnail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Upload Animation Thumbnail</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          value={undefined}
                          className="text-white bg-gray-800 hover:bg-gray-700"
                          type="file"
                          placeholder="Animation Thumbnail"
                          accept="video/*"
                          onChange={(event) =>
                            field.onChange(
                              event.target.files && event.target.files[0]
                            )
                          }
                        />
                      </FormControl>
                      <FormDescription>
                        Upload the animation thumbnail image file any format
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* <div className="inline-flex flex-row items-center justify-between gap-x-2"> */}
                <LoadingButton
                  loading={loading}
                  className="bg-sky-600 hover:bg-sky-500 text-white"
                  variant={"default"}
                  type="submit"
                >
                  Submit
                </LoadingButton>
                &nbsp;&nbsp;
                <Button
                  variant={"default"}
                  className="bg-sky-600 hover:border-sky-500"
                  onClick={() => form.reset()}
                  type="reset"
                >
                  Reset
                </Button>
                &nbsp;&nbsp;
                <Button
                  variant={"default"}
                  className="bg-sky-600 hover:border-sky-500"
                  onClick={() => {
                    store.setModal(false);
                  }}
                  type="button"
                >
                  Close
                </Button>
                {/* </div> */}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
});
