import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import {
  Outlet,
  RouterProvider,
  Link,
  createRouter,
  createRoute,
  createRootRoute,
  Route,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import ServicePage from '../../pages/ServicePage'
import { PAGES } from '../../constants/PAGES'
import Sidebar from '../Sidebar/Sidebar'

export function TestRoutes() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

const rootRoute = createRootRoute({
  component: () => (
    <>
      <div className="p-2 flex gap-2">
        {PAGES.map((page) => (
          <Link key={page.id} to={`/services?id=${page.id}`}>
            {page.name}
          </Link>
        ))}
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
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
