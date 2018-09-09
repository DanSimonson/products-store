import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
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
      path: "/createproduct",
      name: "CreateProduct",
      component: CreateProduct
    }
  ]
});
