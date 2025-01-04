import { ReactNode } from 'react'

export type WorkItemTop = {
  id: number
  icon: ReactNode
  sort: number
}

export type ProductItemTop = {
  image: string
  title: string
  stack: string
  description: string
}
