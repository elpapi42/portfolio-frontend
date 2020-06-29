<template>
  <div>
    <post-card
      v-for="story in stories"
      :key="story.id"
      :id="story.id"
      :title="story.title"
      :body="story.body"
      :image-url="getCover(story.cover)"
      base-route="/stories"
    ></post-card>
  </div>
</template>

<script>
export default {
  name: 'Stories',

  computed: {
    stories() {
      return this.$store.state.stories.list.slice(0, 2)
    },
  },

  methods: {
    getCover(cover) {
      if(cover) {
        return (this.$config.dev ? this.$config.strapiUrl : this.$config.devStrapiUrl) + cover.url
      } else {
        return ''
      }
    }
  }
}
</script>