export const state = () => ({
  stories: [],
})

export const actions = {
  async dispatchPosts ({ dispatch }) {
    await dispatch('dispatchStories')
  },

  async dispatchStories({ commit }) {
    const response = await this.$axios.get(this.$config.strapiUrl + '/stories?_sort=created_at:asc')
    return commit('setStories', response.data.reverse())
  }
}

export const mutations = {
  setStories(state, stories) {
    state.stories = stories
  }
}