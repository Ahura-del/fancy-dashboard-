
import React ,{ Component } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

class EditorPage extends Component {
  constructor() {
    super();
    this.state = {
      editorState: EditorState.createEmpty(),
    };
  }

  onEditorStateChange = (editorState) => {
    this.setState({ editorState });
  };
  render() {
    const { editorState } = this.state;
    return (
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange}
          editorStyle={{border:"1px solid #bbb" , height:"400px" , padding:"5px" , color:'#888'}}
          />
    );
  }
}

export default EditorPage