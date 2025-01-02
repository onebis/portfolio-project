import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/app/_components/Footer'
import { Header } from '@/app/_components/Header'
import { Provider } from '@/app/_libs/provider'
import { inter, potta_one } from '@/app/fonts/font'

export const metadata: Metadata = {
  title: 'minoru horiuchi',
  description: "minoru's portfolio",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} ${potta_one.variable}`}>
        <Provider>
          <main className='mx-auto flex min-h-screen max-w-5xl flex-col gap-y-16 px-5'>
            <Header />
            {children}
            <Footer />
          </main>
        </Provider>
      </body>
    </html>
  )
}
