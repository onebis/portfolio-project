import { useTranslations } from 'next-intl';
import { About } from '@/app/_components/About'
import { Blog } from '@/app/_components/Blog'
import { Contact } from '@/app/_components/Contact'
import { Products } from '@/app/_components/Products'
import { Works } from '@/app/_components/Works'
export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <h2>{t('title')}</h2>
      <About />
      <Works />
      <Products />
      <Blog />
      <Contact />
    </>
  )
}
