"use client";
import React, { useEffect } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { VideoResource } from "../entity/VideoResource";
import { UploadButton } from "../shared/UploadButton";
import { getObjectURL, putObject } from "../functions/get_put_url";
import { FabricUitls } from "@/utils/fabric-utils";
import { fabric } from "fabric";
import { z } from "zod";

import axios from "axios";
import { getUid } from "@/utils";
import { GiConsoleController } from "react-icons/gi";
import { VIDEOS } from "@/types";


export const VideoResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const init1 = async () => {
    try {
      //console.log("Inside Video Resource Panel");
      store.setVideos([]);
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/list_videos`)
        .then(async (resolve) => {
          if (resolve.data.data?.length > 0) {
            resolve.data.data.forEach(async (ele: any) => {
              const fileid = ele.id;
              const videoid_fileid = ele.id.split(".");
              const filename = ele.video_name;
              const url: string = await getObjectURL(`users/uploads/videos/category/mahashivaratri/${videoid_fileid[0]}`);
              store.addVideoResource({
                fileid: fileid,
                filename: filename,
                filesource: url,
              });
            });
          }
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const init=async()=>{
    try {
      store.setVideos([]);
      const resp=await fetch(`${process.env.NEXT_PUBLIC_URL}/list_videos`,{
        method:"GET"
      });
      if(!resp.ok) throw new Error("Videos can't be fetched");
         const {data}= await resp.json();
         data.forEach(async(video:z.infer<typeof VIDEOS>)=>{
          const url:string=await getObjectURL(`users/uploads/videos/category/mahashivaratri/${video.id}`);
          const respFile=await fetch(url);
          if(respFile.ok){
            const blob=await respFile.blob();
            store.addVideoResource({fileid:video.id,filename:video.video_name,filesource:URL.createObjectURL(blob)})
          }
         })
    } catch (error) {
      console.log(error);
    }
  }


  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const file = event.target.files?.[0];
      if (!file) return;
      console.log(file.name);
      const formData = new FormData();
      formData.append("newvideo", file);
      await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/new_video`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((resolve) => {
          console.log(resolve);
          init1();
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="items-center overflow-x-hidden overflow-y-auto justify-start flex flex-col py-2  px-0.5">
          <UploadButton
        accept="video/mp4,video/x-m4v,video/*"
        className="uploadbutton"
        onChange={handleFileChange}
      />
      <div className="p-0.5  w-full">
        {store.videos.map((file, index) => {
          return (
            <VideoResource
              key={file["fileid"]}
              fileid={file["fileid"]}
              filename={file["filename"]}
              filesource={file["filesource"]}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
});