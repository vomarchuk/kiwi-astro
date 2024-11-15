import {
  Outlet,
  createRouter,
  createRoute,
  createRootRoute,
} from '@tanstack/react-router'
// import Sidebar from './components/Sidebar/Sidebar'
import ServicePage from './pages/ServicePage'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClientParams } from './helpers/queryClientParams'
import { QueryClientProvider } from '@tanstack/react-query'
import HomePage from './pages/HomePage'
import { Footer } from './components/Footer/Footer'
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClientParams}>
      {/* <Sidebar /> */}
      <Outlet />
      {/* <Footer /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  ),
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: function Index() {
    return <HomePage />
  },
})

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: function About() {
    return <ServicePage />
  },
})

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

export const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
