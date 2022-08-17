import { createWebHistory, createRouter } from "vue-router"
const routes = [
    {
        path: "/",
        alias: "/customers",
        name: "customers",
        component: () => import("./components/CustomersList")
    },
    {
        path: "/customers/:id",
        name: "customer-details",
        component: () => import("./components/CurrCustomer")
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router