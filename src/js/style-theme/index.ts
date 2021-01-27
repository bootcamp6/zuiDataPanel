import {css} from "styled-components"

const headingSection = css`
  font-family: system-ui, sans-serif;
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
`

const headingList = css`
  font-family: system-ui, sans-serif;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.8px;
  text-transform: uppercase;
`

const headingPage = css`
  font-family: system-ui, sans-serif;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
`

const labelSmall = css`
  font-family: system-ui, sans-serif;
  font-size: 11px;
  line-height: 17px;
  font-weight: 400;
`

const labelNormal = css`
  font-family: system-ui, sans-serif;
  font-size: 13px;
  line-height: 16px;
  font-weight: 400;
`

const labelBold = css`
  font-family: system-ui, sans-serif;
  letter-spacing: -0.08;
  font-size: 13px;
  line-height: 16px;
  font-weight: 600;
`

const hoverQuiet = css`
  &:hover {
    background: rgba(0, 0, 0, 0.08);
  }

  &:active {
    background: rgba(0, 0, 0, 0.1);
  }
`

const typeStyles = css`
  &.addr,
  &.set\[addr\] {
    color: var(--ip);
  }

  &.port,
  &.set\[port\] {
    color: var(--port);
  }

  &.interval,
  &.set\[interval\] {
    color: var(--interval);
  }

  &.count,
  &.set\[count\] {
    color: var(--count);
    text-align: right;
  }

  &.bool,
  &.set\[bool\] {
    color: var(--blue);
  }
`

const theme = {
  colors: {
    white: "#FFFFFF",
    snow: "#FDFCFB",
    coconut: "#F8F7F6",
    ivory: "#F2F1F0",
    cloudy: "#DEDDDC",
    lead: "#AEADAC",
    slate: "#757371",
    aqua: "#262524",
    pecan: "#9C692F",
    havelock: "#4B91E2",
    azure: "#2F629C",
    cello: "#324862",
    green: "#4EF567",
    red: "#CD1313"
  },
  typography: {
    headingSection,
    headingList,
    headingPage,
    labelSmall,
    labelNormal,
    labelBold,
    typeStyles
  },
  hoverQuiet
}

export default theme
