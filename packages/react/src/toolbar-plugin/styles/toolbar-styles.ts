import styled from "@emotion/styled"

export const $Toolbar = styled("div")`
  /**
   * If "position: sticky;" is not working, check the ancestor for "overflow:
   * hidden;" of any kind. This will stop sticky from working. A good workaround
   * is to use "overflow: clip;" instead.
   *
   * https://stackoverflow.com/a/73051006
   */
  position: sticky;
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  top: 0;
  z-index: 2;
  background: var(--shade-50);
  font-size: 0.9375em;
  padding: 0 0.5em;
  border-bottom: 1px solid var(--shade-300);
  box-sizing: border-box;
  /**
   * Prevent clicks from stealing focus from the editor
   */
  user-select: none;
  /**
   * Extreme attention to detail. When the sticky is ending and the toolbar
   * is stuck to the bottom of the editor, setting margin-bottom to -1px will
   * fix the 2px bottom border and make it the proper 1px.
   */
  margin-bottom: -1px;
`

export const $ToolbarDivider = styled("div")`
  display: inline-block;
  background: var(--shade-200);
  opacity: 50%;
  width: 1px;
  height: 3em;
  margin: 0 0.375em;
`

export const $ToolbarButton = styled("div")`
  display: flex;
  font-size: 1.25em;
  padding: 0.375em 0.375em;
  border-radius: 0.25em;
  text-align: center;
  color: var(--shade-500);
  transition: all 100ms;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0);
  &.--active {
    color: var(--shade-700);
    background: rgba(0, 0, 0, 0.05);
    svg {
      /* stroke-width: 2px; */
    }
  }
  svg {
    stroke-width: 1.5px;
  }
  &:hover {
    color: var(--shade-700);
    background: var(--blue-100);
    svg {
      /* stroke-width: 2px; */
    }
  }
`
