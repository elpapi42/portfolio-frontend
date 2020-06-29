<template>
  <div>
    <post-card
      v-for="story in stories"
      :key="story.id"
      :id="story.id"
      :title="story.title"
      :body="story.body"
      :image-url="getCover(story.cover)"
      :base-route="baseRoute"
    ></post-card>
  </div>
</template>

<script>
/*
Simple list, the styling is at hand of the invoker
*/
export default {
  name: 'Stories',

  props: {
    maxStories: { default: -1 },
    baseRoute: {}
  },

  computed: {
    stories() {
      if(this.maxStories == -1) {
        return this.$store.state.stories.list
      }
      return this.$store.state.stories.list.slice(0, this.maxStories)
    },
  },

  methods: {
    getCover(cover) {
      if(cover) {
        const strapiUrl = this.$config.dev ? this.$config.strapiUrl : this.$config.devStrapiUrl
        return strapiUrl + cover.url
      } else {
        return ''
      }
    }
  }
}
</script>