import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import EditorMenuBar from "./EditorMenuBar"
import { useState } from "react";
// import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Focus from '@tiptap/extension-focus'
import TurndownService from 'turndown';

const Tiptap = () => {
  const [content, setContent] = useState('');
  const convertToMarkdown = (editor) =>{
    console.log(editor)
    const turndownService = new TurndownService();
    const html = editor.getHTML();
    console.log(editor.getJSON())
    const md = turndownService.turndown(html);
    setContent(md);
  }
  const editor = useEditor({
    extensions: [
      StarterKit,
      Focus.configure({
        className: 'has-focus',
        mode: 'all',
      }),
    ],
    onTransaction({editor}){
      convertToMarkdown(editor)
    }
  })

  return (
    <div className="editor-wrap-box">
      <EditorMenuBar editor={editor} />
      <EditorContent editor={editor} className="editor-content"/>
    </div>
  )
}

export default Tiptap