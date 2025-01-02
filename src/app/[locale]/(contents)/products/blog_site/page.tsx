'use client'
import { Image } from '@nextui-org/image'
import { Button } from '@nextui-org/react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

export default function BlogSite() {
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
        <div className='flex items-center gap-2 text-xl font-bold'>ブログサイト作成</div>
        <p className='mt-2 text-lg'>coming soon ...</p>
        <div>
          <div className='text-small text-default-500'>
            <p>PLATFORM：web</p>
            <p>STACK：NextJS,TypeScript,microCMS</p>
          </div>

          <div className='mt-5 flex w-full justify-center gap-5'>
            <Image src='/images/blog_image.png' alt='image' width={200} />
          </div>
          <div className='mt-6 flex justify-center'>
            <Link href='#'>my blog</Link>
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
