import { Spacer } from '@nextui-org/react'
import { useLocale } from 'next-intl'
import React from 'react'
import { MoreButton } from '@/app/_components/MoreButton'
import { BlogProduct } from '@/app/_components/products/BlogProduct'
import { SamplePage } from '@/app/_components/products/SamplePage'
import { ToDoWithTab } from '@/app/_components/products/ToDoWithTab'
import { getPathname } from '@/i18n/routing'

export function Products() {
  const locale = useLocale()

  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>products</h1>
      <Spacer y={10} />
      <div className='animate-fade-in w-full translate-y-5 opacity-0'>
        <div className='flex flex-col justify-between gap-10 sm:flex-row'>
          <ToDoWithTab />
          <BlogProduct />
          <SamplePage />
        </div>
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton href={getPathname({ locale, href: '/products' })} />
      </div>
    </div>
  )
}
