export default {
  changeIndex (state, index) {
    state.index = index
    try {
      localStorage.index = index
    } catch (e) {}
  }
}
