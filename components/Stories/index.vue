<template>
  <div class="flex flex-col space-y-2">
    <h1 class="text-2xl text-center sm:text-right font-medium">Stories</h1>
    <post-card
      v-for="story in stories"
      :key="story.id"
      :title="story.title"
      :body="story.body"
      :image-url="getCover(story.cover)"
    ></post-card>
  </div>
</template>

<script>
export default {
  name: 'Stories',

  computed: {
    stories() {
      return this.$store.state.stories.list
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