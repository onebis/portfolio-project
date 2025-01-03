'use client'
import { Image } from '@nextui-org/image'
import { Card, CardBody, Spacer } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function About() {
  const t = useTranslations('About')
  const ref = React.useRef(null)

  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl'>About</h1>
      <Spacer y={3} />
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -0, y: 20 }}
        transition={{ duration: 0.5, type: 'easeInOut' }}
        className='w-full'
      >
        <div className='flex w-full items-center justify-center'>
          <Card shadow='none' isBlurred={true} className='w-full'>
            <CardBody>
              <div className='grid grid-cols-6 items-center gap-6 md:grid-cols-12 md:gap-3'>
                <div className='col-span-6 flex flex-col items-center md:col-span-4'>
                  <Image src='/images/self_image.png' alt='self image' width={80} />
                  <div className='flex flex-col'>
                    <p className='font-bold capitalize'>minoru horiuchi</p>
                    <p className='inline text-small capitalize text-gray-400'>
                      Full stack web developer
                    </p>
                  </div>
                </div>
                <div className='col-span-6 flex flex-col gap-3 md:col-span-8'>
                  <p>{t('body1')}</p>
                  <p>{t('body2')}</p>
                  <p>{t('body3')}</p>
                  <p>{t('body4')}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </motion.div>
    </div>
  )
}
