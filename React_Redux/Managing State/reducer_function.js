function appReducer(state, action){
    if( action.type === 'DELETE_FLAVOR'){
        
        return state.filter((n) => n.flavor !== 'Vanilla')//return new state without mutating state
    }
    return state  
}

let state = [ { flavor: 'Vanilla', count: 50}, {flavor: 'Chocolate', count: 100}];
let action = { type:'DELETE_FLAVOR', flavor: 'Vanilla' };
let test = appReducer(state, action) 

