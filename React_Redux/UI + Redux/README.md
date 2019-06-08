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

## Toggle Cmpletion State of Todo
https://youtu.be/pJ7wu1rU680

## Commit3
https://github.com/udacity/reactnd-redux-todos-goals/commit/4219bd4cc8649f9fa1db65b57eb332150ec10c3f

## Remove Items
https://youtu.be/aFYwjb2RSbE

## Commit4
https://github.com/udacity/reactnd-redux-todos-goals/commit/8b9fcbfa43d2fa8927e59fd2d0e61d6d0bb5737d


