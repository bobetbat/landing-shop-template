import { Box } from "@mui/material";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
  },
];

export const router = createBrowserRouter(routes);

export interface Page {
  path: string;
  title: string;
  content: React.ReactNode;
  href?: string;
}

export const pages: Page[] = [
  {
    title: 'About Product',
    content: <Box>hello world</Box>,
    path: '/'
  },
  {
    title: 'About us',
    content: 'About',
    href: '#about',
    path: '/#about'
  },
  {
    title: 'Product',
    content: 'Product + Payment flow',
    href: '#product',
    path: '/#product'
  },
  {
    title: 'Products',
    content: 'Product + Payment flow',
    path: '/products'
  },
  {
    title: 'Contact us',
    content: 'contact form',
    href: '#contactus',
    path: '/#contactus'
  },
]
