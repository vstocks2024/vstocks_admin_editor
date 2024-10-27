import React, { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { StoreContext } from "@/store";
import { BsPlusCircleFill } from "react-icons/bs";
import { MenuFooter } from "./MenuFooter";
import { observer } from "mobx-react";

export const CanvasFooter = observer(() => {
  const store = React.useContext(StoreContext);
  const [menufooter, setMenuFooter] = useState<boolean>(false);
  const menufooterRef = useRef<HTMLDivElement>(null);
  const handleCloseMenuFooter = (event: any) => {
   try {
    if (!menufooterRef.current?.contains(event?.target)) {
      setMenuFooter(false);
    }
  }
  catch(err){
    console.error(err);
  }
  };
  const handleCanvasZoom = (event: React.ChangeEvent<HTMLSelectElement>) => {
    try{
    var zoom: number = store.canvas?.getZoom() || 1;
    zoom = Number(event.target.value) / 100;
    store.canvas?.zoomToPoint({ x: 0, y: 0 }, zoom);
    event.preventDefault();
    event.stopPropagation();
  }
    catch(err){
      console.error(err);
    }
  }
  useEffect(() => {
    document.addEventListener("click", handleCloseMenuFooter, true);

    return () => {
      document.removeEventListener("click", handleCloseMenuFooter);
    };
  }, []);

  return (
    <div className="bg-[rgb(32,32,32)] relative w-full">
      {menufooter === true ? (
        <React.Fragment>
          <div ref={menufooterRef}>
            <MenuFooter />
          </div>
        </React.Fragment>
      ) : null}
      <button
        onClick={(event) => setMenuFooter(!menufooter)}
        className={`absolute flex min-[960px]:hidden -top-[calc(50%-10px)]  left-[calc(50%-20px)]`}
      >
        <BsPlusCircleFill color="#2E67DD" size={40} />
      </button>
      <div className="flex flex-row items-center justify-end px-1">
        <div className="flex flex-row items-center justify-center m-0.5">
          <div>
            <FaMinus size={12} />
          </div>
          <div className="inline-flex flex-col gap-y-1 outline-none appearance-none focus:outline-none border-b m-0.5 p-0.5 items-center justify-between">
            <h5 className="text-gray-100 text-[10px] text-start w-full m-0.5 px-1">
              Zoom
            </h5>
            <select
              defaultValue={100}
              onChange={handleCanvasZoom}
              className="text-[10px]"
            >
              <option value={25}>25%</option>
              <option value={50}>50%</option>
              <option value={75}>75%</option>
              <option value={100}>100%</option>
              <option value={125}>125%</option>
              <option value={150}>150%</option>
              <option value={175}>175%</option>
              <option value={200}>200%</option>
              <option value={250}>250%</option>
              <option value={300}>300%</option>
            </select>
          </div>
          <div>
            <FaPlus size={12} />
          </div>
        </div>
      </div>
    </div>
  );
});
