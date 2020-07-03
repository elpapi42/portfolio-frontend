<template>
  <article>
    <h1 class="w-full px-4 text-xl font-medium">{{ postData.title }}</h1>

    <img
      :src="getCover(postData.cover)"
      alt="cover image"
      class="w-full object-cover h-64"
    >

    <div class="markdown" v-html="parsedBody"></div>
  </article>
</template>

<script>
import marked from 'marked'

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

  computed: {
    parsedBody() {
      return marked(this.postData.body)
    }
  },

  methods: {
    getCover(cover) {
      if(!cover) {
        return ''
      }

      const strapiUrl = this.$config.dev ? this.$config.strapiUrl : this.$config.devStrapiUrl
      return strapiUrl + cover.url
    },
  }
}
</script>