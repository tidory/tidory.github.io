export const state = () => ({
  active: 0
})

export const mutations = {
  activeMenu(state, active) {
    state.active = active;
  }
}