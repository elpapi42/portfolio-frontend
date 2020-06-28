export const  actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('stories/dispatchStories')
  },
}
