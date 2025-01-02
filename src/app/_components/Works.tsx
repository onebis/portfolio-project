import { Spacer } from '@nextui-org/react'
import React from 'react'
import { MoreButton } from '@/app/_components/MoreButton'
import { WorkContent } from '@/app/_components/WorkContent'
import { work_contents as items } from '@/app/_libs/datas/work_contents'

export function Works() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>Works</h1>
      <Spacer y={3} />
      <div className='flex flex-col justify-between gap-10 sm:flex-row'>
        {items
          .filter((item) => [1, 2, 3].includes(item.id))
          .map((item) => (
            <WorkContent key={item.title} item={item} />
          ))}
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton href={'/works'} />
      </div>
    </div>
  )
}
