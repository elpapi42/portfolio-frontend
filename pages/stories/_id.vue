<template>
  <div class="flex justify-center w-full">
    <!-- Limit the max width on large screens -->
    <div class="flex flex-col w-full max-w-4xl items-center space-y-2">
      <!-- header -->
      <header-bar></header-bar>
      <p>{{ $route.params.id }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',

  data() {
    return {
      storyData: []
    }
  },

  mounted() {
    const id = this.$route.params.id
    this.storyData = this.$store.state.stories.list.filter(item => item.id == id)[0]
    console.log(this.storyData)
  },

  validate ({ params, query, store }) {
    const isNumber = /^\d+$/.test(params.id)
    if(!isNumber) { return false }

    return store.state.stories.list.some(item => item.id == params.id)
  }
}
</script>