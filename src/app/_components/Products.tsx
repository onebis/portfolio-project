'use client'
import { Spacer } from '@nextui-org/react'
import { motion, useInView } from 'framer-motion'
import React from 'react'
import { MoreButton } from '@/app/_components/MoreButton'
import { BlogProduct } from '@/app/_components/products/BlogProduct'
import { SamplePage } from '@/app/_components/products/SamplePage'
import { ToDoWithTab } from '@/app/_components/products/ToDoWithTab'

export function Products() {
  const ref = React.useRef(null)
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>products</h1>
      <Spacer y={10} />
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        ref={ref}
      >
        <div className='flex flex-col justify-between gap-10 sm:flex-row'>
          <ToDoWithTab />
          <BlogProduct />
          <SamplePage />
        </div>
      </motion.div>
      <div className='mt-5 flex justify-end'>
        <MoreButton href={'/products'} />
      </div>
    </div>
  )
}
