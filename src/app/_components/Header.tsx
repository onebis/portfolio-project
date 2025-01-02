'use client'
import { NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@nextui-org/navbar'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from '@nextui-org/react'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import React from 'react'
import { ThemeSwitcher } from '@/app/_components/ThemeSwitcher'
import { GithubIcon } from '@/app/icons/github'

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
  // const closeMenu = () => setIsMenuOpen(false)

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className='h-20 font-potta_one'
      maxWidth='full'
    >
      <NavbarContent>
        <NavbarBrand>
          <Link href='/'>
            <p className='font-bold text-inherit'>ACME</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden gap-7 sm:flex' justify='center'>
        {items.map((item) => {
          return (
            <NavbarItem key={item.href}>
              <Link
                href={item.href}
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
            href='https://github.com/onebis/my-portfolio'
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
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        {/*<NavbarItem>*/}
        {/*  <Button as={Link} href='#' variant='flat' size='sm' isIconOnly>*/}
        {/*    en*/}
        {/*  </Button>*/}
        {/*</NavbarItem>*/}
      </NavbarContent>

      <NavbarMenu>
        {items.map((item, index) => (
          <NavbarMenuItem key={`${index}`}>
            <Link
              onClick={() => setIsMenuOpen(false)}
              href={item.href}
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
