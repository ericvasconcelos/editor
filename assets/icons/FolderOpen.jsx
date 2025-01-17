import { memo } from 'react'

export const FolderOpen = memo(() => (
  <svg width="16" height="16" fill="none" name="folderOpen" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.706 2h5.208c.168 0 .33.06.458.169l1.731 1.478h5.924c.39 0 .706.316.706.706v.47H2.058c-.34 0-.63.242-.694.575L0 12.588V2.706C0 2.316.316 2 .706 2zm2.05 3.53a.706.706 0 00-.684.527L.231 13.116A.706.706 0 00.914 14H13.45a.706.706 0 00.683-.528l1.842-7.059a.706.706 0 00-.683-.884H2.755z"
      fill="#6CC7F6"
    />
  </svg>
))

FolderOpen.displayName = 'FolderOpen'
