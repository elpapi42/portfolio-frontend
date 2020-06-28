export const state = () => ({
  list: []
})

export const actions = {
  async dispatchStories({commit}) {
    const response = await this.$axios.get('http://portfolio-strapi:1337/stories')
    return commit('setStories', response.data)
  }
}

export const mutations = {
  setStories(state, stories) {
    state.list = stories
  }
}