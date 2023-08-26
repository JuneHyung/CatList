import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import EditorMenuBar from "./EditorMenuBar"
import { useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import TurndownService from 'turndown';

const Tiptap = () => {
  const [content, setContent] = useState('');
  const convertToMarkdown = (editor) =>{
    const turndownService = new TurndownService();
    const html = editor.getHTML();
    const md = turndownService.turndown(html);
    setContent(md);
  }
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    onTransaction({editor}){
      convertToMarkdown(editor)
    }
  })

  return (
    <div>
      <div style={{backgroundColor: '#fff'}}>
      <EditorMenuBar editor={editor} />
      <EditorContent editor={editor} />
      </div>
      <h2>Previewer</h2>
      <ReactMarkdown children={content}></ReactMarkdown>
    </div>
  )
}

export default Tiptap