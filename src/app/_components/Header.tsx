'use client'
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import clsx from 'clsx'
import { useLocale } from 'next-intl'
import React from 'react'
import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher'
import { GithubIcon } from '@/app/icons/github'
import { usePathname, getPathname, useRouter } from '@/i18n/routing'

const items = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Works',
    href: '/works',
  },
  {
    label: 'Products',
    href: '/products',
  },
  {
    label: 'Blog',
    href: '/blog',
  },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const pathname = usePathname()
  const locale = useLocale()
  const router = useRouter()

  const toggleLocale = () => {
    const newLocale = locale === 'ja' ? 'en' : 'ja'
    router.push(pathname, { locale: newLocale })
  }

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className='h-20 font-potta_one'
      maxWidth='full'
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href={getPathname({ locale, href: '/' })}>
            <p className='font-bold text-inherit'>MinoBlog</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-7 sm:flex' justify='center'>
        {items.map((item) => {
          return (
            <NavbarItem key={item.href}>
              <Link
                href={getPathname({ locale, href: item.href })}
                className={clsx(
                  'text-black hover:text-amber-400 dark:text-white dark:hover:text-amber-300',
                  {
                    'text-amber-400 dark:text-amber-300': pathname.startsWith(item.href),
                  },
                )}
              >
                {item.label}
              </Link>
            </NavbarItem>
          )
        })}
        <NavbarItem>
          <Link
            href='https://github.com/onebis/portfolio-project'
            color='foreground'
            className='flex items-center hover:text-amber-400 dark:hover:text-amber-300'
            showAnchorIcon
            isExternal
          >
            <GithubIcon className='mr-[2px]' /> github
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end' className='gap-3'>
        <NavbarItem>
          <Button
            className='bg-amber-400 dark:bg-gray-500 dark:text-black'
            variant='flat'
            size='sm'
            isIconOnly
            onPress={toggleLocale}
          >
            {locale === 'ja' ? 'En' : '和'}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
      </NavbarContent>

      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              onPress={() => setIsMenuOpen(false)}
              href={getPathname({ locale, href: item.href })}
              className={clsx(
                'font-potta_one text-black hover:text-amber-400 dark:text-white dark:hover:text-amber-300',
                {
                  'text-amber-400 dark:text-amber-300': pathname.startsWith(item.href),
                },
              )}
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
