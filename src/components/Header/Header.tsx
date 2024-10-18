import { StrictMode } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from '../../routes'

export function Header() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
