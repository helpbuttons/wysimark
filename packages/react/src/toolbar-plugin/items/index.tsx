import { MenuItemData } from "~/src/shared-overlays"

import { TableDialog } from "../components"
import { AnchorDialog } from "../components/dialog/anchor-dialog"
import { EmojiDialog } from "../components/dialog/emoji-dialog"
import { AttachmentDialog, ImageDialog } from "../components/dialog/file-dialog"
import * as Icon from "../icons"
import { codeBlockItems } from "./codeBlockItems"
import { headingItems } from "./heading-items"
import { listItems } from "./list-items"
import { quoteItems } from "./quote-items"
import { styleItems } from "./style-items"

/**
 * A collection of `Item` objects that describe either
 *
 * - A Button in the toolbar
 * - A Menu Item in a drop down of the toolbar
 *
 * An `Item` is described in the same way whether it is a button or a menu
 * item making them interchangeable.
 */
export const items: MenuItemData[] = [
  {
    icon: Icon.H,
    title: "Paragraph Style",
    more: true,
    children: headingItems,
  },
  "divider",
  {
    icon: Icon.Bold,
    title: "Bold",
    hotkey: "mod+b",
    action: (editor) => editor.marksPlugin.toggleBold(),
  },
  {
    icon: Icon.Italic,
    title: "Italic",
    hotkey: "mod+i",
    action: (editor) => editor.marksPlugin.toggleItalic(),
  },
  { icon: Icon.Style, title: "Text Style", more: true, children: styleItems,show: false },
  "divider",
  {
    icon: Icon.BulletList,
    title: "Lists",
    more: true,
    children: listItems,
    show: false,
  },
  "divider",
  {
    icon: Icon.Table,
    title: "Table",
    more: true,
    Component: TableDialog,
    show: false,
  },
  {
    icon: Icon.Blockquote,
    title: "Block Quote",
    more: true,
    children: quoteItems,
  },
  {
    icon: Icon.Code,
    title: "Code Block",
    more: true,
    children: codeBlockItems,
    show: false,
  },
  "divider",
  {
    icon: Icon.Link,
    title: "Insert Link",
    hotkey: "mod+k",
    Component: AnchorDialog,
  },
  {
    icon: Icon.Image,
    title: "Insert Image",
    Component: ImageDialog,
    show: (editor) => editor.toolbar.showUploadButtons ?? false,
  },
  {
    icon: Icon.Attachment,
    title: "Insert Attachment",
    Component: AttachmentDialog,
    show: (editor) => editor.toolbar.showUploadButtons ?? false,
  },
  "divider",

  { icon: Icon.Emoji, title: "Insert Emoji", Component: EmojiDialog },
]
