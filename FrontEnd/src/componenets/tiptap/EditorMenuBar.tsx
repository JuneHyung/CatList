import {useCallback} from 'react';
import MdiIcon from "../common/MdiIcon";

const EditorMenuBar = ({ editor }) => {
  
  const handleFormatHeader = useCallback((level: number)=>{
    editor.chain().focus().toggleHeading({level}).run();
  }, [editor])
  const handleFormatBold = useCallback(()=>{
    editor.chain().focus().toggleBold().run();
  }, [editor])
  const handleFormatItalic = useCallback(()=>{
    editor.chain().focus().toggleItalic().run();
  }, [editor])
  const handleFormatStrikethrough = useCallback(()=>{
    editor.chain().focus().toggleStrike().run();
  }, [editor])
  const handleFormatQuoteOpen = useCallback(()=>{
    editor.chain().focus().toggleBlockquote().run();
  }, [editor])
  const handleFormatLink = useCallback(()=>{
    if (editor.isActive("link")) {
      editor.chain().focus().unsetLink().run();
      return;
    }
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor])
  const handleFormatImage = useCallback(()=>{
    console.log('보류')
  }, [])
  const handleFormatCodTags = useCallback(()=>{
    editor.chain().focus().toggleCode().run();
  }, [editor])
  

  return (
    <ul className="editor-menu-group-wrap">
      <li className="editor-menu-group">
        <button className="editor-menu-button" onClick={()=>handleFormatHeader(1)}><MdiIcon name="mdiFormatHeader1"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={()=>handleFormatHeader(2)}><MdiIcon name="mdiFormatHeader2"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={()=>handleFormatHeader(3)}><MdiIcon name="mdiFormatHeader3"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={()=>handleFormatHeader(4)}><MdiIcon name="mdiFormatHeader4"></MdiIcon> </button>
      </li>
      <li className="editor-menu-group">
        <button className="editor-menu-button" onClick={handleFormatBold}><MdiIcon name="mdiFormatBold"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={handleFormatItalic}><MdiIcon name="mdiFormatItalic"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={handleFormatStrikethrough}><MdiIcon name="mdiFormatStrikethrough"></MdiIcon> </button>
      </li>
      <li className="editor-menu-group">
        <button className="editor-menu-button" onClick={handleFormatQuoteOpen}><MdiIcon name="mdiFormatQuoteOpen"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={handleFormatLink}><MdiIcon name="mdiLink"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={handleFormatImage}><MdiIcon name="mdiImage"></MdiIcon> </button>
        <button className="editor-menu-button" onClick={handleFormatCodTags}><MdiIcon name="mdiCodeTags"></MdiIcon> </button>
      </li>
    </ul>
  )
}
export default EditorMenuBar;