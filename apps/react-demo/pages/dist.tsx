import { Editable, useEditor } from "@wysimark/react"

export default function Page() {
  const editor = useEditor({
    initialMarkdown: "# Hello World",
    authToken: process.env.NEXT_PUBLIC_PORTIVE_AUTH_TOKEN,
    minHeight: 240,
    maxHeight: 720,
  })

  return (
    <div style={{ maxWidth: 720, margin: "2em auto" }}>
      <h1>Wysimark</h1>
      <button onClick={() => console.log(editor.getMarkdown())}>Get</button>
      <button onClick={() => editor.resetMarkdown("# Reset")}>Reset</button>
      <Editable editor={editor} style={{ maxHeight: 400 }} />
    </div>
  )
}
