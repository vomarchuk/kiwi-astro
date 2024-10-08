import React, { StrictMode } from 'react'
import {
  Outlet,
  RouterProvider,
  createRouter,
  createRoute,
  createRootRoute,
  Route,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ServicePage from '../../pages/ServicePage'
import Sidebar from '../Sidebar/Sidebar'

export function Header() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

// const rootRoute = createRootRoute({
//   component: () => (
//     <>
//       <Sidebar />
//       <Outlet />
//       <TanStackRouterDevtools />
//     </>
//   ),
// })

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Sidebar />
      <Outlet />
    </>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return (
      <div className="p-2">
        <h3>Welcome Home!</h3>
      </div>
    )
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: function About() {
    return <ServicePage />
  },
})

export const productIdPage = new Route({
  getParentRoute: () => rootRoute,
  path: '/services?id',
  component: () => {
    return (
      <div>
        TEST
        <ServicePage />
      </div>
    )
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, productIdPage])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
