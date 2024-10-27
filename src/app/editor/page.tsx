'use client';

import dynamic from 'next/dynamic'

const DynamicEditor = dynamic(() => import('../../components/Editor').then(a => a.EditorWithStore), {
  ssr: false,
})


function EditorPage() {
  return (
    <DynamicEditor />
  );
}

EditorPage.diplsayName = "EditorPage";

export default EditorPage;


