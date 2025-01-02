import type { Metadata } from 'next'
import {notFound} from 'next/navigation';
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import './globals.css'
import { Footer } from '@/app/_components/Footer'
import { Header } from '@/app/_components/Header'
import { Provider } from '@/app/_libs/provider'
import { inter, potta_one } from '@/app/fonts/font'
import {routing} from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'minoru horiuchi',
  description: "minoru's portfolio",
}

export default async function LocaleLayout({
                                             children,
                                             params: {locale}
                                           }: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as 'en'|'ja')) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
    <body className={`${inter.variable} ${potta_one.variable}`}>
    <Provider>
      <NextIntlClientProvider messages={messages}>
        <main className='mx-auto flex min-h-screen max-w-5xl flex-col gap-y-16 px-5'>
          <Header />
          {children}
          <Footer />
        </main>
      </NextIntlClientProvider>
    </Provider>
    </body>
    </html>
  );
}