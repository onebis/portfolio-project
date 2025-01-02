import { ReactNode } from 'react'

export type WorkItemTop = {
  id: number
  icon: ReactNode
  title: string
  body: string
  term: string
  detail: string
  stack: string
  position: string
  scale: string
}

export type ProductItemTop = {
  image: string
  title: string
  stack: string
  description: string
}
