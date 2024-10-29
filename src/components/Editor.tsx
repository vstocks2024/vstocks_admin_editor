"use client";
import { fabric } from "fabric";
import React, { useEffect, useState } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { Resources } from "../components/Resources";
import { ElementsPanel } from "@/components/panels/ElementsPanel";
import { Menu } from "../components/Menu";
import { TimeLine } from "../components/TimeLine";
import "@/utils/fabric-utils";
import { MainPart } from "./MainPart";
import { MainCanvas } from "../components/MainCanvas";
import { CanvasFooter } from "../components/CanvasFooter";
import { Store } from "@/store/Store";
// import { BackCustomize } from "./BackCustomize";
import { MainLayout } from "@/app/layouts/MainLayout";

export const EditorWithStore = () => {
  const [store] = useState(new Store());
  return (
    <StoreContext.Provider value={store}>
      <Editor></Editor>
    </StoreContext.Provider>
  );
};

export const Editor = observer(() => {
  const store = React.useContext(StoreContext);
  document.title = "Editor--VSTOCKS";

  const handleMouseOver=(e:fabric.IEvent<Event>)=>{
     console.log(e);
  }

  const handleMouseDown=(e:fabric.IEvent<Event>)=>{
    if (!e.target) {
      store.setSelectedElement(null);
    }
 }

 const handleObjectModified=(e:fabric.IEvent<Event>)=>{
  if(!e.target) return;
    console.log(e.target);
  
 }

//  const handleObjectMoving=(e:fabric.IEvent<Event>)=>{
//   if(!e.target) return;
//     console.log(e.target);
  
//  }

  useEffect(() => {
    console.log(store.width, store.height);
    var canvas = new fabric.Canvas("lower-canvas", {
      height: store.height,
      width: store.width,
      backgroundColor: "#242728",
      preserveObjectStacking:true,
      
    });
    fabric.Object.prototype.transparentCorners = true;

    fabric.Object.prototype.cornerStyle = "rect";

    fabric.Object.prototype.cornerSize = 14;

    
    // canvas mouse down without target should deselect active object
    canvas.on("mouse:down",handleMouseDown);
    // canvas.on("object:moving",handleObjectMoving);
    canvas.on("object:modified",handleObjectModified);

    store.setCanvas(canvas);
    // fabric.Image.fromURL('https://fastly.picsum.photos/id/16/775/436/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE', function(oImg) {
    //   if(!store.canvas) return;
    //   store.canvas.add(oImg);
    // });
    
    fabric.util.requestAnimFrame(function render() {
      canvas.renderAll();
      fabric.util.requestAnimFrame(render);
    });

    

    // canvas.on("mouse:over",handleMouseOver);
    return ()=>{
      // canvas.off("mouse:over",handleMouseOver);
      // canvas.off("object:moving",handleObjectMoving);
      canvas.off("object:modified",handleObjectModified);
      canvas.off("mouse:down",handleMouseDown);
      canvas.dispose();
    }
  }, []);
  return (
    <MainLayout>
      <main className="relative flex flex-col items-center justify-between   w-full">
        <div className="flex flex-col  w-full">
          {/* <BackCustomize /> */}
          <MainPart />
        </div>
        {/* h-[79.5632vh] */}
        <div className=" w-full  h-[510px] ">
          <div className="flex flex-row items-start h-full justify-between w-full">
            <Menu />
            {store.selectedMenuOption ? <Resources /> : null}
            <MainCanvas />
            <ElementsPanel elementtype={store.selectedElement?.type} />
            <TimeLine />
          </div>
        </div>
        <CanvasFooter />
      </main>
    </MainLayout>
  );
});
