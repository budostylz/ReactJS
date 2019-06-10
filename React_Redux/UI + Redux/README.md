# UI

## index.html
https://youtu.be/8IkNVrCqtvo

## Commit1
https://github.com/udacity/reactnd-redux-todos-goals/commit/3cb66af8ea36d4be3e80037ad76cef0ed58d24c8

We already have the Redux portion of our application working, but so far, we've just been manually running snippets of code to interact with the Redux Store. Let's create the UI above so that we can interact with the store using the browser.

## BasicUI
https://youtu.be/0M2gm4-IbGs

## Commit2
https://github.com/udacity/reactnd-redux-todos-goals/commit/c800637efb41fee3f4ea2a9392eb7a3025aac69f

# UI + State

## Dispatching New Items
https://youtu.be/b9HpVHhDvL4

## Commit3
https://github.com/udacity/reactnd-redux-todos-goals/commit/707da3250f13adfef00fdbf032a563135cdf939a

The changes we just added made it so whenever the Todo input field is submitted, it will add a Todo item to the state...and whenever the Goal input field is submitted, it will add a new Goal item to the state.

Let's break this down into the steps that happen. First, we need to listen for when the buttons are clicked; we did this with the plain DOM .addEventListener() method:

document.getElementById('todoBtn').addEventListener('click', addTodo)

document.getElementById('goalBtn').addEventListener('click', addGoal)
Pressing the #todoBtn will call addTodo which will add the new item to the state:

        function addTodo () {
            const input = document.getElementById('todo')
            const name = input.value
            input.value = ''

            store.dispatch(addTodoAction({
                name,
                complete: false,
                id: generateId()
            }));
        }

This method will extract the information from the input field, reset the input field, and then dispatch an addTodoAction Action Creator with the text that the user typed into the input field.

So we're using the UI to change the state of our store, but these changes are not reflecting the new state visually in the UI. Let's do that, now.

## Update UI
https://youtu.be/p3PtYdpqSO0

## Toggle Completion State of Todo
https://youtu.be/pJ7wu1rU680

## Commit4
https://github.com/udacity/reactnd-redux-todos-goals/commit/4219bd4cc8649f9fa1db65b57eb332150ec10c3f

## Remove Items
https://youtu.be/aFYwjb2RSbE

## Commit5
https://github.com/udacity/reactnd-redux-todos-goals/commit/8b9fcbfa43d2fa8927e59fd2d0e61d6d0bb5737d

# This is Redux
https://youtu.be/06YeYJkrGaw

## CDN
https://cdnjs.cloudflare.com/ajax/libs/redux/3.7.2/redux.min.js

## Adding in Redux
https://youtu.be/Sg482OZsFzM

##Commit6
https://github.com/udacity/reactnd-redux-todos-goals/commit/d4975c2245e6d590f637e0873d30ae8d6454e372

## A predictable state container for JavaScript apps.
https://redux.js.org/

Reducer composition sounds intimidating, but it's simpler than you might think. The idea is that you can create a reducer to manage not only each section of your Redux store, but also any nested data as well. Let's say we were dealing with a state tree like had this structure

        {
        users: {},
        setting: {},
        tweets: {
            btyxlj: {
            id: 'btyxlj',
            text: 'What is a jQuery?',
            author: {
                name: 'Tyler McGinnis',
                id: 'tylermcginnis',
                avatar: 'twt.com/tm.png'
            }   
            }
        }  
        }
We have three main properties on our state tree: users, settings, and tweets. Naturally, we'd create an individual reducer for both of those and then create a single root reducer using Redux's combineReducers method.

        const reducer = combineReducers({
        users,
        settings,
        tweets
        })
combineReducers, under the hood, is our first look at reducer composition. combineReducers is responsible for invoking all the other reducers, passing them the portion of their state that they care about. We're making one root reducer, by composing a bunch of other reducers together. With that in mind, let's take a closer look at our tweets reducer and how we can leverage reducer composition again to make it more compartmentalized. Specifically, let's look how a user might change their avatar with the way our store is currently structured. Here's the skeleton with what we'll start out with -

        function tweets (state = {}, action) {
        switch(action.type){
            case ADD_TWEET :
                ...
            case REMOVE_TWEET :
                ...
            case UPDATE_AVATAR :
                ???
        }
        }
What we're interested in is that last one, UPDATE_AVATAR. This one is interesting because we have some nested data - and remember, reducers have to be pure and can't mutate any state. Here's one approach.

        function tweets (state = {}, action) {
        switch(action.type){
            case ADD_TWEET :
                ...
            case REMOVE_TWEET :
                ...
            case UPDATE_AVATAR :
                return {
                ...state,
                [action.tweetId]: {
                    ...state[action.tweetId],
                    author: {
                    ...state[action.tweetId].author,
                    avatar: action.newAvatar 
                    }
                }
                }
        }
        }
That's a lot of spread operators. The reason for that is because, for every layer, we're wanting to spread all the properties of that layer on the new objects we're creating (because, immutability). What if, just like we separated our tweets, users, and settings reducers by passing them the slice of the state tree they care about, what if we do the same thing for our tweets reducer and its nested data. Doing that, the code above would be transformed to look like this

        function author (state, action) {
            switch (action.type) {
                case : UPDATE_AVATAR
                    return {
                    ...state,
                    avatar: action.newAvatar
                    }
                default :
                    state
            }
        }

        function tweet (state, action) {
            switch (action.type) {
                case ADD_TWEET :
                    ...
                case REMOVE_TWEET :
                    ...
                case : UPDATE_AVATAR
                    return {
                    ...state,
                    author: author(state.author, action)
                    }
                default :
                    state
            }
        }

        function tweets (state = {}, action) {
            switch(action.type){
                case ADD_TWEET :
                    ...
                case REMOVE_TWEET :
                    ...
                case UPDATE_AVATAR :
                    return {
                    ...state,
                    [action.tweetId]: tweet(state[action.tweetId], action)
                    }
                default :
                    state
            }
        }
All we've done is separated out each layer of our nested tweets data into their own reducers. Then, just like we did with our root reducer, we're passing those reducers the slice of the state they care about.



