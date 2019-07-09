//Library Code
function createStore(reducer){ // The Store
    // The store should have four parts
    // 1. The state : let state
    // 2. Get the state : getState = () => state
    // 3. Listen to changes on the state : const subscribe = (listener) => {}
    // 4. Update the state : const dispatch = (action) => {}

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
        state = reducer(state, action);//call app function
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

//define action names
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const ADD_GOAL = 'ADD_GOAL';
const REMOVE_GOAL = 'REMOVE_GOAL';

//action creators return actions if we want to get an action or dispatch an action
function addToDoAction(todo){

    return{
        type: ADD_TODO,
        todo
    }
}

function removeToDoAction(id){

    return{
        type: REMOVE_TODO,
        id
    }
}

function toggleToDoAction(id){

    return{
        type: TOGGLE_TODO,
        id
    }
}

function addGoalAction(goal){

    return{
        type: ADD_GOAL,
        goal
    }
}

function removeGoalAction(id){

    return{
        type: REMOVE_GOAL,
        id
    }
}





function todos (state = [], action){//Pure Function

    switch(action.type){
        case ADD_TODO :
                return state.concat([action.todo])//new state will create, mutation will not occur because concat will return new array to avoid modifying state
        case REMOVE_TODO :
                return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO :
                return state.map((todo) => todo.id !== action.id ? todo : // if todo.id === action.id, return todo without modification
                Object.assign({}, todo, { complete: !todo.complete }))    // if todo,id !== action.id, create a new object from todo      
        default : 
            return state
    }
    
}

function goals (state = [], action){

    switch(action.type){
        case ADD_GOAL :
                return state.concat([action.goal])//new state will create, mutation will not occur because concat will return new array to avoid modifying state
        case REMOVE_GOAL :
                return state.filter((goal) => goal.id !== action.id)
        default : 
            return state


    }
}

function app (state = {}, action){//app invokes both todos and goals reducers
    
    return {
        todos: todos(state.todos, action),
        goals: goals(state.goals, action),
    }
}


//1. Create Store
const store = createStore(app) //user invokes to return store

console.log(store)


//2. Detect changes in state
store.subscribe(() => {//detects state changes in store
    console.log('The new state is: ', store.getState())
})



//dispatch action
store.dispatch(addToDoAction({
    id: 0,
    name: 'Walk the dog',
    complete: false
}))

/*

store.dispatch(addToDoAction({
    id: 1,
    name: 'Wash the car',
    complete: false
}))

store.dispatch(addToDoAction({
    id: 2,
    name: 'Go to the gym',
    complete: true
}))

store.dispatch(removeToDoAction(1))
store.dispatch(toggleToDoAction(0))

store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn Redux'
}))

store.dispatch(addGoalAction({
    id: 1,
    name: 'Lose 20 pounds'
}))

store.dispatch(removeGoalAction(0))

*/














