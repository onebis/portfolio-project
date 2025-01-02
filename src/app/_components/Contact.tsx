import { Link, Spacer } from '@nextui-org/react'
import React from 'react'
import { GithubIcon } from '@/app/icons/github'
import { XIcon } from '@/app/icons/x'

export function Contact() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>contact</h1>
      <Spacer y={8} />
      <div className='flex flex-col gap-3 pl-10'>
        <div>
          <Link
            isExternal
            href='https://github.com/onebis/my-portfolio'
            color='foreground'
            className='text-xl hover:text-amber-400 dark:hover:text-amber-300'
          >
            <GithubIcon className='mr-3' /> github
          </Link>
        </div>
        <div>
          <Link
            isExternal
            href='https://twitter.com/onebisTech'
            color='foreground'
            className='text-xl hover:text-amber-400 dark:hover:text-amber-300'
          >
            <XIcon className='mr-3' /> X(twitter)
          </Link>
        </div>
      </div>
    </div>
  )
}
