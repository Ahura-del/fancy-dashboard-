import React from "react";
import  {Header}  from "../components";
import Editor from '../components/Editor'

const EditorPage = ()=>{
  return (
    <div className="bg-white rounded-3xl mb-8 p-5 md:p-10 ">
      <Header category="Page" title="Editor" />
      <div className="w-[80%] mx-auto">
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage