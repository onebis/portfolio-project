import { Spacer } from '@nextui-org/react'
import { useLocale } from 'next-intl'
import React from 'react'
import { MoreButton } from '@/app/_components/MoreButton'
import { WorkContent } from '@/app/_components/WorkContent'
import { work_contents } from '@/app/_libs/datas/work_contents'
import { getPathname } from '@/i18n/routing'

export function Works() {
  const locale = useLocale()

  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>Works</h1>
      <Spacer y={3} />
      <div className='flex flex-col justify-between gap-10 sm:flex-row'>
        {work_contents
          .filter((item) => [1, 2, 3].includes(item.id))
          .map((item) => (
            <WorkContent key={item.id} item={item} />
          ))}
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton href={getPathname({ locale, href: '/works' })} />
      </div>
    </div>
  )
}
