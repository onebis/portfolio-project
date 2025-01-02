import { SVGProps } from 'react'

export function Media(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='5em' height='5em' viewBox='0 0 24 24' {...props}>
      <path d='M8 15h8v-.55q0-1.125-1.1-1.787T12 12q-1.8 0-2.9.663T8 14.45zm4-4q.825 0 1.413-.587T14 9q0-.825-.587-1.412T12 7q-.825 0-1.412.588T10 9q0 .825.588 1.413T12 11M8 21v-2H4q-.825 0-1.412-.587T2 17V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v12q0 .825-.587 1.413T20 19h-4v2zm-4-4h16V5H4zm0 0V5z'></path>
    </svg>
  )
}
