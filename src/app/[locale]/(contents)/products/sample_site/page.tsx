'use client'
import { Image } from '@nextui-org/image'
import { Button, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

export default function SmplePage() {
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
      <div className='w-full'>
        <div className='flex items-center gap-2 text-xl font-bold'>サンプルサイト作成</div>
        <p className='mt-2 text-lg'>サンプルサイトを作成</p>
        <div>
          <div className='text-small text-default-500'>
            <p>PLATFORM：web</p>
            <p>STACK：NextJs,TypeScript,NextUI</p>
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
            <Button color='danger' variant='light' as={Link} href={'/products'}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
