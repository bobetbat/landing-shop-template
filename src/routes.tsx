import { Box } from "@mui/material";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export interface Page {
  title: string;
  content: React.ReactNode;
  href: string;
}

export const pages: Page[] = [
  {
    title: 'About Product',
    content: <Box>hello world</Box>,
    href: '#'
  },
  {
    title: 'About us',
    content: 'About',
    href: '#about'
  },
  {
    title: 'Buy here',
    content: 'Product + Payment flow',
    href: '#buyhere'
  },
  {
    title: 'Contact us',
    content: 'contact form',
    href: '#contactus'
  },
]
