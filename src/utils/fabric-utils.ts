// import { FaLessThanEqual } from "react-icons/fa6";
// import { EditorElement, EffecType } from "../types";
// import { fabric } from "fabric";
// import {
//   IImageOptions,
//   IObjectOptions,
//   IRectOptions,
// } from "fabric/fabric-impl";
// https://jsfiddle.net/i_prikot/pw7yhaLf/

// export const CoverImage = fabric.util.createClass(fabric.Image, {
  // type: "coverImage",
  // name: "",
  // customFilter: "none",
  // disableCrop: false,
  // cropWidth: 0,
  // cropHeight: 0,

  // initialize(element: HTMLImageElement | HTMLVideoElement, options: any) {
  //   element.crossOrigin = "anonymous";

  //   options = options || {};

  //   options = Object.assign(
  //     {
  //       cropHeight: this.height,
  //       cropWidth: this.width,
  //     },
  //     options
  //   );
  //   this.callSuper("initialize", element, options);
  // },

  // toObject: function(propertiesToInclude:any) {
  //   var object = {
  //     type: "image",
  //     version: fabric.version,
  //     name:this.name,
  //     originX: this.originX,
  //     originY: this.originY,
  //     left: this.left,
  //     top: this.top,
  //     width: this.width,
  //     height: this.height,
  //     fill: this.fill,
  //     stroke: this.stroke,
  //     strokeWidth: this.strokeWidth,
  //     strokeDashArray: this.strokeDashArray,
  //     strokeLineCap: this.strokeLineCap,
  //     strokeDashOffset: this.strokeDashOffset,
  //     strokeLineJoin: this.strokeLineJoin,
  //     strokeUniform: this.strokeUniform,
  //     strokeMiterLimit: this.strokeMiterLimit,
  //     scaleX: this.scaleX,
  //     scaleY: this.scaleY,
  //     angle: this.angle,
  //     flipX: this.flipX,
  //     flipY: this.flipY,
  //     opacity: this.opacity,
  //     shadow: this.shadow,
  //     visible: this.visible,
  //     backgroundColor: this.backgroundColor,
  //     fillRule: this.fillRule,
  //     paintFirst: this.paintFirst,
  //     globalCompositeOperation: this.globalCompositeOperation,
  //     skewX: this.skewX,
  //     skewY: this.skewY,
  //     cropX: this.cropX,
  //     cropY: this.cropY,
  //     image_src:this.image_src,
  //     src:"",
  //     crossOrigin: this.crossOrigin,
  //     filters: this.filters,
  //   };

  //   fabric.util.populateWithProperties(this, object, propertiesToInclude);

  //   return object;
  // },

  // getCrop(
  //   image: { width: number; height: number },
  //   size: { width: number; height: number }
  // ) {
  //   const width = size.width;
  //   const height = size.height;
  //   const aspectRatio = width / height;

  //   let newWidth;
  //   let newHeight;

  //   const imageRatio = image.width / image.height;

  //   if (aspectRatio >= imageRatio) {
  //     newWidth = image.width;
  //     newHeight = image.width / aspectRatio;
  //   } else {
  //     newWidth = image.height * aspectRatio;
  //     newHeight = image.height;
  //   }
  //   const x = (image.width - newWidth) / 2;
  //   const y = (image.height - newHeight) / 2;
  //   return {
  //     cropX: x,
  //     cropY: y,
  //     cropWidth: newWidth,
  //     cropHeight: newHeight,
  //   };
  // },

//   _render(ctx: CanvasRenderingContext2D) {
//     if (this.disableCrop) {
//       this.callSuper("_render", ctx);
//       return;
//     }

//     const width = this.width;
//     const height = this.height;
//     const crop = this.getCrop(this.getOriginalSize(), {
//       width: this.getScaledWidth(),
//       height: this.getScaledHeight(),
//     });
//     const { cropX, cropY, cropWidth, cropHeight } = crop;
//     ctx.save();
//     const customFilter: EffecType = this.customFilter;
//     ctx.filter = getFilterFromEffectType(customFilter);
//     ctx.drawImage(
//       this._element,
//       Math.max(cropX, 0),
//       Math.max(cropY, 0),
//       Math.max(1, cropWidth),
//       Math.max(1, cropHeight),
//       -width / 2,
//       -height / 2,
//       Math.max(0, width),
//       Math.max(0, height)
//     );

//     ctx.filter = "none";
//     ctx.restore();
//   },
// });

// export interface ICoverVideoOptions extends IImageOptions {
//   name: string;
//   customFilter: string;
//   disableCrop: boolean;
//   cropWidth: number;
//   cropHeight: number;
//   video_src: string;
//   video_start: number;
//   video_end: number;
// }

// export const CoverVideo = fabric.util.createClass(fabric.Image, {
//   name: "",
//   customFilter: "none",
//   disableCrop: false,
//   cropWidth: 0,
//   cropHeight: 0,
//   video_src: "",
//   video_start: 0,
//   video_end: 0,

//   initialize(element: HTMLVideoElement, options: ICoverVideoOptions) {
//     element.crossOrigin = "anonymous";

//     options = options || {};

//     options = Object.assign(
//       { cropHeight: this.height, cropWidth: this.width, src: element.src ,
//         video_src:element.src, video_start:0 ,video_end:element.duration,
//         disableCrop:false
//       },
//       options
//     );
    // console.log("video_src",options.video_src);

    // this.callSuper("initialize", element, options);
    // this.set("name", this.name);
    // this.set("disableCrop", false);
    // this.set("cropWidth", 0);
    // this.set("cropHeight", 0);
    // this.set("video_src", element.src);
    // this.set("src", element.src);
    // this.set("video_start", 0);
    // this.set("video_end", element.duration);

    // this._controlsVisibility = {
    //   bl: true,
    //   br: true,
    //   mb: false,
    //   ml: false,
    //   mr: false,
    //   mt: false,
    //   tl: true,
    //   tr: true,
    //   mtr: true,
    // };
    // this.transparentCorners = true;
    // this.disableCrop=false;
  // },

  // setOptions:function(options:any){
  //   for (var prop in options) {
  //     this[prop] = options[prop];
  //   }

  // },

  // toObject: function (options: any) {
  //   options = options || [];
  //   return this.callSuper(
  //     "toObject",
  //     [""].concat(Array.from(options), [
  //       "name",
  //       "disableCrop",
  //       "cropWidth",
  //       "cropHeight",
  //       "video_src",
  //       "duration",
  //       "src",
  //     ])
  //   );
  // },

  // fromObject: function (object: any, callback: any) {
  //   return fabric.Object._fromObject("CoverVideo", object, callback);
  // },

  // toObject: function(propertiesToInclude:any) {
  //   var object = {
  //     type: "image",
  //     version: fabric.version,
  //     name: this.name,
  //     originX: this.originX,
  //     originY: this.originY,
  //     left: this.left,
  //     top: this.top,
  //     width: this.width,
  //     height: this.height,
  //     fill: this.fill,
  //     stroke: this.stroke,
  //     strokeWidth: this.strokeWidth,
  //     strokeDashArray: this.strokeDashArray,
  //     strokeLineCap: this.strokeLineCap,
  //     strokeDashOffset: this.strokeDashOffset,
  //     strokeLineJoin: this.strokeLineJoin,
  //     strokeUniform: this.strokeUniform,
  //     strokeMiterLimit: this.strokeMiterLimit,
  //     scaleX: this.scaleX,
  //     scaleY: this.scaleY,
  //     angle: this.angle,
  //     flipX: this.flipX,
  //     flipY: this.flipY,
  //     opacity: this.opacity,
  //     shadow: this.shadow,
  //     visible: this.visible,
  //     backgroundColor: this.backgroundColor,
  //     fillRule: this.fillRule,
  //     paintFirst: this.paintFirst,
  //     globalCompositeOperation: this.globalCompositeOperation,
  //     skewX: this.skewX,
  //     skewY: this.skewY,
  //     cropX: this.cropX,
  //     cropY: this.cropY,
  //     video_src: this.video_src,
  //     src:"",
  //     duration:this.duration,
  //     crossOrigin: this.crossOrigin,
  //     filters: this.filters,
  //   };

  //   fabric.util.populateWithProperties(this, object, propertiesToInclude);

  //   return object;
  // },

  // getCrop(
  //   image: { width: number; height: number },
  //   size: { width: number; height: number }
  // ) {
  //   const width = size.width;
  //   const height = size.height;
  //   const aspectRatio = width / height;
  //   let newWidth;
  //   let newHeight;

  //   const imageRatio = image.width / image.height;

  //   if (aspectRatio >= imageRatio) {
  //     newWidth = image.width;
  //     newHeight = image.width / aspectRatio;
  //   } else {
  //     newWidth = image.height * aspectRatio;
  //     newHeight = image.height;
  //   }
  //   const x = (image.width - newWidth) / 2;
  //   const y = (image.height - newHeight) / 2;
  //   return {
  //     cropX: x,
  //     cropY: y,
  //     cropWidth: newWidth,
  //     cropHeight: newHeight,
  //   };
  // },

//   _render(ctx: CanvasRenderingContext2D) {
//     if (this.disableCrop) {
//       this.callSuper("_render", ctx);
//       return;
//     }

//     const width = this.width;
//     const height = this.height;
//     const crop = this.getCrop(this.getOriginalSize(), {
//       width: this.getScaledWidth(),
//       height: this.getScaledHeight(),
//     });
//     const { cropX, cropY, cropWidth, cropHeight } = crop;

//     const video = this._element as HTMLVideoElement;
//     const videoScaledX = video.width / video.videoWidth;
//     const videoScaledY = video.height / video.videoHeight;

//     ctx.save();
//     const customFilter: EffecType = this.customFilter;
//     ctx.filter = getFilterFromEffectType(customFilter);
//     ctx.drawImage(
//       this._element,
//       Math.max(cropX, 0) / videoScaledX,
//       Math.max(cropY, 0) / videoScaledY,
//       Math.max(1, cropWidth) / videoScaledX,
//       Math.max(1, cropHeight) / videoScaledY,
//       -width / 2,
//       -height / 2,
//       Math.max(0, width),
//       Math.max(0, height)
//     );
//     ctx.filter = "none";

//     ctx.restore();
//   },
// });

// function getFilterFromEffectType(effectType: EffecType) {
//   switch (effectType) {
//     case "blackAndWhite":
//       return "grayscale(100%)";
//     case "sepia":
//       return "sepia(100%)";
//     case "invert":
//       return "invert(100%)";
//     case "saturate":
//       return "saturate(100%)";
//     default:
//       return "none";
//   }
// }

// declare module "fabric" {
//   namespace fabric {
//     class CoverVideo extends Image {
//       // type: "coverVideo";
//       disableCrop: boolean;
//       cropWidth: number;
//       cropHeight: number;
//     }
//     class CoverImage extends Image {
//       // type: "coverImage";
//       name: string;
//       customFilter: string;
//       disableCrop: boolean;
//       cropWidth: number;
//       cropHeight: number;
//       video_src: string;
//       video_start: number;
//       video_end: number;
//     }
//     class LabeledRect extends Rect {
//       type: "labeledRect";
//       label: string;
//     }
//   }
// }

// export interface ILabeledRectOptions extends IRectOptions {
//   label: string;
// }

///////////////////////////////////////////////////////////////////////////////////////////
// export const LabeledRect = fabric.util.createClass(fabric.Rect, {
//   type: "labeledRect",
//   label: "",

  // initialize can be of type function(options) or function(property, options), like for text.
  // no other signatures allowed.
  // initialize: function (options: ILabeledRectOptions) {
  //   options || (options = { label: "" });

  //   this.callSuper("initialize", options);
  //   this.set("label", options.label || "");
  // },

  // toObject: function () {
  //   return fabric.util.object.extend(this.callSuper("toObject"), {
  //     label: this.get("label"),
  //   });
  // },

  // fromObject: function (object: any, callback: any) {
  //   return fabric.Object._fromObject("LabeledRect", object, callback);
  // },

//   _render: function (ctx: CanvasRenderingContext2D) {
//     this.callSuper("_render", ctx);

//     ctx.font = "20px Helvetica";
//     ctx.fillStyle = "#333";
//     ctx.fillText(this.label, -this.width / 2, -this.height / 2 + 20);
//   },
// });

//////////////////////////////////////////////////////////////////////////////////////////

// fabric.CoverImage = CoverImage;
// fabric.CoverVideo = CoverVideo;
// fabric.LabeledRect = LabeledRect;

// export class FabricUitls {
//   static getClipMaskRect(editorElement: EditorElement, extraOffset: number) {
//     const extraOffsetX = extraOffset / editorElement.placement.scaleX;
//     const extraOffsetY = extraOffsetX / editorElement.placement.scaleY;
//     const clipRectangle = new fabric.Rect({
//       left: editorElement.placement.x - extraOffsetX,
//       top: editorElement.placement.y - extraOffsetY,
//       width: editorElement.placement.width + extraOffsetX * 2,
//       height: editorElement.placement.height + extraOffsetY * 2,
//       scaleX: editorElement.placement.scaleX,
//       scaleY: editorElement.placement.scaleY,
//       absolutePositioned: true,
//       fill: "transparent",
//       stroke: "transparent",
//       opacity: 0.5,
//       strokeWidth: 0,
//     });
//     return clipRectangle;
//   }
// }


import { EditorElement, EffecType } from "../types";
import { fabric } from "fabric";
// https://jsfiddle.net/i_prikot/pw7yhaLf/

export const CoverImage = fabric.util.createClass(fabric.Image, {
  // type: "coverImage",
  customFilter: "none",
  disableCrop: false,
  cropWidth: 0,
  cropHeight: 0,

  initialize(element: HTMLImageElement | HTMLVideoElement, options: any) {
    element.crossOrigin = "anonymous";
    options = options || {};

    options = Object.assign(
      {
        cropHeight: this.height,
        cropWidth: this.width,
      },
      options
    );
    //console.log(element)
    this.callSuper("initialize", element, options);
  },

  toObject:function(){

  },

  getCrop(
    image: { width: number; height: number },
    size: { width: number; height: number }
  ) {
    const width = size.width;
    const height = size.height;
    const aspectRatio = width / height;

    let newWidth;
    let newHeight;

    const imageRatio = image.width / image.height;

    if (aspectRatio >= imageRatio) {
      newWidth = image.width;
      newHeight = image.width / aspectRatio;
    } else {
      newWidth = image.height * aspectRatio;
      newHeight = image.height;
    }
    const x = (image.width - newWidth) / 2;
    const y = (image.height - newHeight) / 2;
    return {
      cropX: x,
      cropY: y,
      cropWidth: newWidth,
      cropHeight: newHeight,
    };
  },

  _render(ctx: CanvasRenderingContext2D) {
    if (this.disableCrop) {
      this.callSuper("_render", ctx);
      return;
    }

    const width = this.width;
    const height = this.height;
    const crop = this.getCrop(this.getOriginalSize(), {
      width: this.getScaledWidth(),
      height: this.getScaledHeight(),
    });
    const { cropX, cropY, cropWidth, cropHeight } = crop;
    ctx.save();
    const customFilter: EffecType = this.customFilter;
    ctx.filter = getFilterFromEffectType(customFilter);
    ctx.drawImage(
      this._element,
      Math.max(cropX, 0),
      Math.max(cropY, 0),
      Math.max(1, cropWidth),
      Math.max(1, cropHeight),
      -width / 2,
      -height / 2,
      Math.max(0, width),
      Math.max(0, height)
    );

    ctx.filter = "none";
    ctx.restore();
  },
});


export const CoverVideo = fabric.util.createClass(fabric.Image, {
  // type: "coverVideo",
  customFilter: "none",
  disableCrop: false,
  cropWidth: 0,
  cropHeight: 0,

  initialize(element: HTMLVideoElement, options: any) {
    element.crossOrigin = "anonymous";

    options = options || {};

    options = Object.assign(
      {
        cropHeight: this.height,
        cropWidth: this.width,
      },
      options
    );
    this._controlsVisibility = {
      bl: true,
      br: true,
      mb: false,
      ml: false,
      mr: false,
      mt: false,
      tl: true,
      tr: true,
      mtr: true,
    };
    //console.log(element)
    this.callSuper("initialize", element, options);
  },

  

  getCrop(
    image: { width: number; height: number },
    size: { width: number; height: number }
  ) {
    const width = size.width;
    const height = size.height;
    const aspectRatio = width / height;
    let newWidth;
    let newHeight;

    const imageRatio = image.width / image.height;

    if (aspectRatio >= imageRatio) {
      newWidth = image.width;
      newHeight = image.width / aspectRatio;
    } else {
      newWidth = image.height * aspectRatio;
      newHeight = image.height;
    }
    const x = (image.width - newWidth) / 2;
    const y = (image.height - newHeight) / 2;
    return {
      cropX: x,
      cropY: y,
      cropWidth: newWidth,
      cropHeight: newHeight,
    };
  },

  _render(ctx: CanvasRenderingContext2D) {
    if (this.disableCrop) {
      this.callSuper("_render", ctx);
      return;
    }

    const width = this.width;
    const height = this.height;
    const crop = this.getCrop(this.getOriginalSize(), {
      width: this.getScaledWidth(),
      height: this.getScaledHeight(),
    });
    const { cropX, cropY, cropWidth, cropHeight } = crop;

    const video = this._element as HTMLVideoElement;
    const videoScaledX = video.width / video.videoWidth;
    const videoScaledY = video.height / video.videoHeight;

    ctx.save();
    const customFilter: EffecType = this.customFilter;
    ctx.filter = getFilterFromEffectType(customFilter);
    ctx.drawImage(
      this._element,
      Math.max(cropX, 0) / videoScaledX,
      Math.max(cropY, 0) / videoScaledY,
      Math.max(1, cropWidth) / videoScaledX,
      Math.max(1, cropHeight) / videoScaledY,
      -width / 2,
      -height / 2,
      Math.max(0, width),
      Math.max(0, height)
    );
    ctx.filter = "none";

    ctx.restore();
  },
});

function getFilterFromEffectType(effectType: EffecType) {
  switch (effectType) {
    case "blackAndWhite":
      return "grayscale(100%)";
    case "sepia":
      return "sepia(100%)";
    case "invert":
      return "invert(100%)";
    case "saturate":
      return "saturate(100%)";
    default:
      return "none";
  }
}

declare module "fabric" {
  namespace fabric {
    class CoverVideo extends Image {
      // type: "coverVideo";
      disableCrop: boolean;
      cropWidth: number;
      cropHeight: number;
    }
    class CoverImage extends Image {
      // type: "coverImage";
      disableCrop: boolean;
      cropWidth: number;
      cropHeight: number;
    }
  }
}

fabric.CoverImage = CoverImage;
fabric.CoverVideo = CoverVideo;

export class FabricUitls {
  static getClipMaskRect(editorElement: EditorElement, extraOffset: number) {
    const extraOffsetX = extraOffset / editorElement.placement.scaleX;
    const extraOffsetY = extraOffsetX / editorElement.placement.scaleY;
    const clipRectangle = new fabric.Rect({
      left: editorElement.placement.x - extraOffsetX,
      top: editorElement.placement.y - extraOffsetY,
      width: editorElement.placement.width + extraOffsetX * 2,
      height: editorElement.placement.height + extraOffsetY * 2,
      scaleX: editorElement.placement.scaleX,
      scaleY: editorElement.placement.scaleY,
      absolutePositioned: true,
      fill: "transparent",
      stroke: "transparent",
      opacity: 0.5,
      strokeWidth: 0,
    });
    return clipRectangle;
  }
}
