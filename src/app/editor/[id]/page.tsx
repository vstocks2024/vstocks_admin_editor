'use client';

import { useTemplate } from '@/context/template';
import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';


const DynamicEditor = dynamic(() => import('../../../components/Editor').then(a => a.EditorWithStore), {
  ssr: false,
})


export default function EditorPage() {
  const params=useParams();
  const {template,setTemplate}=useTemplate();

  useEffect(()=>{
    setTemplate(params.id);
  },[])

  return (
    <DynamicEditor />
  );
}

EditorPage.diplsayName = "EditorPage";

