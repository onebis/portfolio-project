'use client'
import { Image } from '@nextui-org/image'
import { Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { getPathname } from '@/i18n/routing'

const STORE_URL =
  'https://chromewebstore.google.com/detail/youtube-summary/fcdhcpnilhceegpdefdpeklhlgmcadhd'

const SITE_BASE = 'https://onebis.github.io/youtube-summary-extension/'
const siteUrl = (locale: string) => (locale === 'ja' ? `${SITE_BASE}ja.html` : SITE_BASE)

export default function YoutubeSummary() {
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
        <div className='flex items-center gap-2 text-xl font-bold'>
          {t('YoutubeSummary.title')}
        </div>
        <p className='mt-2 text-lg'>{t('YoutubeSummary.description')}</p>
        <div>
          <ul className='mt-4 list-disc pl-5'>
            <li>{t('YoutubeSummary.point1')}</li>
            <li>{t('YoutubeSummary.point2')}</li>
            <li>{t('YoutubeSummary.point3')}</li>
            <li>{t('YoutubeSummary.point4')}</li>
          </ul>
          <div className='mt-4 text-small text-default-500'>
            <p>PLATFORM：{t('YoutubeSummary.platform')}</p>
            <p>STACK：{t('YoutubeSummary.stack')}</p>
          </div>

          <div className='mt-5 flex w-full justify-center gap-5'>
            <Link isExternal href={STORE_URL}>
              <Image src='/images/youtube_summary.png' alt='YouTube Summary extension' width={360} />
            </Link>
          </div>
          <div className='mt-6 flex justify-center gap-6'>
            <Link isExternal href={STORE_URL}>
              {t('YoutubeSummary.store')}
            </Link>
            <Link isExternal href={siteUrl(locale)}>
              {t('YoutubeSummary.site')}
            </Link>
          </div>

          <div className='flex justify-end'>
            <Link color='danger' href={getPathname({ locale, href: '/products' })}>
              Back
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
