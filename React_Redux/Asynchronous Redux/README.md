# Intro
https://youtu.be/wmuL0wNvaZs

## External Data
We're going to use a database to interact with our Todos application. We're simulating the database to keep that aspect of the project less complex. This is the HTML script tag you need to add the database to your application which we'll use in the following video:

                <script src="https://tylermcginnis.com/goals-todos-api/index.js"></script>

## Using a Remote API
https://youtu.be/diArZ09Mw1U

## Commit1
https://github.com/udacity/reactnd-redux-todos-goals/commit/ac11f181a90e77a21478e59c258d720a658ec869

## Promise-Based API
The methods in the provided API are all Promise-based. Let's take a look at the .fetchTodos() method:

API.fetchTodos = function () {
  return new Promise((res, rej) => {
    setTimeout(function () {
      res(todos);
    }, 2000);
  });
};
See how we're creating and returning a new Promise() object?

In the task above, you could've just fetched all of our todos and then all of our Goals, but that's serial and is just making the user wait an unnecessarily long amount of time. Since the API is Promise-based, we can use Promise.all() to wait until all Promises have resolved before displaying the content to the user.

## Handling Initial Data
https://youtu.be/94ipRgIS9CY

## Commit2
https://github.com/udacity/reactnd-redux-todos-goals/commit/98d9b5468262eb4ea786cb55c3d68ed9de78af09

## Flash of No Data
https://youtu.be/KS0xPETRzRA

## Loading States with Redux
https://youtu.be/w5fQmGBKn1g

## Commit3
https://github.com/udacity/reactnd-redux-todos-goals/commit/6bb7f0d521986a316b9aa45cac4f2fae886c4bfc

# Optimistic Updates
When dealing with asynchronous requests, there will always be some delay involved. If not taken into consideration, this could cause some weird UI issues. For example, let’s say when a user wants to delete a todo item, that whole process from when the user clicks“delete” to when that item is removed from the database takes two seconds. If you designed the UI to wait for the confirmation from the server to remove the item from the list on the client, your user would click “delete” and then would have to wait for two seconds to see that update in the UI. That’s not the best experience.

Instead what you can do is a technique called optimistic updates. Instead of waiting for confirmation from the server, just instantly remove the user from the UI when the user clicks “delete”, then, if the server responds back with an error that the user wasn’t actually deleted, you can add the information back in. This way your user gets that instant feedback from the UI, but, under the hood, the request is still asynchronous.

We’ll see this technique in the upcoming screencasts.

## Optimistically Deleting Items
https://youtu.be/l-wRpOTFOys

## Commit4
https://github.com/udacity/reactnd-redux-todos-goals/commit/5186502ac6461c2e88ba1dbf1ec158764c84823c

## Optimistic Toggling Todos
https://youtu.be/7nicdmL-1k4

## Persiting Items
https://youtu.be/-uooq_C6jqM

## Commit5
https://github.com/udacity/reactnd-redux-todos-goals/commit/d4732ee5af9cf1ee87b5bd42ec46034b38de4aa3

# Thunk

## Mixed Logic
https://youtu.be/WHbfLpT0Ftg

Currently, our code for removing a todo item looks like this:

                removeItem(item) {
                const { dispatch } = this.props.store

                dispatch(removeTodoAction(item.id))

                return API.deleteTodo(item.id)
                        .catch(() => {
                                dispatch(addTodoAction(item))
                                alert('An error occured. Try again.')
                        })
                }
                }
Do you see how we are mixing our component-specific code with the API-specific code? If we move the data-fetching logic from our component to the action creator, our final removeItem() method might look like this:

                removeItem(item) {
                const { dispatch } = this.props.store

                return dispatch(handleDeleteTodo(item))
                }
This is much better! The removeItem() function only has one task; dispatching that a specific item needs to be deleted.

However, we need to make it so our handleDeleteTodo action creator makes an asynchronous request before it returns the action. What if we just return a promise from handleDeleteTodo that resolves with the action once we get the data? Well, that won't quite work; as of right now, every action creator needs to return an object, not a promise:

                function asyncActionCreator (id) {
                        return {
                                type: ADD_USER,
                                user: ??
                        };
                }
What if we used our knowledge of functional programming along with our knowledge of Redux middleware to solve this? Remember that middleware sits between the dispatching of an action, and the running of the reducer. The reducer expects to receive an action object, but what if, instead of returning an object, we have our action creator return a function?

We could use some middleware to check if the returned action is either a function or an object. If the action is an object, then things will work as normal - it will call the reducer passing it the action. However, if the action is a function, it can invoke the function and pass it whatever information it needs (e.g. a reference to the dispatch() method). This function could do anything it needs to do, like making asynchronous network requests, and can then dispatch a different action (that returns a regular object) when its finished.

An action creator that returns a function might look something like this:

        function asyncActionCreator (id) {
                return (dispatch) => {
                        return API.fetchUser(id)
                        .then((user) => {
                        dispatch(addUser(user));
                        });
                };
        }

Notice that we’re no longer returning the action itself! Instead, we’re returning a function that is being passed dispatch. We then call this function when we have the data.

Now, this won’t work out of the box, but there's some good news: we can add some middleware to our app to support it! Let’s go ahead and see what that actually looks like.

We'll be adding the redux-thunk library in the following video, so you'll need this:

                <script src="https://unpkg.com/redux-thunk@2.2.0/dist/redux-thunk.min.js"></script>

## Thunk
https://youtu.be/rrEV_gNSvmM

## Commit6
https://github.com/udacity/reactnd-redux-todos-goals/commit/524066483d154851d417e6567e50edca9b85109b

## 💫Remember middleware executes in the order it is listed in the applyMiddleware() function.

Benefits of Thunks
Out of the box, the Redux store can only support the synchronous flow of data. Middleware like thunk helps support asynchronicity in a Redux application. You can think of thunk as a wrapper for the store’s dispatch() method; rather than returning action objects, we can use thunk action creators to dispatch functions (or even or Promises).

Without thunks, synchronous dispatches are the default. We could still make API calls from React components (e.g., using the componentDidMount() lifecycle method to make these requests) -- but using thunk middleware gives us a cleaner separation of concerns. Components don't need to handle what happens after an asynchronous call, since API logic is moved away from components to action creators. This also lends itself to greater predictability, since action creators will become the source of every change in state. With thunks, we can dispatch an action only when the server request is resolved!

## Redux THunk on Github
https://github.com/reduxjs/redux-thunk

## Async Flow
https://redux.js.org/advanced/async-flow

## How to dispatch a Redux action with a timeout?
https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

# Leveraging Thunks in our App

## Thunkify Goals
https://youtu.be/WysYSogVCAo

## Commit6
https://github.com/udacity/reactnd-redux-todos-goals/commit/f791da39440d43bcd3f24ed37fa078ecaf72cb97

## Thunkify Todos
https://youtu.be/GAn1-rLDmYc

## Commit7
https://github.com/udacity/reactnd-redux-todos-goals/commit/6fb6208f7f67dfe601a8efa9de44a10208863be9

## Thunkify Initial Data
https://youtu.be/Bzn33iPkKDA

## Commit 8
https://github.com/udacity/reactnd-redux-todos-goals/commit/e40512f5cd22b35c6461fa334636aaa1eb9f27d2

## More Asynchronous Options
The most common requests I get for this course are around more advanced data-fetching topics with Redux. I've resisted because typically they bring in a lot of complexity, while the benefits aren't seen until your data-fetching needs become large enough. With that said, now that you have a solid foundation on Redux and specifically, asynchronous Redux, you'll be in a good position to read up on the different options to decide if any would work best for the type of application you're working on. I encourage to read up on both of the other (popular) options.

## redux-promise FSA-compliant promise middleware for Redux.
https://github.com/redux-utilities/redux-promise

## redux-saga 
https://github.com/redux-saga/redux-saga

## Outro
https://youtu.be/62vf5k7CvCo

## Thunk
https://en.wikipedia.org/wiki/Thunk

