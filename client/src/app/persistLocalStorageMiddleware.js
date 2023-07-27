const persistLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action)

  // Define an array of state slices that you want to persist in local storage
  const stateToPersist = ['autenticacion']

  // Extract the slices from the store state
  const stateToSave = stateToPersist.reduce((acc, curr) => {
    acc[curr] = store.getState()[curr]
    return acc
  }, {})

  // Save the extracted state to local storage
  localStorage.setItem('autentication_storage', JSON.stringify(stateToSave))
}

export default persistLocalStorageMiddleware
