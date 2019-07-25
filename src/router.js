import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'dashboard'
    },
    {
      path: "/",
      name: "home",
      component: Home,
      children: [{
        path: "dashboard",
        component:()=>import("./components/mybody.vue")
      },{
        path:'consult',
        component:()=>import("./components/consult.vue")
      }]
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
