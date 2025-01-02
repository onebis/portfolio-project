'use client'
import { Image } from '@nextui-org/image'
import { Card, CardHeader, CardBody, CardFooter, User } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

export function About() {
  const ref = React.useRef(null)
  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -0, y: 20 }}
      transition={{ duration: 0.5, type: 'easeInOut' }}
      className='w-full'
    >
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
              <span className='font-bold'>2016年</span> サービス業界に従事
            </p>
            <p>
              <span className='font-bold'>2017年</span>{' '}
              SES会社へ入社。エンジニアとしてのキャリアをスタート
            </p>
            <p>
              <span className='font-bold'>2019年</span> フリーランスへ転向
            </p>
          </CardBody>
        </Card>
      </div>
    </motion.div>
  )
}
