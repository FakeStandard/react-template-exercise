import { FC } from "react"
import About from "./pages/About"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Register from "./pages/Register"

interface Route {
    key: string
    title: string
    path: string
    enabled: boolean
    component: FC<{}>
}

// integrate react router

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: '/',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: '/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: '/products',
        enabled: true,
        component: Products
    }
]