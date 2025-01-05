import { Link } from '@nextui-org/react'
// import Link from 'next/link'
export function MoreButton({ href = '' }: { href?: string }) {
  return (
    <Link
      href={href}
      className='relative h-8 bg-transparent font-bold text-black hover:after:absolute hover:after:bottom-1 hover:after:block hover:after:h-[1px] hover:after:w-full hover:after:bg-black dark:text-amber-400 dark:hover:after:bg-amber-400'
    >
      more
    </Link>
  )
}
