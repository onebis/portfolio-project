'use client'
import { Image } from '@nextui-org/image'
import { Button, Link } from '@nextui-org/react'
import { motion } from 'framer-motion'
import React from 'react'

export default function TodoApp() {
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
          <Image src='/images/app_icon.png' alt='image' width={30} radius={'sm'} />
          ToDoApp with Tab
        </div>
        <p className='mt-2 text-lg'>
          シンプルなToDo管理アプリ開発 タブを右に配置しユーザーの使いやすさを追求
        </p>
        <div>
          <div className='text-small text-default-500'>
            <p>PLATFORM：iOS/Androidアプリ</p>
            <p>STACK：Flutter,dart</p>
          </div>

          <div className='mt-5 flex w-full justify-center gap-5'>
            <Image src='/images/todo_image1.png' alt='image' width={200} height={200} />
            <Image src='/images/todo_image2.png' alt='image' width={200} height={200} />
          </div>
          <div className='mt-6 flex justify-center'>
            <Link href='https://apps.apple.com/ae/app/todo-with-tab/id6461047942'>
              <Image src='/images/appstore.png' alt='image' width={200} />
            </Link>
          </div>

          <div className='flex justify-end'>
            <Button color='danger' variant='light' as={Link} href={'/products'}>
              Back
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
