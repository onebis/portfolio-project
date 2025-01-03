import { About } from '@/app/_components/About'
import { Blog } from '@/app/_components/Blog'
import { Contact } from '@/app/_components/Contact'
import { Products } from '@/app/_components/Products'
import { Works } from '@/app/_components/Works'
export default function Home() {
  return (
    <>
      <About />
      <Works />
      <Products />
      <Blog />
      <Contact />
    </>
  )
}
