'use client'
import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Spacer, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { product_contents } from '@/app/_libs/datas/product_contents'
import { getPathname } from '@/i18n/routing'

export default function Products() {
  const t = useTranslations('Top.Products')
  const locale = useLocale()
  const ref = React.useRef(null)

  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>Products</h1>
      <Spacer y={3} />
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -0, y: 20 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        className='w-full'
      >
        <div className='grid grid-cols-12 gap-5 sm:gap-10'>
          {Object.entries(product_contents).map(([, item]) => (
            <Link
              key={item.id}
              href={getPathname({ locale, href: 'products/'+item.href })}
              className='col-span-12 w-full sm:col-span-6 md:col-span-4'
            >
              <Card
                className='relative w-full rounded-xl bg-transparent'
                isHoverable={true}
                disableRipple
              >
                <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                  <h4 className='text-large font-bold'>{t(`${item.title}.title`)}</h4>
                  <small className='text-default-500'>{t(`${item.title}.platform`)}</small>
                  <p className='text-tiny font-bold'>{t(`${item.title}.stack`)}</p>
                </CardHeader>
                <CardBody className='my-2 flex items-center overflow-visible'>
                  <Image
                    src={item.image}
                    alt='native app image'
                    width={270}
                    height={184}
                    className='rounded-xl object-cover'
                  />
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
