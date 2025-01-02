'use client'
import { Button, Chip, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { id } from 'postcss-selector-parser'
import React from 'react'
import { work_contents as items } from '@/app/_libs/datas/work_contents'

export default function WorkContent({ params }: { params: { id: number } }) {
  const item = items.filter((item) => item.id == params.id)[0]
  const ref = React.useRef(null)

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
          {item.title}
          <Chip size={'sm'} variant='faded'>
            {item.term}
          </Chip>
        </div>
        <div className='mt-10'>
          {item.detail.split('\n').map((line, index) => (
            <p key={index} className='mt-4 text-lg'>
              {line}
            </p>
          ))}
          <div className='mt-10 text-small'>
            <p>規模：{item.scale}</p>
            <p>ポジション：{item.position}</p>
            <p>STACK：{item.stack}</p>
          </div>
        </div>
      </motion.div>
      <div className='flex justify-end'>
        <Button color='danger' variant='light' as={Link} href={'/works'}>
          Back
        </Button>
      </div>
    </div>
  )
}
