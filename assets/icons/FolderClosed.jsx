import React, { memo } from 'react'

export const FolderClosed = memo(() => (
  <svg width="16" height="16" fill="none" name="folderClosed" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.867 2l1.466 1.467H14.2c.8 0 1.467.666 1.467 1.466V12.4c0 .8-.667 1.467-1.467 1.467H2.467C1.667 14 1 13.333 1 12.533V3.467C1 2.667 1.667 2 2.467 2h4.4z"
      fill="#64D2FF"
    />
  </svg>
))

FolderClosed.displayName = 'FolderClosed'
