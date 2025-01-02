import { SVGProps } from 'react'

export function DX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='5em' height='5em' viewBox='0 0 28 28' {...props}>
      <path d='M13.11 2.293a1.5 1.5 0 0 1 1.78 0l9.497 7.005c1.124.83.598 2.578-.74 2.7H4.353c-1.338-.122-1.863-1.87-.74-2.7zM14 8.999a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m5.5 4h2.499v6h-2.5zm-2 6v-6H15v6zM13 19v-6h-2.5v6zm-4.499 0v-6h-2.5v6zm-2.25 1a3.25 3.25 0 0 0-3.25 3.25v.5a.752.752 0 0 0 .75.751h20.497a.75.75 0 0 0 .75-.75v-.5a3.25 3.25 0 0 0-3.25-3.25z'></path>
    </svg>
  )
}
