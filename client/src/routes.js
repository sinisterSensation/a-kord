import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ProductPage from "./pages/ProductPage"
import Shop from "./pages/Shop"
import Services from "./pages/Services"
import Contacts from "./pages/Contacts"
import SignUpService from "./pages/SignUpService"
import Products from "./pages/Products"
import NotFound from "./pages/NotFound"

import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTTRATION_ROUTE, SHOP_ROUTE, CONTACTS_ROUTE, SERVICES_ROUTE, SIGNUPSERVICE_ROUTE, PRODUCTS_ROUTE, NOTFOUND_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: SIGNUPSERVICE_ROUTE,
        Component: SignUpService
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: CONTACTS_ROUTE,
        Component: Contacts
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: REGISTTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: ProductPage
    },
    {
        path: PRODUCTS_ROUTE,
        Component: Products
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFound
    }
]