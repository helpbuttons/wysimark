import styled from "@emotion/styled"

export const $CodeBlock = styled("div")`
  position: relative;
  background: var(--code-block-bgcolor);
  margin: 1em 0;
  padding: 1.5em 1em 1.5em 1em;
  border-radius: 0.5em;
  border: 1px solid var(--code-block-border-color);
  code {
    font-size: 0.825em;
  }
  counter-reset: line;
  &.--selected {
    outline: 2px solid var(--select-color);
  }
`

export const $CodeBlockLanguage = styled("span")`
  cursor: pointer;
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  width: 8em;
  display: flex;
  font-size: 0.75em;
  color: var(--shade-700);
  background: var(--shade-200);
  padding: 0.25em 0.5em;
  border-radius: 0.5em;
  align-items: center;
  gap: 0.25em;
  span {
    text-align: right;
    flex: 1 1 auto;
  }
  svg {
    flex: 0 0 auto;
    position: relative;
  }
  &:hover {
    color: var(--shade-800);
    background: var(--shade-300);
  }
`

export const $CodeBlockLine = styled("div")`
  line-height: 1.5em;
  counter-increment: line;
  font-family: "andale mono", AndaleMono, monospace;
  &.--selected {
    background-color: var(--shade-100);
  }
  &:before {
    content: counter(line);
    color: rgba(0, 0, 0, 0.25);
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    margin-right: 1em;
    padding: 0em 1em 0 0;
    text-align: right;
    display: inline-block;
    width: 1.25em;
  }
`
