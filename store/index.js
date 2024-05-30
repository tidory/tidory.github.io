export const state = () => ({
  show: false,
  article: {}
})

export const getters = {
  getShow (state) {
    return state.show
  },

  getArticle (state) {
    return state.article
  }
}

export const mutations = {
  toggleShow (state) {
    state.show = !state.show
  },

  setArticle (state, article) {
    state.article = article
  }
}
