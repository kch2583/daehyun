import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../src/components/home.vue";
import Product from "../src/components/product.vue";
import ContactUs from "../src/components/contactus.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/product",
      component: Product,
    },
    {
      path: "/contactus",
      component: ContactUs,
    },
  ],
});
