'use client'
import { Spacer } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { MoreButton } from '@/app/_components/MoreButton'
import { WorkContent } from '@/app/_components/WorkContent'
import { WorkItemTop } from '@/app/_libs/type'
import { DX } from '@/app/icons/DX'
import { Account } from '@/app/icons/account'
import { AccountDetail } from '@/app/icons/account_detail'
import { AccountTree } from '@/app/icons/account_tree'
import { Media } from '@/app/icons/media'
import { MobileApp } from '@/app/icons/mobile_app'

export function Works() {
  const t = useTranslations('Top.Works')
  const items: WorkItemTop[] = [
    {
      id: 1,
      sort: 1,
      icon: <AccountDetail className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('1.title'),
      body: t('1.body'),
      term: t('1.term'),
      detail: t('1.detail'),
      stack: t('1.stack'),
      position: t('1.position'),
      scale: t('1.scale'),
    },
    {
      id: 4,
      sort: 2,
      icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('4.title'),
      body: t('4.body'),
      term: t('4.term'),
      detail: t('4.detail'),
      stack: t('4.stack'),
      position: t('4.position'),
      scale: t('4.scale'),
    },
    {
      id: 2,
      sort: 3,
      icon: <AccountTree className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('2.title'),
      body: t('2.body'),
      term: t('2.term'),
      detail: t('2.detail'),
      stack: t('2.stack'),
      position: t('2.position'),
      scale: t('2.scale'),
    },
    {
      id: 5,
      sort: 4,
      icon: <DX className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('5.title'),
      body: t('5.body'),
      term: t('5.term'),
      detail: t('5.detail'),
      stack: t('5.stack'),
      position: t('5.position'),
      scale: t('5.scale'),
    },
    {
      id: 6,
      sort: 5,
      icon: <Media className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('6.title'),
      body: t('6.body'),
      term: t('6.term'),
      detail: t('6.detail'),
      stack: t('6.stack'),
      position: t('6.position'),
      scale: t('6.scale'),
    },
    {
      id: 7,
      sort: 6,
      icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('7.title'),
      body: t('7.body'),
      term: t('7.term'),
      detail: t('7.detail'),
      stack: t('7.stack'),
      position: t('7.position'),
      scale: t('7.scale'),
    },
    {
      id: 3,
      sort: 7,
      icon: <Account className='fill-gray-700 dark:fill-gray-300/80' />,
      title: t('3.title'),
      body: t('3.body'),
      term: t('3.term'),
      detail: t('3.detail'),
      stack: t('3.stack'),
      position: t('3.position'),
      scale: t('3.scale'),
    },
  ]

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
