import { memo } from 'react'

export const ChevronLeft = memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.707 14.293 11.414 12l2.293-2.293a1 1 0 0 0-1.414-1.414l-3 3a.999.999 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414-1.415Z"
      fill="#151515"
    ></path>
  </svg>
))

ChevronLeft.displayName = 'ChevronLeft'
