import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Checkout from "@/components/Checkout";
import Login from "@/components/Login";
import Products from "@/components/Products";
import CreateProduct from "@/components/CreateProduct";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    },
    {
      path: "/createProduct",
      name: "CreateProduct",
      component: CreateProduct
    },
    {
      path: "/checkout",
      name: "Checkout",
      component: Checkout
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
