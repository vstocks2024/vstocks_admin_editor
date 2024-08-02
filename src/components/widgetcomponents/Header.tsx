"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { IoMdAddCircleOutline, IoMdRemoveCircleOutline } from "react-icons/io";


type HeaderProps={
    header:string;
}

export const Header =observer (({header}:HeaderProps) => {
  const store = React.useContext(StoreContext);
  return (
  <>
      <section className="inline-flex flex-row w-full bg-[#101010] justify-between px-1 py-2 text-base items-center">
            <div className="flex flex-col items-center justify-center ">
              <h2 className="title text-[14px] font-bold">{header} Properties</h2>
            </div>
            <div className="inline-flex flex-row items-center justify-between">
              <button onClick={()=>store.toggleExpandAll(true)}><IoMdAddCircleOutline size={24}/></button>&nbsp;&nbsp;
              <button onClick={()=>store.toggleExpandAll(false)}><IoMdRemoveCircleOutline size={24}/></button>
            </div>
      </section>
  </>
  )
})


