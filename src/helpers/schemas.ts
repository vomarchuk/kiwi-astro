import { z } from 'zod'

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  access: z.string(),
})

export const categorySchema = z.object({
  name: z.string(),
  id: z.string()
})

export const serviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.string(),
  categoryId: z.string(),
  categoryName: z.string(),
  duration: z.string(),
})
export const subMenuSchema = z.object({
  id: z.string(),
  name: z.string(),
  href: z.string(),
})

export type UserType = z.infer<typeof userSchema>
export type SubMenuType = z.infer<typeof subMenuSchema>
export type CategoryType = z.infer<typeof categorySchema>
export type ServiceType = z.infer<typeof serviceSchema>