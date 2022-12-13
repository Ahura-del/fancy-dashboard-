import React from 'react'
import { Header } from '../components'
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
const EditorPage = () => {
  return (
    <div className="bg-white rounded-3xl mb-8 p-2 md:p-10 ">
      <Header category="Page" title="Editor" />
  
    </div>
  )
}

export default EditorPage