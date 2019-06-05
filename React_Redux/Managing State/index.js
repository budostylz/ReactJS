/* The Store */
function createStore(){
    // The store should have four parts
    // 1. The state
    // 2. Get the state.
    // 3. Listen to changes on the state
    // 4. Update the state

    let state //hold state of entire application
    let listeners = []

    const getState = () => state //provide way to get access to state

    const subscribe = (listener) => {//push function being passed to subscibe when invoked
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)//filter out original listener function once subscribed is invoked
        }

    }


    return { //return state when createStore is invoked
        getState,
        subscribe
    }


}

const store = createStore() //user invokes to return store

store.subscribe(() => {//detects state changes in store
    console.log('The new state is: ', store.getState())
})

store.unsubscribe(() => {//detects state changes in store
    console.log('The store changed. ')
})

unsubscribe()



