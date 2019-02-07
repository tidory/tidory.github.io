export const state = () => ({
  active: null
})

export const mutations = {
  activeMenu(state, active) {
    state.active = active;
  }
}