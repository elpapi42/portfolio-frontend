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

  mounted() {
    this.getRepos()
  },

  data() {
    return {
      reposData: [],
    }
  },

  methods: {
    async getRepos() {
      const response = await this.$axios.get(this.$config.backendUrl + 'repos/')
      this.reposData = response.data.repos
      this.forceRerender()
    },
  },
}
</script>