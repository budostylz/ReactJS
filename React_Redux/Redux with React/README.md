# React as our UI

## Intro
https://youtu.be/nq3E2n-ZdvA

# React as our UI
In this lesson, we're going to move away from our application being plain HTML and convert it to being powered by React. To do that, we'll need to add a number of libraries:

react
https://www.npmjs.com/package/react

react-dom
https://www.npmjs.com/package/react-dom

babel
https://www.npmjs.com/package/babel

Here are the packages that we'll be adding in the next video:

                <script src="https://unpkg.com/react@16.3.0-alpha.1/umd/react.development.js"></script>
                <script src="https://unpkg.com/react-dom@16.3.0-alpha.1/umd/react-dom.development.js"></script>
                <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>

## Adding in React
https://youtu.be/UGxbnapRJnQ

## Commit1
https://github.com/udacity/reactnd-redux-todos-goals/commit/97fcd0ad442fe9787c00dad9c8b53fd8e07b98a2

## Combining React and Redux
Alrighty, so you've learned React. You've built Redux and used it in a regular HTML application. But now we've started converting that HTML to a React application. In the following video we're going to start connecting the React Components to the Redux store.

I want you to pay attention to a few things in the next screencast:

                where the store.dispatch() code goes in a React component
                how a React component is passed the Redux store as a prop


## Dispatching Todo
https://youtu.be/vxwzO_U0UC4

## Commit2
https://github.com/udacity/reactnd-redux-todos-goals/commit/6b61c0a6e557603c12a8ef8d6062e9d688df11eb

In order to save time, we used an uncontrolled component for our input field.

ref
Refs provide a way to access DOM nodes or React elements created in the render method.

When to Use Refs
The docs outline a few good use cases for refs:

Managing focus, text selection, or media playback.
Triggering imperative animations.
Integrating with third-party DOM libraries.
Let's take a look at a similar example:

        class Color extends React.Component {
                alertTextInput = e => {
                        e.preventDefault();
                        alert(this.colorElement.value);
                };

                render() {
                        return (
                        <div>
                                <input
                                        type="text"
                                        placeholder="Add Input"
                                        ref={(inputElement) => this.colorElement = inputElement}
                                />

                                <button onClick={this.alertTextInput}>Alert Input</button>
                        </div>
                        );
                }
        }
In the line ref={(inputElement) => this.colorElement = inputElement}, inputElement is a reference to the input DOM element. We are storing a reference to the input DOM element in the colorElement instance property of the Color class.

Please note:

React will call the ref callback with the DOM element when the component mounts, and call it with null when it unmounts. Refs are guaranteed to be up-to-date before componentDidMount or componentDidUpdate fires.

## Refs and the DOM (Callback Refs)
https://reactjs.org/docs/refs-and-the-dom.html#callback-refs

## Dispatching Goals with React
https://youtu.be/0Z6YGs9hbMQ

## Commit3
https://github.com/udacity/reactnd-redux-todos-goals/commit/494c9a91e01472ddc87935777e84d82e046010c9

## Force Load App
https://youtu.be/G8pqzASO4ws

## Commit4
https://github.com/udacity/reactnd-redux-todos-goals/commit/14bb2cd7b0c247e9429c075cff411b1cbb08a478

## componentDidMount()
https://reactjs.org/docs/react-component.html#componentdidmount


## forceUpdate()
https://reactjs.org/docs/react-component.html#forceupdate

## Lists With React and Redux
https://youtu.be/BtBRCH8PyRI

## Commit5
https://github.com/udacity/reactnd-redux-todos-goals/commit/c7d050135ca6bf5ce73a79da51b198e5a90a0cfc

## Toggling UI With React
https://youtu.be/XCWV20iFvBU

## Commit6
https://github.com/udacity/reactnd-redux-todos-goals/commit/d3762be0264ef0395c332a75ba75558135967f1e

## Outro
https://youtu.be/FIVxQhNSO6k


