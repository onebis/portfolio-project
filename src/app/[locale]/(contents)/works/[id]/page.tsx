'use client'
import { Chip, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { work_contents } from '@/app/_libs/datas/work_contents'
import { getPathname } from '@/i18n/routing'

export default function WorkContent({ params }: { params: { id: number } }) {
  const t = useTranslations('Top.Works')
  const item = work_contents.filter((item) => item.id == params.id)[0]
  const ref = React.useRef(null)
  const locale = useLocale()

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
          {t(`${item.id}.title`)}:
          <Chip size={'sm'} variant='faded'>
            {t(`${item.id}.term`)}
          </Chip>
        </div>
        <div className='mt-10'>
          {t(`${item.id}.detail`).split('\n').map((line, index) => (
            <p key={index} className='mt-4 text-lg'>
              {line}
            </p>
          ))}
          <div className='mt-10 text-small'>
            <p>{t('scale')}：{t(`${item.id}.scale`)}</p>
            <p>{t('position')}：{t(`${item.id}.position`)}</p>
            <p>{t('stack')}：{t(`${item.id}.stack`)}</p>
          </div>
        </div>
      </motion.div>
      <div className='flex justify-end'>
        <Link color='danger' href={getPathname({ locale, href: '/works' })}>
          Back
        </Link>
      </div>
    </div>
  )
}
