<template>
  <div>
    <post-card
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :body="post.body"
      :image-url="getSmallCover(post.cover)"
      :base-route="route"
    ></post-card>
  </div>
</template>

<script>
/*
Simple list of post items,
the styling is at hands of the invoker
*/
export default {
  name: 'PostList',

  props: {
    pool: { type: Array },
    route: { default: '/', type: String},
    maxPosts: { default: -1, type: Number },
  },

  computed: {
    posts() {
      if(this.maxPosts == -1) {
        return this.pool
      }
      return this.pool.slice(0, this.maxPosts)
    },
  },

  methods: {
    getSmallCover(cover) {
      if(!cover) {
        return ''
      }

      const strapiUrl = this.$config.dev ? this.$config.strapiUrl : this.$config.devStrapiUrl
      return strapiUrl + cover.formats.small.url
    }
  }
}
</script>