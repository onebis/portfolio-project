import { Image } from '@nextui-org/image'
import { Card, CardHeader, CardBody } from '@nextui-org/react'
import { useTranslations } from 'next-intl'
import React from 'react'

export function About() {
  const t = useTranslations('Top.About')

  return (
    <div className='animate-fade-in w-full translate-y-5 opacity-0'>
      <div className='flex justify-center px-6'>
        <Card shadow='none' isBlurred={true}>
          <CardHeader className='flex w-80 justify-center gap-3'>
            <Image src='/images/self_image.png' alt='self image' width={100} />
            <div className='flex flex-col'>
              <p className='font-bold capitalize'>minoru horiuchi</p>
              <p className='inline text-small capitalize text-gray-400'>Full stack developer</p>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              <span className='font-bold'>2016{t('year')}</span> {t('body1')}
            </p>
            <p>
              <span className='font-bold'>2017{t('year')}</span> {t('body2')}
            </p>
            <p>
              <span className='font-bold'>2019{t('year')}</span> {t('body3')}
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
