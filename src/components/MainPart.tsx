import React, { useEffect, useReducer, useState } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "@/store";
import axios from "axios";
import {
  MdSave,
  MdFileDownload,
  MdContentCut,
  MdOutlineContentCopy,
  MdContentPaste,
  MdUndo,
  MdRedo,
  MdPlayArrow,
  MdPause,
  MdFullscreen,
  MdDelete,
  MdLayers,
  MdHistory
} from "react-icons/md";

import { getObjectURL } from "./functions/get_put_url";

import { EditorElement, TextEditorElement } from "@/types";

import wait from "@/utils/wait";

import { fabric } from "fabric";
// import { useTemplate } from "@/context/template";
import { useParams } from "next/navigation";
// import { useTemplateFetch } from "@/hooks/useTemplateFetch";

export const MainPart = observer(() => {
  
  const params=useParams();
  // const {loading,handleTemplate}=useTemplateFetch();

  const store = React.useContext(StoreContext);
  // const {template,setTemplate}=useTemplate();
  const Icon = store.playing ? MdPause : MdPlayArrow;

  function getVideoElement(url:string | undefined ,w:number,h:number) {
    var videoE = document.createElement('video');
    videoE.width = w;
    videoE.height = h;
    videoE.muted = true;
    videoE.loop=true;
    
    videoE.crossOrigin = "anonymous";
    var source = document.createElement('source');
    source.src = url || "";
    source.type = 'video/webm';
    videoE.appendChild(source);
    return videoE;
  }

  // function getImageElement(url:string | undefined){
  //   var imageE=document.createElement("img");
    
  //   imageE.crossOrigin="anonymous";

  //   return imageE;
  // }

  const handleCanvasJSON=()=>{
  //  console.log(store.canvas?.toJSON());
  }



  const handleCopy=async()=> {
    // if(!store.canvas) return;
    
  }

  const handlePaste=async()=>{
//     if(!store.canvas) return ;
//     store.canvas.clear();
    
//     const data={
//       "version": "5.3.0",
//       "objects": [
//           {
//               "type": "image",
//               "version": "5.3.0",
//               "originX": "left",
//               "originY": "top",
//               "left": 0,
//               "top": 0,
//               "width": 1024,
//               "height": 683,
//               "fill": "rgb(0,0,0)",
//               "stroke": null,
//               "strokeWidth": 0,
//               "strokeDashArray": null,
//               "strokeLineCap": "butt",
//               "strokeDashOffset": 0,
//               "strokeLineJoin": "miter",
//               "strokeUniform": false,
//               "strokeMiterLimit": 4,
//               "scaleX": 0.76,
//               "scaleY": 0.76,
//               "angle": 0,
//               "flipX": false,
//               "flipY": false,
//               "opacity": 1,
//               "shadow": null,
//               "visible": true,
//               "backgroundColor": "",
//               "fillRule": "nonzero",
//               "paintFirst": "fill",
//               "globalCompositeOperation": "source-over",
//               "skewX": 0,
//               "skewY": 0,
//               "cropX": 0,
//               "cropY": 0,
//               "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/images/category/mahashivaratri/38e281c0-0865-49a7-a6b4-55a65261ea60",
//               "crossOrigin": "anonymous",
//               "filters": []
//           },
//           {
//               "type": "textbox",
//               "version": "5.3.0",
//               "originX": "left",
//               "originY": "top",
//               "left": 24.11,
//               "top": 7,
//               "width": 462.93,
//               "height": 76.84,
//               "fill": "#ae2424",
//               "strokeWidth": 1,
//               "strokeDashArray": null,
//               "strokeLineCap": "butt",
//               "strokeDashOffset": 0,
//               "strokeLineJoin": "milter",
//               "strokeMiterLimit": 1,
//               "scaleX": 1,
//               "scaleY": 1,
//               "angle": 0,
//               "flipX": false,
//               "flipY": false,
//               "opacity": 1,
//               "visible": true,
//               "fillRule": "nonzero",
//               "paintFirst": "fill",
//               "globalCompositeOperation": "source-over",
//               "skewX": 0,
//               "skewY": 0,
//               "fontFamily": "[object Object]",
//               "fontWeight": "normal",
//               "fontSize": 68,
//               "text": "Happy Diwali",
//               "underline": true,
//               "overline": false,
//               "linethrough": false,
//               "textAlign": "center",
//               "fontStyle": "normal",
//               "lineHeight": 1.6,
//               "textBackgroundColor": "",
//               "charSpacing": 0,
//               "styles": [],
//               "direction": "ltr",
//               "path": null,
//               "pathStartOffset": 0,
//               "pathSide": "left",
//               "pathAlign": "baseline",
//               "minWidth": 20,
//               "splitByGrapheme": false
//           }
//       ],
//       "background": "#242728"
//   };
//   const data1={
//     "version": "5.3.0",
//     "objects": [
//         {
//             "type": "image",
//             "version": "5.3.0",
//             "originX": "left",
//             "originY": "top",
//             "left": 0,
//             "top": 0,
//             "width": 778.18,
//             "height": 437.72,
//             "fill": "rgb(0,0,0)",
//             "stroke": null,
//             "strokeWidth": 0,
//             "strokeDashArray": null,
//             "strokeLineCap": "butt",
//             "strokeDashOffset": 0,
//             "strokeLineJoin": "miter",
//             "strokeUniform": false,
//             "strokeMiterLimit": 4,
//             "scaleX": 1,
//             "scaleY": 1,
//             "angle": 0,
//             "flipX": false,
//             "flipY": false,
//             "opacity": 1,
//             "shadow": null,
//             "visible": true,
//             "backgroundColor": "",
//             "fillRule": "nonzero",
//             "paintFirst": "fill",
//             "globalCompositeOperation": "source-over",
//             "skewX": 0,
//             "skewY": 0,
//             "cropX": 0,
//             "cropY": 0,
//             "name": "a83a8d16-f429-4159-bb18-f9de48af1f19.qv0466s5g3f",
//             "disableCrop": false,
//             "cropWidth": 0,
//             "cropHeight": 0,
//             "video_src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/a83a8d16-f429-4159-bb18-f9de48af1f19",
//             "duration": 15,
//             "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/a83a8d16-f429-4159-bb18-f9de48af1f19",
//             "crossOrigin": "anonymous",
//             "filters": []
//         },
//         {
//             "type": "image",
//             "version": "5.3.0",
//             "originX": "left",
//             "originY": "top",
//             "left": 0,
//             "top": 0,
//             "width": 775.61,
//             "height": 436.28,
//             "fill": "rgb(0,0,0)",
//             "stroke": null,
//             "strokeWidth": 0,
//             "strokeDashArray": null,
//             "strokeLineCap": "butt",
//             "strokeDashOffset": 0,
//             "strokeLineJoin": "miter",
//             "strokeUniform": false,
//             "strokeMiterLimit": 4,
//             "scaleX": 1,
//             "scaleY": 1,
//             "angle": 0,
//             "flipX": false,
//             "flipY": false,
//             "opacity": 1,
//             "shadow": null,
//             "visible": true,
//             "backgroundColor": "",
//             "fillRule": "nonzero",
//             "paintFirst": "fill",
//             "globalCompositeOperation": "source-over",
//             "skewX": 0,
//             "skewY": 0,
//             "cropX": 0,
//             "cropY": 0,
//             "name": "1d4040ff-79f8-4b69-8216-d23ddfca4e45.kre548nlmhk",
//             "disableCrop": false,
//             "cropWidth": 0,
//             "cropHeight": 0,
//             "video_src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/1d4040ff-79f8-4b69-8216-d23ddfca4e45",
//             "duration": 15,
//             "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/1d4040ff-79f8-4b69-8216-d23ddfca4e45",
//             "crossOrigin": "anonymous",
//             "filters": []
//         }
//     ],
//     "background": "#242728"
// };


//     if(!store.canvas) return ;
//     var canvas = store.canvas.loadFromJSON(JSON.stringify(data1), canvasLoaded , function(o :any, object:any) {
//       fabric.log(o, object);
//   });

//   function canvasLoaded(){      
//      canvas.renderAll.bind(canvas);
//      var objs = data1['objects'];      
//      for(var i=0; i< objs.length; i++){
//         if(objs[i].hasOwnProperty('video_src')){
//            var videoE = getVideoElement(objs[i]['src'],objs[i]["width"],objs[i]["height"]) as HTMLVideoElement; 
//            var fab_video = new fabric.CoverVideo(videoE, { type:objs[i]["type"],
//             left:objs[i]["left"],
//             top:objs[i]["top"]          
//            }) as any ;    
                
           
//            canvas.add(fab_video);
//            fab_video.getElement().play();                 
//            fabric.util.requestAnimFrame(function render() {                      
//               canvas.renderAll();                     
//               fabric.util.requestAnimFrame(render);                
//            });
//         }
//      }
//   }
  }

  const handleUndo=()=>{
// const data={
//   "version": "5.3.0",
//   "objects": [
//       {
//           "type": "image",
//           "version": "5.3.0",
//           "originX": "left",
//           "originY": "top",
//           "left": 0,
//           "top": 0,
//           "width": 780.09,
//           "height": 438.8,
//           "fill": "rgb(0,0,0)",
//           "stroke": null,
//           "strokeWidth": 0,
//           "strokeDashArray": null,
//           "strokeLineCap": "butt",
//           "strokeDashOffset": 0,
//           "strokeLineJoin": "miter",
//           "strokeUniform": false,
//           "strokeMiterLimit": 4,
//           "scaleX": 1,
//           "scaleY": 1,
//           "angle": 0,
//           "flipX": false,
//           "flipY": false,
//           "opacity": 1,
//           "shadow": null,
//           "visible": true,
//           "backgroundColor": "",
//           "fillRule": "nonzero",
//           "paintFirst": "fill",
//           "globalCompositeOperation": "source-over",
//           "skewX": 0,
//           "skewY": 0,
//           "cropX": 0,
//           "cropY": 0,
//           "name": "538c7e0c-3553-4436-a3e2-0cb321b51cf2.ujx37eid2gj",
//           "disableCrop": false,
//           "cropWidth": 0,
//           "cropHeight": 0,
//           "video_src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/538c7e0c-3553-4436-a3e2-0cb321b51cf2",
//           "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/538c7e0c-3553-4436-a3e2-0cb321b51cf2",
//           "crossOrigin": "anonymous",
//           "filters": []
//       },
//       {
//           "type": "image",
//           "version": "5.3.0",
//           "originX": "left",
//           "originY": "top",
//           "left": 0,
//           "top": 0,
//           "width": 774.11,
//           "height": 435.44,
//           "fill": "rgb(0,0,0)",
//           "stroke": null,
//           "strokeWidth": 0,
//           "strokeDashArray": null,
//           "strokeLineCap": "butt",
//           "strokeDashOffset": 0,
//           "strokeLineJoin": "miter",
//           "strokeUniform": false,
//           "strokeMiterLimit": 4,
//           "scaleX": 1,
//           "scaleY": 1,
//           "angle": 0,
//           "flipX": false,
//           "flipY": false,
//           "opacity": 1,
//           "shadow": null,
//           "visible": true,
//           "backgroundColor": "",
//           "fillRule": "nonzero",
//           "paintFirst": "fill",
//           "globalCompositeOperation": "source-over",
//           "skewX": 0,
//           "skewY": 0,
//           "cropX": 0,
//           "cropY": 0,
//           "name": "81eca294-46be-4a87-a366-0f4b388a8952.s7rqx0wh8pf",
//           "disableCrop": false,
//           "cropWidth": 0,
//           "cropHeight": 0,
//           "video_src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/81eca294-46be-4a87-a366-0f4b388a8952",
//           "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/81eca294-46be-4a87-a366-0f4b388a8952",
//           "crossOrigin": "anonymous",
//           "filters": []
//       },
//       {
//           "type": "image",
//           "version": "5.3.0",
//           "originX": "left",
//           "originY": "top",
//           "left": 0,
//           "top": 0,
//           "width": 775.39,
//           "height": 436.16,
//           "fill": "rgb(0,0,0)",
//           "stroke": null,
//           "strokeWidth": 0,
//           "strokeDashArray": null,
//           "strokeLineCap": "butt",
//           "strokeDashOffset": 0,
//           "strokeLineJoin": "miter",
//           "strokeUniform": false,
//           "strokeMiterLimit": 4,
//           "scaleX": 1,
//           "scaleY": 1,
//           "angle": 0,
//           "flipX": false,
//           "flipY": false,
//           "opacity": 1,
//           "shadow": null,
//           "visible": true,
//           "backgroundColor": "",
//           "fillRule": "nonzero",
//           "paintFirst": "fill",
//           "globalCompositeOperation": "source-over",
//           "skewX": 0,
//           "skewY": 0,
//           "cropX": 0,
//           "cropY": 0,
//           "name": "e32a9c6d-7884-481c-839a-1271b5822f8b.vm5s2iraui",
//           "disableCrop": false,
//           "cropWidth": 0,
//           "cropHeight": 0,
//           "video_src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/e32a9c6d-7884-481c-839a-1271b5822f8b",
//           "src": "https://s3.ap-south-1.amazonaws.com/vstock.bucket.1/users/uploads/videos/category/mahashivaratri/e32a9c6d-7884-481c-839a-1271b5822f8b",
//           "crossOrigin": "anonymous",
//           "filters": []
//       },
//       {
//           "type": "textbox",
//           "version": "5.3.0",
//           "originX": "left",
//           "originY": "top",
//           "left": 245,
//           "top": 81,
//           "width": 269.82,
//           "height": 66.67,
//           "fill": "#FFFFFF",
//           "strokeWidth": 1,
//           "strokeDashArray": null,
//           "strokeLineCap": "butt",
//           "strokeDashOffset": 0,
//           "strokeLineJoin": "milter",
//           "strokeMiterLimit": 1,
//           "scaleX": 1,
//           "scaleY": 1,
//           "angle": 0,
//           "flipX": false,
//           "flipY": false,
//           "opacity": 1,
//           "visible": true,
//           "fillRule": "nonzero",
//           "paintFirst": "fill",
//           "globalCompositeOperation": "source-over",
//           "skewX": 0,
//           "skewY": 0,
//           "fontFamily": "[object Object]",
//           "fontWeight": "normal",
//           "fontSize": 59,
//           "text": "Mahashivratri",
//           "underline": false,
//           "overline": false,
//           "linethrough": false,
//           "textAlign": "center",
//           "fontStyle": "normal",
//           "lineHeight": 1.6,
//           "textBackgroundColor": "",
//           "charSpacing": 0,
//           "styles": [],
//           "direction": "ltr",
//           "path": null,
//           "pathStartOffset": 0,
//           "pathSide": "left",
//           "pathAlign": "baseline",
//           "minWidth": 20,
//           "splitByGrapheme": false
//       }
//   ],
//   "background": "#242728"
// };    


//   if(!store.canvas) return ;
//     var canvas = store.canvas.loadFromJSON(JSON.stringify(data), canvasLoaded , function(o :any, object:any) {
//       fabric.log(o, object);
//   });
//   function canvasLoaded(){      
//     canvas.preserveObjectStacking=true;
//      canvas.renderAll.bind(canvas);
//      var objs = data['objects'];      
//      for(var i=0; i< objs.length; i++){
//         if(objs[i].hasOwnProperty('video_src')){
//           var videoE = getVideoElement(objs[i]['video_src'],objs[i]["width"],objs[i]["height"]) as HTMLVideoElement; 
//            var fab_video = new fabric.CoverVideo(videoE, {type:objs[i]["type"],left:objs[i]["left"],top:objs[i]["top"]} ) as any;                   
//            canvas.add(fab_video);
//            fab_video.getElement().play();              
//            fabric.util.requestAnimFrame(function render() {                      
//               canvas.renderAll();                     
//               fabric.util.requestAnimFrame(render);                
//            });
//         }
//     }
//   }
    
  }

  const handleLayers=()=>{
    // console.log(store.canvas?.getObjects().length);
    // console.log(store.canvas?.toJSON());
    // var labeledRect = new fabric.LabeledRect({
    //   width: 100,
    //   height: 50,
    //   left: 100,
    //   top: 100,
    //   label: 'mayank',
    //   fill: '#faa'
    // });

    // labeledRect.set({
    //   label: 'trololo',
    //   fill: '#aaf',
    //   rx: 10,
    //   ry: 10
    // });

  }
  const handleDeleteButton = async () => {
    try {
      if (!localStorage.getItem("template_id")) return;
      const template_id = localStorage.getItem("template_id");
      if (!store.selectedElement) return;
      const element_id = store.selectedElement?.id;
      await axios
        .delete(
          `${process.env.NEXT_PUBLIC_URL}/delete_element/${template_id}/${element_id}`
        )
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };


  const handleGetTemplateById = async () => {
    //console.log(store.editorElements);
    try {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/get_template_by_id/b99944f8-8055-4ebc-8477-983363264453`
        )
        .then(async (resolve) => {
          store.setVideos([]);
          store.removeAllEditorElements();
          localStorage.setItem("template_id", resolve.data.id);
          const template_arr = resolve.data.template_data;
          template_arr.forEach(async (ele: EditorElement) => {
            if (ele.type === "video") {
              const fileid = ele.id;
              const videoid_fileid = ele.id.split(".");
              const filename = ele.name;
              await getObjectURL(
                `users/uploads/videos/category/mahashivaratri/${videoid_fileid[0]}`
              )
                .then((url) => {
                  console.log(url);
                  ele.properties.src = url;
                  console.log(ele.properties.src);
                  //store.addVideoResource({fileid:fileid,filename:filename,filesource:url});
                  store.addEditorElementAfterFetch(ele);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (ele.type === "image") {
              const fileid = ele.id;
              const imageid_fileid = ele.id.split(".");
              const filename = ele.name;
              await getObjectURL(
                `users/uploads/images/category/mahashivaratri/${imageid_fileid[0]}`
              )
                .then((url) => {
                  console.log(url);
                  ele.properties.src = url;
                  console.log(ele.properties.src);
                  //store.addImageResource({fileid:fileid,filename:filename,filesource:url});
                  store.addEditorElementAfterFetch(ele);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (ele.type === "text") {
              await wait(2000);
              store.addEditorElementAfterFetch(ele);
            } else if (ele.type === "audio") {
            }
          });
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveTemplate4 = async () => {
    try {
      console.log(store.editorElements);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/create_template`,
          store.editorElements,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(async (resolve) => {
          console.log(resolve);
          location.reload();
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave3 = async () => {
    var arrCoverVideo: Object[] = [];
    var arrCoverImage: Object[] = [];
    var arrTextBox: Object[] = [];
    try {
      store.editorElements?.forEach((ele) => {
        if (ele.fabricObject?.type == "coverVideo") {
          arrCoverVideo = [...arrCoverVideo, ele];
          console.log(arrCoverVideo);
        } else if (ele.fabricObject?.type == "coverImage") {
          arrCoverImage = [...arrCoverImage, ele];
          console.log(arrCoverImage);
        } else if (ele.fabricObject?.type == "textbox") {
          arrTextBox = [...arrTextBox, ele];
          console.log(arrTextBox);
        }
      });
      const newCanvasObj = {
        version: "5.3.0",
        objects: {
          coverVideo: arrCoverVideo,
          coverImage: arrCoverImage,
          textbox: arrTextBox,
        },
        background: store.canvas?.backgroundColor,
      };
      await axios
        .post(`${process.env.NEXT_PUBLIC_URL}/create_template`, newCanvasObj)
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllTemplates = async () => {
    try {
      await axios
        .get("http://localhost:2020/templates/list_all_templates")
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetTemplate = async () => {
    await axios
      .get(
        "http://localhost:2020/templates/get_template_id/65c1030005708b1bc840f166"
      )
      .then((resolve) => {
        //store.canvas?.add(result.data);
        console.log(resolve["data"]["coverVideo"]);
        console.log(resolve["data"]["coverImage"]);
        console.log(resolve["data"]["textbox"]);
      })
      .catch((err) => console.log(err));
  };
  const handleSave2 = async () => {
    const newCanvas = {
      template_details: store.editorElements,
    };
    console.log(newCanvas);
    await axios
      .post(
        "http://localhost:2020/templates/create_template2",
        store.editorElements
      )
      .then((response) => {
        response["data"].forEach((ele: any) => {
          console.log(ele["placement"]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSave = async () => {
    console.log(store.editorElements);
    var arrCoverVideo: Object[] = [];
    var arrCoverImage: Object[] = [];
    var arrTextBox: Object[] = [];
    store.canvas?.getObjects().forEach((ele) => {
      if (ele.type == "coverVideo") {
        arrCoverVideo = [...arrCoverVideo, ele];
      } else if (ele.type == "coverImage") {
        arrCoverImage = [...arrCoverImage, ele];
      } else if (ele.type == "textbox") {
        arrTextBox = [...arrTextBox, ele];
      }
    });
    const newCanvasObj = {
      version: "5.3.0",
      objects: {
        coverVideo: arrCoverVideo,
        coverImage: arrCoverImage,
        textbox: arrTextBox,
      },
      background: store.canvas?.backgroundColor,
    };
    await axios
      .post("http://localhost:2020/templates/create_template", newCanvasObj)
      .then((resolve) => {
        console.log(resolve.data.result.objects);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };
  const getEditorElementsData = () => {
    console.log(store.editorElements);
  };
  const handlePlayPauseButton = () => {
    if (store.editorElements.length <= 0) {
      store.setPlaying(false);
      return;
    }
    store.setPlaying(!store.playing);
  };


  // useEffect(()=>{
  //    handleTemplate();
  // },[template])

  const handleMaximizeButton = () => {
    store.setMaximizeButton(false);
  };
  return (
    <div className=" bg-[#202020] py-1  dark:bg-[#202020] flex ">
      <div className="justify-between items-center flex-row py-2 flex w-full">
        <div className="inline-flex flex-row px-5  items-center  justify-start w-full">
          <button className="w-10 h-10">
            <span>
              <MdSave
                size={24}
                // onClick={handleSaveTemplate4}
                onClick={()=>{store.setModal(true)}}
                className="cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdFileDownload
                size={24}
                onClick={handleGetTemplateById}
                className=" cursor-pointer"
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentCut
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                } `}
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdOutlineContentCopy
              onClick={()=>handleCopy()}
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                } `}
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentPaste
               onClick={()=>handlePaste()}
              size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button  className="w-10 h-10">
            <span>
              <MdUndo onClick={handleUndo} size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdRedo size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdHistory onClick={handleCanvasJSON} size={24} className="cursor-pointer" />
            </span>
          </button>
        </div>
        <div className="inline-flex flex-row items-center  justify-end  w-full">
          <button
            onClick={() => {
              handleMaximizeButton;
            }}
            className="w-10 h-10"
          >
            <span>
              <MdFullscreen size={24} className=" cursor-pointer" />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdDelete
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                }`}
                onClick={handleDeleteButton}
              />
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <Icon
                size={24}
                onClick={handlePlayPauseButton}
                className="cursor-pointer"
              ></Icon>
            </span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdLayers onClick={handleLayers} size={24} className="cursor-pointer" />
            </span>
          </button>  
        </div>
      </div>
    </div>
  );
});