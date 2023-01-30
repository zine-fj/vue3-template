import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/auth";

const routes = [
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("@/views/LoginPage.vue"),
    meta: {
      requireLogin: true,
      title: "登录",
      keepAlive: true,
    },
  },
  {
    path: "/list",
    name: "ListPage",
    component: () =>
      import(/* webpackChunkName: "List" */ "@/views/ListPage.vue"),
    meta: {
      requireLogin: true,
      title: "列表页面",
      keepAlive: true,
    },
  },
  {
    path: "/detail",
    name: "DetailPage",
    component: () =>
      import(/* webpackChunkName: "Detail" */ "@/views/DetailPage.vue"),
    meta: {
      requireLogin: true,
      title: "详情页面",
      keepAlive: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    // component: () => import('@/components/Home'),
    redirect: '/list'
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const whiteList = ["/login"];
// 路由全局守卫
router.beforeEach((to, from, next) => {
  console.log("--- 路由全局守卫 ---", 'to: ', to);
  const hasToken = getToken();
  console.log("token: ", hasToken);
  if (hasToken) {
    if (to.name === "LoginPage") {
      next({ name: "ListPage" });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
  }
  document.title = to.meta.title ? to.meta.title : "";
});

export default router;
