export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('posts/dispatchPosts')
  },
}


