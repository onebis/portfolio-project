'use client'

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React from 'react'
import { WorkItemTop } from '@/app/_libs/type'

export function WorkContent({ key, item }: { key: string; item: WorkItemTop }) {
  const t = useTranslations('Top.Works')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const ref = React.useRef(null)
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: -0, y: 20 }}
        transition={{ duration: 1, type: 'easeInOut' }}
        className='w-full'
      >
        <Card
          className='relative w-full grow rounded-3xl bg-transparent pb-2 pt-10'
          onPress={onOpen}
          isHoverable={true}
          isPressable={true}
          disableRipple
          key={key}
        >
          <CardHeader className='flex justify-center overflow-visible py-2 after:absolute after:left-1/2 after:top-10 after:-z-10 after:h-16 after:w-14 after:rounded after:bg-yellow-300/30 after:blur-sm dark:after:bg-yellow-400/10'>
            {item.icon}
          </CardHeader>
          <CardBody className='flex-col items-start px-4'>
            <p className='text-small text-default-500'> {item.term}</p>

            <p className='flex items-center text-lg font-bold'>{item.title}</p>
            <small className='mt-3 text-default-500'>{item.body}</small>
          </CardBody>
        </Card>
        <Modal
          scrollBehavior={'outside'}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size='3xl'
          backdrop='blur'
          className='p-10'
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex items-center gap-2 text-xl'>
                  {item.title}
                  <Chip size={'sm'} variant='faded'>
                    {item.term}
                  </Chip>
                </ModalHeader>
                <ModalBody>
                  {item.detail.split('\n').map((line, index) => (
                    <p key={index} className='text-lg'>
                      {line}
                    </p>
                  ))}
                  <div className='mt-10 text-small'>
                    <p>
                      {t('scale')}：{item.scale}
                    </p>
                    <p>
                      {t('position')}：{item.position}
                    </p>
                    <p>
                      {t('stack')}：{item.stack}
                    </p>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color='danger' variant='light' onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </motion.div>
    </>
  )
}
