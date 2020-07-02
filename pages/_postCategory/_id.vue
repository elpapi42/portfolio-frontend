<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center space-y-2">
      <!-- header -->
      <header-bar></header-bar>

      <h1 class="w-full px-4 text-xl font-medium">{{ postData.title }}</h1>

      <img
        :src="getCover(postData.cover)"
        alt="cover image"
        class="w-full object-cover h-64"
      >

      <p class="w-full px-4 text-justify">{{ postData.body }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',

  data() {
    return {
      postData: null
    }
  },

  validate ({ params, store }) {
    const isNumber = /^\d+$/.test(params.id)
    if(!isNumber) { return false }

    if(!Object.keys(store.state.posts).some(item => item == params.postCategory)) {return false}

    return store.state.posts.stories.some(item => item.id == params.id)
  },

  asyncData({ params, store }) {
    return {
      postData: store.state.posts.stories.find(item => item.id == params.id)
    }
  },

  methods: {
    getCover(cover) {
      if(!cover) {
        return ''
      }

      const strapiUrl = this.$config.dev ? this.$config.strapiUrl : this.$config.devStrapiUrl
      return strapiUrl + cover.url
    }
  }
}
</script>