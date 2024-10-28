"use client";
import { fabric } from "fabric";
import React, { useEffect, useRef } from 'react';
import { MdOutlineCircle } from "react-icons/md";
import { TbOvalVertical } from "react-icons/tb";
import { LuPencilLine } from "react-icons/lu";
import { FiOctagon } from "react-icons/fi";
import { MdPolyline } from "react-icons/md";
import { MdOutlineRectangle } from "react-icons/md";
import { IoTriangleOutline } from "react-icons/io5";
import { RiStarSLine } from "react-icons/ri";
import { FaRegSquareFull } from "react-icons/fa6";
import { LuHexagon } from "react-icons/lu";
import { MdOutlinePentagon } from "react-icons/md";
import { RiHexagonFill } from "react-icons/ri";
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
        radius: 60, fill: 'green', left: 100, top: 100,
        includeDefaultValues: true,
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
          includeDefaultValues: true,
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
        includeDefaultValues: true,
       
      })
      store.canvas.add(line);
    }
  },
  {
    name: "Pentagon",
    icon: MdOutlinePentagon,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var pentagon = new fabric.Polygon([ 
        { x: 200, y: 10 }, 
        { x: 250, y: 50 }, 
        { x: 250, y: 180}, 
        { x: 150, y: 180}, 
        { x: 150, y: 50 }], { 
            fill: 'red' ,
            includeDefaultValues: true,
        });
        store.canvas.add(pentagon); 
    }
  },
  {
    name: "PolyLine",
    icon: MdPolyline,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var polyline = new fabric.Polyline([ 
        { x: 200, 
            y: 10 }, 
        {x: 250, 
            y: 50 
        }, { 
            x: 250, 
            y: 180 
        }, { 
            x: 150, 
            y: 180 
        }, { 
            x: 150, 
            y: 50 
        }, { 
            x: 200, 
            y: 10 }], { 
            stroke: 'green',  
            strokeWidth: 2,  
            
            includeDefaultValues: true,
 
        }); 
        store.canvas.add(polyline);
    }
  },
  {
    name: "Square",
    icon:  FaRegSquareFull,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var square = new fabric.Rect({
        top: 100, left: 100, width: 125, height: 125, fill: 'blue', 
        includeDefaultValues: true,
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
        top: 100, left: 100, width: 120, height: 60, fill: 'green',
        includeDefaultValues: true, });
      store.canvas.add(rect);
  }
  },
  {
    name: "Triangle",
    icon:  IoTriangleOutline ,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var triangle = new fabric.Triangle({
        width: 60, height: 90, fill: 'blue', left: 50, top: 50,
        includeDefaultValues: true,
      });
      store.canvas.add(triangle);
    }
  },
  {
    name: "Hexagon",
    icon:  RiHexagonFill,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var hexagon = new fabric.Polygon(
        [
           { x: 50, y: 0 },
           { x: 25, y: 43.30},
           { x: -25, y: 43.301 },
           { x: -50, y: 0},
           { x: -25, y: -43.301},
           { x: 25, y: -43.301 },
        ],
        {
           fill: "blue",
           left: 140,
           top: 10,
        }
     );
      store.canvas.add(hexagon);
    }
  },
  {
    name: "Octagon",
    icon:  FiOctagon,
    action:(store:Store)=>{
      if(!store.canvas) return;
      var octagon = new fabric.Polygon(
        [
           { x: -37.282, y: 90 },
           { x: 37.282, y: 90 },
           { x: 90, y: 37.282 },
           { x: 90, y: -37.282 },
           { x: 37.282, y: -90 },
           { x: -37.282, y: -90 },
           { x: -90, y: -37.282 },
           { x: -90, y: 37.282 },
        ],
        {
           stroke: "red",
           left: 110,
           top: 10,
           strokeWidth: 2,
           strokeLineJoin: "bevil",
        } 
     );
     store.canvas.add(octagon);
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
      </div>
    </div>
  )
});


