// https://nuxt.com/docs/guide/directory-structure/middleware
export default defineNuxtRouteMiddleware(() => {
    console.log("Это мой глобальный middleware 1");
});