'use client'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { getPathname } from '@/i18n/routing'

export default function TodoApp() {
  const ref = React.useRef(null)
  const locale = useLocale()
  const t = useTranslations('Top.Products')

  return (
    <div className='w-full'>
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -0, y: 20 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        className='w-full'
      >
        <div className='flex items-center gap-2 text-xl font-bold'>
          <Image src='/images/app_icon.png' alt='image' width={30} radius={'sm'} />
          {t('ToDoApp.title')}
        </div>
        <p className='mt-2 text-lg'>
          {t('ToDoApp.description')}
        </p>
        <div>
          <div className='text-small text-default-500'>
            <p>PLATFORM：{t('ToDoApp.platform')}</p>
            <p>STACK：{t('ToDoApp.stack')}</p>
          </div>

          <div className='mt-5 flex w-full justify-center gap-5'>
            <Image src='/images/todo_image1.png' alt='image' width={200}/>
            <Image src='/images/todo_image2.png' alt='image' width={200}/>
          </div>
          <div className='mt-6 flex justify-center'>
            <Link href='https://apps.apple.com/ae/app/todo-with-tab/id6461047942'>
              <Image src='/images/appstore.png' alt='image' width={200} />
            </Link>
          </div>

          <div className='flex justify-end'>
            <Link color='danger' variant='light' href={getPathname({ locale, href: '/products' })}>
              Back
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
