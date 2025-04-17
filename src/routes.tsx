import {
  Outlet,
  createRouter,
  createRoute,
  createRootRoute,
} from "@tanstack/react-router";
import ServicePage from "./pages/_ServicePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClientParams } from "./helpers/queryClientParams";
import { QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/_HomePage";
// import { Footer } from "./components/Footer/Footer";
import LoginPage from "./pages/_LoginPage";
const rootRoute = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClientParams}>
      <Outlet />
      {/* <Footer /> */}
      <ReactQueryDevtools />
    </QueryClientProvider>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: function Index() {
    return <HomePage />;
  },
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: function About() {
    return <ServicePage />;
  },
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: function About() {
    return <LoginPage />;
  },
});

const routeTree = rootRoute.addChildren([indexRoute, aboutRoute, loginRoute]);

export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
