// https://nuxt.com/docs/guide/directory-structure/middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default defineNuxtRouteMiddleware((to, from) => {
  console.log("Это мой глобальный middleware 2");
});