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
import { useLocale, useTranslations } from 'next-intl'

const STORE_URL =
  'https://chromewebstore.google.com/detail/youtube-summary/fcdhcpnilhceegpdefdpeklhlgmcadhd'

const SITE_BASE = 'https://onebis.github.io/youtube-summary-extension/'
const siteUrl = (locale: string) => (locale === 'ja' ? `${SITE_BASE}ja.html` : SITE_BASE)

export function YoutubeSummaryProduct() {
  const t = useTranslations('Top.Products')
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const item = {
    id: 2,
    image: '/images/youtube_summary.png',
    title: t('YoutubeSummary.title'),
    stack: t('YoutubeSummary.stack'),
    platform: t('YoutubeSummary.platform'),
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
            alt='YouTube Summary extension'
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
  const locale = useLocale()

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
            <ModalHeader className='text-xl'>{t('YoutubeSummary.title')}</ModalHeader>
            <ModalBody className='flex flex-col items-start'>
              <p>{t('YoutubeSummary.description')}</p>
              <ul className='list-disc pl-5'>
                <li>{t('YoutubeSummary.point1')}</li>
                <li>{t('YoutubeSummary.point2')}</li>
                <li>{t('YoutubeSummary.point3')}</li>
                <li>{t('YoutubeSummary.point4')}</li>
              </ul>
              <ul className='text-small text-default-500'>
                <li>PLATFORM：{t('YoutubeSummary.platform')}</li>
                <li>STACK：{t('YoutubeSummary.stack')}</li>
              </ul>
              <div className='mt-3 flex w-full justify-center gap-5'>
                <Link isExternal href={STORE_URL}>
                  <Image
                    src='/images/youtube_summary.png'
                    alt='YouTube Summary extension'
                    width={320}
                  />
                </Link>
              </div>
              <div className='mx-auto mt-5 flex justify-center gap-6'>
                <Link isExternal href={STORE_URL}>
                  {t('YoutubeSummary.store')}
                </Link>
                <Link isExternal href={siteUrl(locale)}>
                  {t('YoutubeSummary.site')}
                </Link>
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
  )
}
