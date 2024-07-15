export default {
  path: "/test",
  redirect: "/test/index",
  meta: {
    icon: "ri:information-line",
    // showLink: false,
    title: "测试页面目录",
    rank: 30
  },
  children: [
    {
      path: "/test/index",
      name: "Test",
      //component: () => import("@/views/test/index.vue"),
      component: () => import("@/views/test/test.vue"),
      meta: {
        title: "测试页面",
        showParent: true
      }
    }
  ]
} satisfies RouteConfigsTable;
