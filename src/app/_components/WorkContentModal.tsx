import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'
import { WorkItemTop } from '@/app/_libs/type'

export function WorkContentModal({
  item,
  isOpen,
  onOpenChange,
}: {
  item: WorkItemTop
  isOpen: boolean
  onOpenChange: () => void
}) {
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
                <p>規模：{item.scale}</p>
                <p>ポジション：{item.position}</p>
                <p>STACK：{item.stack}</p>
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
