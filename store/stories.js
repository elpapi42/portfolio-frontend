export const state = () => ({
  list: []
})

export const actions = {
  async dispatchStories({commit}) {
    const response = await this.$axios.get(this.$config.strapiUrl + '/stories?_sort=created_at:asc')
    return commit('setStories', response.data)
  }
}

export const mutations = {
  setStories(state, stories) {
    state.list = stories
  }
}