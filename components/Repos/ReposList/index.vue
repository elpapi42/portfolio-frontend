<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <repo-card 
      v-for="repo in reposData"
      v-bind:key="repo.url"
      v-bind:repo-data="repo"
    ></repo-card>
  </div>
</template>

<script>
export default {
  name: 'ReposList',

  async mounted() {
    const response = await this.$axios.get(this.$config.backendUrl + 'repos/')
    this.reposData = response.data.repos
  },

  data() {
    return {
      reposData: [],
    }
  },
}
</script>