'use client'
import { Image } from '@nextui-org/image'
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react'
import { useTranslations } from 'next-intl'

export function ToDoWithTab() {
  const t = useTranslations('Top.Products')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const item = {
    id: 1,
    image: '/images/ToDoWithTabIcon.png',
    title: t('ToDoApp.title'),
    stack: t('ToDoApp.stack'),
    platform: t('ToDoApp.platform'),
  }

  return (
    <>
      <Card
        className='relative rounded-xl bg-transparent sm:w-full'
        onPress={onOpen}
        isHoverable={true}
        isPressable={true}
        disableRipple
      >
        <CardHeader className='flex-col items-center px-4 pb-0 pt-2 sm:items-start'>
          <h4 className='text-large font-bold'>{item.title}</h4>
          <small className='text-default-500'>{item.platform}</small>
          <p className='text-tiny font-bold'>{item.stack}</p>
        </CardHeader>
        <CardBody className='my-2 overflow-visible'>
          <Image
            removeWrapper
            src={item.image}
            alt='native app image'
            width={270}
            className='mx-auto rounded-xl object-cover'
          />
        </CardBody>
      </Card>
      <ProductContentModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  )
}

const ProductContentModal = ({
  isOpen,
  onOpenChange,
}: {
  isOpen: boolean
  onOpenChange: () => void
}) => {
  const t = useTranslations('Top.Products')
  return (
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
            <ModalHeader className='flex items-center gap-3 text-xl'>
              <Image src='images/app_icon.png' alt='image' width={30} radius={'sm'} />
              {t('ToDoApp.title')}
            </ModalHeader>
            <ModalBody className='flex flex-col items-start'>
              <ul>
                <li>{t('ToDoApp.point1')}</li>
                <li>{t('ToDoApp.point2')}</li>
              </ul>
              <ul className='text-small text-default-500'>
                <li>PLATFORM：{t('ToDoApp.platform')}</li>
                <li>STACK：{t('ToDoApp.stack')}</li>
              </ul>
              <div className='flex w-full justify-center gap-5'>
                <Image src='/images/todo_image1.png' alt='image' width={200} />
                <Image src='/images/todo_image2.png' alt='image' width={200} />
              </div>
              <Link
                isExternal
                href='https://apps.apple.com/ae/app/todo-with-tab/id6461047942'
                className='mx-auto mt-5 flex justify-center'
              >
                <Image src='images/appstore.png' alt='image' width={200} />
              </Link>
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
  )
}
