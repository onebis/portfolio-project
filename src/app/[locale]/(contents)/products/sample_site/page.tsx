'use client'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { getPathname } from '@/i18n/routing'

export default function SmplePage() {
  const ref = React.useRef(null)
  const locale = useLocale()
  const t = useTranslations('Top.Products')

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -0, y: 20 }}
      transition={{ duration: 0.5, type: 'easeInOut' }}
      className='w-full'
    >
      <div className='w-full'>
        <div className='flex items-center gap-2 text-xl font-bold'>{t('SampleSite.title')}</div>
        <p className='mt-2 text-lg'>{t('SampleSite.point1')}</p>
        <div>
          <div className='text-small text-default-500'>
            <p>PLATFORM：{t('SampleSite.platform')}</p>
            <p>STACK：{t('SampleSite.stack')}</p>
          </div>

          <div className='mt-5 flex w-full justify-center gap-5'>
            <Link href='https://my-lab-pi.vercel.app/example1' isExternal>
              <Image src='/images/sample_site.png' alt='image' width={200} />
            </Link>
          </div>
          <div className='mt-6 flex justify-center'>
            <Link href='https://my-lab-pi.vercel.app/example1' isExternal>
              my sample site
            </Link>
          </div>

          <div className='flex justify-end'>
            <Link color='danger' variant='light' href={getPathname({ locale, href: '/products' })}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
