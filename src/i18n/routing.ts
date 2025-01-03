import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['ja', 'en'] as const,
  defaultLocale: 'ja' as const,
  localeDetection: false,
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
