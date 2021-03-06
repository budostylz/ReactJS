# React as our UI

## Intro
https://youtu.be/0ioxfKg5yM8

## Connect & Provider
https://youtu.be/6Kfj_tRMJsI


## Getting the Store to Each Component
The first thing we want to do is improve how each component gets access to the store. If it's tough for a component to access the store, whether it's to get the state, listen to the state, or update the state, nothing else we do will matter. Right now we’re just passing the store down as a prop. It works fine enough in our small app, but what if we had a larger app with more layers to it? Passing the store down ten components deep wouldn't scale very well. One of the main points of having a store is to avoid passing props down through a bunch of components.

One reason React (talking about React for a moment, not Redux) is so popular is because it's very efficient. It's efficient in keeping state localized to a component, it's efficient in keeping UI confined to a component, and it's efficient in knowing when something has changed and re-rendering just that component. So the second thing we need need to figure out is how to re-render components only if the data they depend on (from the store) changes. Right now, we're solving this by calling getState at the root of our application and then passing the data down. Again, this won't scale well as our app grows.

If we can find a nice abstraction for getting the store to any component that needs it and only re-rendering components when the exact data they need change, we'll improve every aspect of our current codebase.

## What is Context
https://youtu.be/4jT0ws2UECE

## Context in Action
https://youtu.be/6rVT0OVLt80

## Context
Before we add the Context API into our app, let's make sure we're on the same page as to how it all works.

Recall that in one of the previous screencasts, passing data from one component to another component was a bit cumbersome. We had to pass data from component to component:

        import React from 'react';
        import { render } from 'react-dom';

        function Parent ({ name }) {
                return (
                <div>
                <h1>Parent</h1>
                <Child name={name}/>
                </div>
                );
        }

        function Child ({ name }) {
                return (
                <div>
                <h1>Child</h1>
                <Grandchild name={name}/>
                </div>
                );
        }

        function Grandchild ({ name }) {
                return (
                <div>
                <h1>Grandchild</h1>
                <h3>Name: {name}</h3>
                </div>
                );
        }

        class App extends React.Component {
        render() {
        const name = 'Tyler';

        return (
                <Parent />
                );
                }
        }

        render(<App />, document.getElementById('root'));

The App component renders Parent, which renders Child, which renders Grandchild. However, what's important to notice here is that the Grandchild component wants to render name -- but the data for name lives inside the App component.

Because Grandchild is so deeply nested, we have to pass the name prop one-by-one from App through all the components until it reaches Grandchild. What's more: we must do this even if any of the components along the way (Parent and Child) aren't even concerned with the name data!

This process of "threading props" to send data to a child component can be tiresome, and perhaps even error-prone. Luckily, we can avoid it with React's Context API. To begin, we'll use React's createContext() function to return an object with a Provider as well as a Consumer.

        const Context = React.createContext();

Let's now check out how Context.Provider and Context.Consumer make these interactions between components possible!

## Context.Provider
The Provider component is used in the upper level of the component tree; that is, the component from which the data to be passed is held. In our case, this was the App component. We passed the name data as the value of Provider's value prop:

        class App extends React.Component {
                render() {
                const name = 'Tyler';

                return (
                <Context.Provider value={name}>
                <Parent />
                </Context.Provider>
                );
                }
        }
Note that the Provider component simply wraps around the entire component to be rendered!

## Context.Consumer
On the receiving end (i.e., a component "under" the Provider in the component hierarchy), we use the Consumer component. In our example, we passed Consumer a function as a child. This function accepts a value and returns some JSX:

                function Grandchild ({ name }) {
                        return (
                        <Context.Consumer>
                        {(name) => (
                        <div>
                        <h1>Grandchild</h1>
                        <h3>Name: {name}</h3>
                        </div>
                        )}
                        </Context.Consumer>
                        );
                }
As a result, we were able to render the Grandchild component with the correct name data without ever having to pass that data down the entire component thread! That's a lot less code than the previous way we had to do it. So React's Context API provides a terse, approachable way to easily communicate information from one component to another.

Now, let's go ahead and utilize Context in our todos app.

## Context
https://reactjs.org/docs/context.html#reactcreatecontext

## Utilizing Context
https://youtu.be/tlTJJ_v8ph0

## Presentational and Container Components
https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0

## Converting Todos and Goals To Context
https://youtu.be/-2WMssK63uw

## Commit1
https://github.com/udacity/reactnd-redux-todos-goals/commit/4b4dda508153d27136d060081a4b9d07c7ee78cf


## Connecting Components
https://youtu.be/msQfOYS_8Dc

## Connecting Components2
https://youtu.be/heKC7Li9AGk

## Commit2
https://github.com/udacity/reactnd-redux-todos-goals/commit/a759364886753f1baf9cba1d2a7f21378740f3b7

We just built out the Provider, Context, and connect() function. This function is so common that it has been developed into a library called react-redux that's officially supported by React.

We'll be adding the react-redux library in the following video:

                <script src="https://unpkg.com/react-redux@5.0.6/dist/react-redux.min.js"></script>

## React-Redux
https://youtu.be/ByzhOPoOZaU

## Commit3

## The react-redux Bindings
Let's take a moment to recap the changes we've made to our app in this Lesson, because we've updated quite a bit!

Previously, we leveraged the standard redux library to build our app. This allowed us to create a Redux store with the createStore() function, giving us an API to listen (subscribe()), get updates (getState()), and make updates (dispatch()) to state. We then created our own Provider component to efficiently pass the store to components that needed it, as well as our own connect() function so that our components can access "slices" of state as props.

We can build a fully-functional React and Redux app without Provider or connect(), but since they greatly simplify how React components interact with the Redux store, the creators of redux have included them in the react-redux package!

## Provider
With react-redux, rather than creating and using our own Provider which looks like this:

const Context = React.createContext()    

                class Provider extends React.Component {    
                render () {    
                return (    
                <Context.Provider value={this.props.store}>    
                {this.props.children}    
                </Context.Provider>    
                );
                }    
                }

                ReactDOM.render(
                <Provider store={store}>
                <ConnectedApp />
                </Provider>,
                document.getElementById('app')
                );

...we can simply use the Provider component defined by the react-redux package! This allows us to wrap our entire app with Provider, effectively passing the store to even the most deeply nested components.

                ReactDOM.render(
                <ReactRedux.Provider store={store}>
                <ConnectedApp />
                </ReactRedux.Provider>,
                document.getElementById('app')
                );
## connect()
Similarly, we can also leverage react-redux's connect() function right out of the box. connect() is a higher-order function that takes in two arguments (as well as a few optional arguments) and returns a function. Check out its signature below:

                const buildConnectedComponent = connect(mapStateToProps, mapDispatchToProps);
What's vital to understand is that buildConnectedComponent is a function. buildConnectedComponent will take a regular (presentational) React component and return a new, "connected" component.

                const ConnectedComponent = buildConnectedComponent(MyComponent);
ConnectedComponent renders MyComponent, passing it the props as defined by mapStateToProps and mapDispatchToPros.

We can avoid having the intermediary buildConnectedComponent variable and just call the functions back-to-back:

                const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(MyComponent)

## Official React bindings for Redux https://react-redux.js.org
https://github.com/reduxjs/react-redux/

# Folder Structure

## The Real World
https://youtu.be/4Ud2n_ceUZc

Right now, all of our app's code is located in a single file. This isn't a very realistic way to build an app, though. Hopefully it hasn't been too frustrating scrolling up and down and up and down to find the right place to add your code! 😉

To fix this, we're going to use Create React App to scaffold out a React app for us. If, for some reason, you don't have Create React App installed on your machine, you can install it by running the following in your Terminal:

                npm install -g create-react-app

## Create React App
https://youtu.be/QzBtsjxouyw

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/5c9b7e4b84d005de1139620f4d795bc5eacd95ca

## Actions
https://youtu.be/JnBpKGOqqwc

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/371d896c07230ffb1b056233e605f8079c4e32f9

## Reducers
https://youtu.be/N-44Rn9B8QY

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/4a89382786d9516a41415965a9172b9853d8998f

## Middleware
https://youtu.be/sgRSJuKLB8g

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/6da37ad5d09edc5d06c00250d03b578ea4bdbcb7

## Components
https://youtu.be/zu_OuldiJw4

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/7a540c1ba3f6c0a3e0a249b76584c5c215a99604

## The Store
https://youtu.be/hC6WWIXVlSo

## Commit
https://github.com/udacity/reactnd-redux-todos-goals/commit/1177c07de724399ba9f8b1573c4c9711caa23daa

## "Rails-style" Organization
To recap, we've organized the individual elements of our app with a "Rails-style" approach. That is, assets are grouped by "type" or "capability": any action will be found in the Actions folder, any reducer will be found in Reducers, and so on. In fact, the “real world” example from Redux on GitHub structures the app this very way. Under this directory structure, if we wanted to import all actions into a component, we can get them all in a single import!

Frontend
   - Components
      - component1.js
      - component2.js
      - component3.js
   - Actions
      - action1.js
      - action2.js
   - Reducers
      - reducer1.js
   - Util
   - Store

## Other Patterns
Along with the "Rails style" of organizing your folder structure, you may find other approaches that developers use to build their directory more to your liking. An alternative way to structure the same application, then, is by feature:

                ├── dashboard
                │ ├── actions.js
                │ ├── index.js
                │ └── reducer.js
                └── nav
                ├── actions.js
                ├── index.js
                └── reducer.js

This form of organization groups assets by their common feature or “concept.” That is, all assets related to a navigation component are all together in a single, modular folder. It’s a great way to visually express what the application is all about. However, if the app contains several hundred components, it can become more difficult to navigate through.

What's more: you might even see that some developers prefer a "duck" style approach, where Redux and state management files are completely separated from files that render UI.

Ultimately, the choice is yours. Whichever way you choose to organize your directory structure, just be sure that it’s something that makes sense for your app, and it’s something you’re comfortable with!

## Summary
This section didn't accomplish anything with React or Redux. All we did here was improve the structure and organization of our app by moving each portion of the app to a specific folder structure.

To say it one more time, there's no "right" way to build out the folder structure for you app. However, doing it this way is handy because we're using the structure provided by Create React App. Using this structure, it's easy to convert a plain React application over to one that includes Redux. Another benefit is that other React developers will already be comfortable with this file/folder organization.

## Scaling your Redux App with ducks
https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/





