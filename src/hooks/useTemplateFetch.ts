import { useTemplate } from "@/context/template";
import { useState } from "react"

export const useTemplateFetch=()=>{
    const [loading,setLoading]=useState(false);
    const {template}=useTemplate();
   //  const handleTemplate=async()=>{
   //     setLoading(true);
   //     console.log(template);
   //     try{
   //       const resp=await fetch(`http://localhost:3000/animations/getAnimationDataById/${template}`,{
   //          method:"GET",
   //          headers:{"Content-Type":"application/json"},
   //       });
   //       if(resp.ok){
   //          const data=await resp.json();
   //         if(data.error) throw new Error("No Such Template Found");
   //         console.log(data);

   //       }else{
   //          console.log("No such template found");
   //       }
   //     }
   //     catch(error){
   //       console.log(error);
   //     }
   //     finally{
   //      setLoading(false);
   //     }
       
   //  }
   //  return {loading,handleTemplate};
   return {loading};
}