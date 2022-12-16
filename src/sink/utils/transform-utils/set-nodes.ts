import { Editor, Node, NodeMatch, Transforms } from "slate"

/**
 * An improved version of `setNodes` that takes a `convert` option.
 *
 * In existing `setNodes` we can specify how we want to setNodes statically.
 * That is, before we execute `setNodes` we need to know which properties
 * we want to set.
 *
 * This version of `setNodes` allows us to dynamically setNodes by allowing
 * us to specify a function argument. The function takes the original value of
 * an Element and returns the match.
 */
export function setNodes<T extends Node>(
  editor: Editor,
  {
    match,
    convert,
  }: { match: NodeMatch<T>; convert: (node: T) => Record<string, unknown> }
) {
  const entries = Array.from(Editor.nodes<T>(editor, { match }))
  if (entries.length === 0) return false
  for (const entry of entries) {
    const [node] = entry
    Transforms.setNodes(editor, convert(node), { at: entry[1] })
  }
  return true
}