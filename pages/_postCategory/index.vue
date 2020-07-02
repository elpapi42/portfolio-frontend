<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center space-y-2">
      <!-- header -->
      <header-bar></header-bar>

      <p class="text-center max-w-xl">
        Welcome to Stories, my personal Blog, where i relate stuff around my proffesional life as Software Engineer, take a look!
      </p>

      <post-list
        :route="'/' + $route.params.postCategory"
        :pool="pool"
        class="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-2"
      ></post-list>

      <p class="font-light w-full px-4">
        *Powered by Strapi, a modern, high performance Headless CMS
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Posts',

  data() {
    return {
      pool: [],
    }
  },

  validate ({ store, params }) {
    return Object.keys(store.state.posts).some(item => item == params.postCategory)
  },

  asyncData({ store, params }) {
    return { pool: store.state.posts[params.postCategory] }
  }
}
</script>