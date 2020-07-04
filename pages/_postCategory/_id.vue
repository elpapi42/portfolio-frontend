<template>
  <article>
    <h1 class="w-full px-4 text-xl font-medium text-center sm:text-left">{{ postData.title }}</h1>

    <img
      :src="getCover(postData.cover)"
      alt="cover image"
      class="w-full object-cover h-64"
    >

    <div class="markdown text-justify px-4" v-html="parsedBody"></div>
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

      return this.$config.strapiUrl + cover.url
    },
  }
}
</script>