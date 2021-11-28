import Vue from "vue";
import VueRouter from "vue-router";
import Explore from "../view/Explore.vue";
import Disclaimer from "../view/Disclaimer.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Disclaimer",
    component: Disclaimer,
  },
  {
    path: "/explore",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/search",
    name: "Search",
    component: () => import("../view/SearchResult.vue"),
    props: (route) => ({ query: route.query.q, tag: route.query.tag }),
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: () => import("../view/Blogs.vue"),
  },
  {
    path: "/estate/:id",
    name: "Estate",
    component: () => import("../view/estate/Estate.vue"),
  },
  {
    path: "/editprofile",
    name: "EditProfile",
    component: () => import("../view/EditProfile.vue"),
  },
  {
    path: "/user/:id",
    name: "User",
    redirect: (route) => `/user/${route.params.id}/onsale`,
    component: () => import("../view/UserProfileView.vue"),
    props: (route) => ({ id: route.params.id }),
    children: [
      {
        path: "onsale",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "estates",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "created",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "liked",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "activity",
        component: () => import("../view/ActivityView.vue"),
      },
    ],
  },
  {
    path: "/myestates",
    name: "MyEstates",
    redirect: "/myestates/onsale",
    component: () => import("../view/UserProfileView.vue"),
    children: [
      {
        path: "onsale",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "estates",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "created",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "liked",
        component: () => import("../view/estate/UserEstatesView.vue"),
      },
      {
        path: "activity",
        component: () => import("../view/ActivityView.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

function patchRouterMethod(router, methodName) {
  router["old" + methodName] = router[methodName];
  router[methodName] = async function (location) {
    return router["old" + methodName](location).catch((error) => {
      if (error.name === "NavigationDuplicated") {
        return this.currentRoute;
      }
      throw error;
    });
  };
}

patchRouterMethod(router, "push");
patchRouterMethod(router, "replace");

export default router;
