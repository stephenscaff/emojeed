export const state = () => ({
  topic: ''
})

export const mutations = {
  change(state, topic) {
    state.topic = topic
  }
}

export const getters = {
  topic: state => state.topic
}
