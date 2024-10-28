"use client";
import { fabric } from "fabric";
import React, { useEffect, useRef } from 'react';
import { MdOutlineCircle } from "react-icons/md";
import { TbOvalVertical } from "react-icons/tb";
import { LuPencilLine } from "react-icons/lu";
import { LiaDrawPolygonSolid } from "react-icons/lia";
import { MdPolyline } from "react-icons/md";
import { MdOutlineRectangle } from "react-icons/md";
import { IoTriangleOutline } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import { FaRegSquareFull } from "react-icons/fa6";
import { observer } from 'mobx-react';
import { StoreContext } from '@/store';
import { Store } from "@/store/Store";

const SHAPES_OPTIONS = [
  {
    name: "Circle",
    icon: MdOutlineCircle,
    action:(store:Store)=>{
       if(!store.canvas) return;
       var circle = new fabric.Circle({
        radius: 60, fill: 'green', left: 100, top: 100
      });
      store.canvas.add(circle);
    }
  },{
    name: "Ellipse",
    icon: TbOvalVertical,
    action:(store:Store)=>{
      if(!store.canvas) return;
         var ellipse=new fabric.Ellipse({ 
          rx:60,
          ry:30,
          fill:"red",
          left: 100, top: 100,
         })
         store.canvas.add(ellipse);
    }
  },
  {
    name: "Line",
    icon: LuPencilLine,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var line= new fabric.Line([100,50,200,250],{
        stroke:"blue",
        strokeWidth:3,
       
      })
      store.canvas.add(line);
    }
  },
  {
    name: "Polygon",
    icon: LiaDrawPolygonSolid,
    action:(store:Store)=>{
      if(!store.canvas) return;
    }
  },
  {
    name: "PolyLine",
    icon: MdPolyline,
    action:(store:Store)=>{
      if(!store.canvas) return;
    }
  },
  {
    name: "Square",
    icon:  FaRegSquareFull,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var square = new fabric.Rect({
        top: 100, left: 100, width: 60, height: 60, fill: 'green' 
      });
      square._controlsVisibility = {
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
      store.canvas.add(square);
  }
  },
  {
    name: "Rectangle",
    icon:  MdOutlineRectangle,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var rect = new fabric.Rect({
        top: 100, left: 100, width: 120, height: 60, fill: 'green' });
      store.canvas.add(rect);
  }
  },
  {
    name: "Triangle",
    icon:  IoTriangleOutline ,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var triangle = new fabric.Triangle({
        width: 60, height: 90, fill: 'blue', left: 50, top: 50
      });
      store.canvas.add(triangle);
    }
  },
  {
    name: "Star",
    icon:  RiStarSLine,
    action:(store:Store)=>{

    }
  }
];

export const ShapesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const circleRef=useRef<HTMLButtonElement>(null);
  const rectRef=useRef<HTMLButtonElement>(null);
  const lineRef=useRef<HTMLButtonElement>(null);
 const handleCircleShape=(event:React.MouseEvent<HTMLButtonElement,MouseEvent>)=>{
    if(!event || !event.target || !store.canvas) return;
       console.log(event);
       var circle = new fabric.Circle({
        radius: 60, fill: 'green', left: 100, top: 100
      });
       store.canvas.add(circle);
    

  }
  useEffect(()=>{
    // circleRef.current?.addEventListener("click",handleCircleShape);
    // return ()=>{
    //   circleRef.current?.removeEventListener("click",handleCircleShape);
    // }
  },[])
  return (
    <div className="items-center overflow-x-hidden overflow-y-auto justify-start flex flex-col py-2  px-0.5">
      <div className='w-[100px] p-0.5'/>
      <div className='grid grid-cols-3 gap-2'>
       {SHAPES_OPTIONS.map((shape)=>{
        return (<><button
          key={shape.name}
          onClick={() => {shape.action(store);}} className='p-2'><shape.icon size={24}/></button></>)
       })}
       
       {/* <button onClick={handleCircleShape} ref={circleRef} className='p-2'><TbOvalVertical size={24}/></button>
       <button onClick={handleCircleShape} ref={circleRef} className='p-2'><LuPencilLine size={24}/></button>
       <button onClick={handleCircleShape} ref={circleRef} className='p-2'><LiaDrawPolygonSolid size={24}/></button>
       <button onClick={handleCircleShape} ref={circleRef} className='p-2'><MdPolyline size={24}/></button>
       <button ref={rectRef} className='p-2'><MdOutlineRectangle size={24}/></button>
       <button className='p-2'><IoTriangleOutline size={24}/></button>
       <button className='p-2'><RiStarSLine size={24}/></button> */}
      </div>
    </div>
  )
});


