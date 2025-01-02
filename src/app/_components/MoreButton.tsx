import { Button, Link } from '@nextui-org/react'
// import Link from 'next/link'
export function MoreButton({ href = '' }: { href?: string }) {
  return (
    <Button
      as={Link}
      href={href}
      isIconOnly
      variant='flat'
      radius={'none'}
      disableRipple
      className='relative h-8 bg-transparent font-bold hover:text-amber-400 hover:after:absolute hover:after:bottom-1 hover:after:block hover:after:h-[1px] hover:after:w-full hover:after:bg-amber-300 dark:hover:after:bg-amber-400'
    >
      more
    </Button>
  )
}
