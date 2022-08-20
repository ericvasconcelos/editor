import { createGlobalStyle } from 'styled-components'
import borders from './borders'
import color from './color'
import font from './font'
import space from './space'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    background-repeat: no-repeat;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  ::before,
  ::after {
    text-decoration: inherit;
    vertical-align: inherit;
  }

  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: transparent;
    text-size-adjust: 100%;
    cursor: default;
    font-size: 16px;
    line-height: ${font.lineHeight.md};
    word-break: break-word;
  }

  body {
    background-color: ${color.grayscale.white};
    color: ${color.grayscale.black};
    font-family: ${font.family.text};
    font-feature-settings: "kern" 1, "liga" 1;
    font-size: ${font.size.root};
    font-weight: ${font.weight.normal};
    line-height: ${font.lineHeight.md};
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html,
  body,
  #app {
    width: 100%;
    height: 100%;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-family: ${font.family.heading};
    font-weight: ${font.weight.bold};
    margin-bottom: ${space.md};
    margin-top: 0;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: ${font.size.h1};
    line-height: ${font.lineHeight.lg};
  }

  h2 {
    font-size: ${font.size.h2};
    line-height: ${font.lineHeight.lg};
  }

  h3 {
    font-size: ${font.size.h3};
    line-height: ${font.lineHeight.lg};
  }

  h4 {
    font-size: ${font.size.h4};
    line-height: ${font.lineHeight.lg};
  }

  h5 {
    font-size: ${font.size.h5};
    line-height: ${font.lineHeight.lg};
  }

  h6 {
    font-size: ${font.size.h6};
    line-height: ${font.lineHeight.lg};
  }

  a {
    background-color: transparent;
    color: ${color.primary.pure};
    text-decoration: none;
    touch-action: manipulation;

    &:hover {
      text-decoration: underline;
    }
  }

  a[x-apple-data-detectors] {
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
  }

  hr {
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right: none;
    box-sizing: content-box;
    color: ${color.grayscale.lighter};
    height: 0;
    overflow: visible;
  }

  main {
    display: block;
  }

  ul,
  ol,
  dd {
    padding-left: ${space.lg};
  }

  p,
  ul,
  ol,
  dl,
  blockquote,
  figure,
  form,
  table,
  hr,
  fieldset,
  pre {
    margin-top: 0;
    margin-bottom: ${space.md};
  }

  ul,
  nav ol,
  nav ul {
    list-style: none;
  }

  pre {
    font-family: monospace;
    font-size: ${font.size.root};
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: ${font.weight.bold};
  }

  small {
    font-size: ${font.size.xsmall};
  }

  code,
  kbd,
  samp {
    font-family: monospace;
    font-size: ${font.size.root};
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
  }

  ::-moz-selection {
    background-color: ${color.primary.dark};
    color: ${color.grayscale.white};
    text-shadow: none;
  }

  ::selection {
    background-color: ${color.primary.dark};
    color: ${color.grayscale.white};
    text-shadow: none;
  }

  audio,
  canvas,
  iframe,
  img,
  svg,
  video {
    vertical-align: middle;
  }

  audio,
  video {
    display: inline-block;
  }

  audio {
    height: ${space.xl4};

    &:not([controls]) {
      display: none;
      height: 0;
    }
  }

  video,
  canvas {
    min-height: ${space.xl5};
  }

  img {
    border-style: none;
  }

  svg {
    fill: currentColor;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
  }

  button,
  input,
  select,
  textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button {
    overflow: visible;
    text-transform: none;
    border-color: ${color.grayscale.lighter};
    border-style: solid;
    border-width: ${borders.sizes.sm};
    touch-action: manipulation;
  }

  button {
    appearance: button;
    background-color: ${color.grayscale.white};
    border-color: ${color.primary.pure};
    border-radius: ${borders.radius.md};
    color: ${color.primary.pure};
    cursor: pointer;
    text-align: center;
    padding: 0;

    &:disabled {
      cursor: default;
    }

    &:-moz-focusring {
      outline: 1px dotted ButtonText;
    }
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  fieldset {
    padding: ${space.md};
  }

  input {
    overflow: visible;
  }

  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }

  progress {
    display: inline-block;
    vertical-align: baseline;
    min-height: ${space.md};
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    height: auto;
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    appearance: textfield;
    outline-offset: -2px;
  }

  ::-webkit-search-decoration {
    appearance: none;
  }

  ::-webkit-file-upload-button {
    appearance: button;
    font: inherit;
  }

  details {
    display: block;
  }

  dialog {
    background-color: ${color.grayscale.white};
    border: ${color.grayscale.lighter};
    color: ${color.grayscale.white};
    display: block;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: ${space.md};
    position: absolute;
    right: 0;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  area,
  input,
  label,
  select,
  summary,
  textarea,
  [tabindex] {
    touch-action: manipulation;
  }

  [hidden] {
    display: none;
  }

  [aria-busy="true"] {
    cursor: progress;
  }

  [aria-controls] {
    cursor: pointer;
  }

  [aria-disabled],
  [disabled] {
    cursor: disabled;
  }

  [aria-hidden="false"][hidden]:not(:focus) {
    clip: rect(0, 0, 0, 0);
    display: inherit;
    position: absolute;
  }

  figure {
    margin-left: 0;
    margin-right: 0;
  }

  meter {
    min-height: ${space.md};
  }

  dd {
    margin-left: 0;
  }

  blockquote {
    margin-left: ${space.lg};
    margin-right: ${space.lg};
  }

  iframe,
  input,
  select,
  textarea,
  fieldset {
    border-color: ${color.grayscale.lighter};
    border-style: solid;
    border-width: ${borders.sizes.sm};
  }

  input,
  select {
    border-radius: ${borders.radius.md};
    background-color: ${color.grayscale.white};
    padding: 0.4375rem;
    height: 2.5rem;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiMyNDJiMzMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
    background-repeat: no-repeat;
    background-size: 0.6rem;
    background-position: right 0.5rem top 50%;
    padding-right: 1.6rem;
    text-transform: none;

    &:disabled {
      background-image: url("data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDI5Mi4zNjIgMjkyLjM2MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjkyLjM2MiAyOTIuMzYyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI4Ni45MzUsNjkuMzc3Yy0zLjYxNC0zLjYxNy03Ljg5OC01LjQyNC0xMi44NDgtNS40MjRIMTguMjc0Yy00Ljk1MiwwLTkuMjMzLDEuODA3LTEyLjg1LDUuNDI0ICAgQzEuODA3LDcyLjk5OCwwLDc3LjI3OSwwLDgyLjIyOGMwLDQuOTQ4LDEuODA3LDkuMjI5LDUuNDI0LDEyLjg0N2wxMjcuOTA3LDEyNy45MDdjMy42MjEsMy42MTcsNy45MDIsNS40MjgsMTIuODUsNS40MjggICBzOS4yMzMtMS44MTEsMTIuODQ3LTUuNDI4TDI4Ni45MzUsOTUuMDc0YzMuNjEzLTMuNjE3LDUuNDI3LTcuODk4LDUuNDI3LTEyLjg0N0MyOTIuMzYyLDc3LjI3OSwyOTAuNTQ4LDcyLjk5OCwyODYuOTM1LDY5LjM3N3oiIGZpbGw9IiNhM2FlYmYiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K");
    }

    &::-ms-expand {
      display: none;
    }
  }

  input:disabled,
  select:disabled {
    background-color: ${color.grayscale.lighter};
    color: ${color.grayscale.dark};
  }

  input[readonly] {
    background-color: ${color.warning.pale};
    color: ${color.grayscale.dark};
  }

  textarea {
    border-radius: ${borders.radius.md};
    background-color: ${color.grayscale.white};
    height: 8rem;
    overflow: auto;
    padding: 0.4375rem;
    resize: vertical;
  }

  input[type="range"] {
    background-color: transparent;
    border: 0;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  .sronly {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0 !important;
    border: 0 !important;
    height: 1px !important;
    width: 1px !important;
    overflow: hidden;
  }
`
