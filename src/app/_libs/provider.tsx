'use client'
import { NextUIProvider } from '@nextui-org/react'
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import * as React from 'react'

export function Provider({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
