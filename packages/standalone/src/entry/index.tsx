import { createRef, RefObject, useImperativeHandle } from "react"
import { createRoot } from "react-dom/client"

import { Editable, useEditor } from "../../../react/src/entry"

type EditorOptions = Parameters<typeof useEditor>[0] & {
  onChange?: () => void
  placeholder?: string
}
type Editor = ReturnType<typeof useEditor>

function StandaloneEditor({
  options: { onChange, placeholder, ...options },
  editorRef,
}: {
  options: EditorOptions
  editorRef: RefObject<Editor>
}) {
  const editor = useEditor(options)

  useImperativeHandle(editorRef, () => editor, [editor])

  return (
    <Editable editor={editor} onChange={onChange} placeholder={placeholder} />
  )
}

type Wysimark = {
  unmount: () => void
  getMarkdown: () => string
  setMarkdown: (markdown: string) => void
}

export function createWysimark(
  containerElement: HTMLElement,
  options: EditorOptions
): Wysimark {
  const editorRef = createRef<Editor>()

  const root = createRoot(containerElement)

  root.render(<StandaloneEditor editorRef={editorRef} options={options} />)

  return {
    unmount() {
      try {
        root.unmount()
      } catch (e) {
        /* ignore */
      }
    },
    getMarkdown() {
      const markdown = editorRef.current?.getMarkdown()
      return typeof markdown === "string"
        ? markdown
        : options.initialMarkdown || ""
    },
    setMarkdown(markdown: string) {
      editorRef.current?.resetMarkdown(markdown)
    },
  }
}
