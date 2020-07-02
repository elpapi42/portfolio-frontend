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
  name: 'Post',

  data() {
    return {
      postData: []
    }
  },

  mounted() {
    const id = this.$route.params.id
    this.storyData = this.$store.state.stories.filter(item => item.id == id)[0]
  },

  validate ({ params, store }) {
    const isNumber = /^\d+$/.test(params.id)
    if(!isNumber) { return false }

    if(!['stories'].some(item => item == params.postCategory)) {return false}

    return store.state.stories.some(item => item.id == params.id)
  },

  asyncData({ store, params }) {

    return { postData: availablePools[params.postCategory] }
  }
}
</script>