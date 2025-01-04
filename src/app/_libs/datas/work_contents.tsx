import React from 'react'
import { DX } from '@/app/icons/DX'
import { Account } from '@/app/icons/account'
import { AccountDetail } from '@/app/icons/account_detail'
import { AccountTree } from '@/app/icons/account_tree'
import { Media } from '@/app/icons/media'
import { MobileApp } from '@/app/icons/mobile_app'

export const work_contents = [
  {
    id: 1,
    sort: 1,
    icon: <AccountDetail className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 4,
    sort: 2,
    icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 2,
    sort: 3,
    icon: <AccountTree className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 5,
    sort: 4,
    icon: <DX className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 6,
    sort: 5,
    icon: <Media className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 7,
    sort: 6,
    icon: <MobileApp className='fill-gray-700 dark:fill-gray-300/80' />,
  },
  {
    id: 3,
    sort: 7,
    icon: <Account className='fill-gray-700 dark:fill-gray-300/80' />,
  },
]
