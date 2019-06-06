//Library Code

function createStore(reducer){ // The Store
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

    const dispatch = (action) =>{//receive action to tell dispatch the specific event that occurs inside application
        state = reducer(state, action);//call todos to return new state
        listeners.forEach((listener) => listener())
    }



    return { //return state when createStore is invoked
        getState,
        subscribe,
        dispatch
    }


}




/*
    Reduce function todos() inputs are state and action.
    Output is new state.
*/
// App Code
function todos (state = [], action){//Pure Function
    if(action.type === 'ADD_TODO'){
        return state.concat([action.todo])//new state will create, mutation will not occure because concat will return new array to avoid modifying state
    }
    return state;
}

/*

const store = createStore(todos) //user invokes to return store

store.subscribe(() => {//detects state changes in store
    console.log('The new state is: ', store.getState())
})

store.unsubscribe(() => {//detects state changes in store
    console.log('The store changed. ')
})

unsubscribe()
*/



