import { Image } from '@nextui-org/image'
import { Card, CardBody, CardHeader, Spacer } from '@nextui-org/react'
import { MoreButton } from '@/app/_components/MoreButton'

const items = [
  {
    image: 'images/iOS.png',
    title: 'デモタイトル1',
  },
  {
    image: 'images/blog_image.png',
    title: 'デモタイトル2',
  },
  {
    image: 'images/sample_site.png',
    title: 'デモタイトル3',
  },
]
export function Blog() {
  return (
    <div className='px-6 py-3'>
      <h1 className='font-potta_one text-xl capitalize'>blog</h1>
      <Spacer y={10} />
      <div className='flex flex-col items-center gap-10 sm:flex-row sm:justify-between'>
        {items.map((item) => (
          <div key={item.title}>
            <Image src={item.image} alt={item.title} width={264} height={180} />
            <p className='mt-5 py-2 text-small'>{item.title}</p>
          </div>
        ))}
      </div>
      <div className='mt-5 flex justify-end'>
        <MoreButton />
      </div>
    </div>
  )
}
