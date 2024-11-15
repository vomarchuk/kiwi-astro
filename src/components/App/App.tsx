import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import styled from '@emotion/styled'
import { StrictMode } from 'react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from 'src/routes'
export const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
