function createStore () {
  let state

  const getState = () => state

  return {
    getState
  }
}
