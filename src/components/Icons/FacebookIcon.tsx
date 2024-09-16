import type { SVGProps } from 'react'
export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="blue"
        d="M13.33 3.32h1.827V.14a23.576 23.576 0 0 0-2.66-.14C9.864 0 8.06 1.656 8.06 4.7v2.8H5.156v3.555H8.06V20h3.561v-8.944h2.788l.442-3.555h-3.23V5.05c0-1.027.277-1.73 1.709-1.73z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
)