const setStoreAction = (dispatchNamespace: string, dispatchAction: string, state: never) => {
  console.debug(
    `[BOP - ${new Date()}]: Setting state in VueX for ${dispatchNamespace}/${dispatchAction}`,
  )
  console.debug(state)
  // store.dispatch(`${dispatchNamespace}/${dispatchAction}`, state)
}

export default setStoreAction
