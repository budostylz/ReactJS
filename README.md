
# React JavaScript
https://reactjs.org/

## Markdown Basic Syntax
https://www.markdownguide.org/basic-syntax/

## Babel Transpiler
https://babeljs.io/repl/

## Tutorial: Intro to React
https://reactjs.org/tutorial/tutorial.html

## npm
https://www.npmjs.com

## NodeJS
https://nodejs.org/en/

## How To Start With Node.js
https://www.c-sharpcorner.com/article/how-to-start-with-node-js/

## create-react-app(Create New React Application)
https://github.com/facebook/create-react-app

## React Docs
https://reactjs.org/docs/getting-started.html

## React Sandbox
https://codesandbox.io/s/new

## Checkout a branch into a local repository
https://confluence.atlassian.com/bitbucket/checkout-a-branch-into-a-local-repository-313466957.html

## Ignoring files
https://help.github.com/en/articles/ignoring-files

## How to Use React Components in Angular 2+
https://sdk.gooddata.com/gooddata-ui/docs/4.1.1/ht_use_react_component_in_angular_2.x.html

## Expert React Training
https://reacttraining.com

## Composition over inheritance
https://en.wikipedia.org/wiki/Composition_over_inheritance

## 20 EASY-TO-USE MOCKUP TOOLS TO DESIGN YOUR NEXT APP
https://codingsans.com/blog/mockup-tools

## Thinking in React
https://reactjs.org/docs/thinking-in-react.html

## Lifecycle Diagram
http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## React: Component Lifecycle Events
https://medium.com/@joshuablankenshipnola/react-component-lifecycle-events-cb77e670a093

## How does React decide to re-render a component?
https://lucybain.com/blog/2017/react-js-when-to-rerender/

## React - Passing state from child to parent in drop down select
https://stackoverflow.com/questions/49846679/react-passing-state-from-child-to-parent-in-drop-down-select

## 8 React conditional rendering methods
https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/

## Using React and Redux in SharePoint Framework (SPFx)
https://blogs.perficient.com/2017/08/10/using-react-and-redux-in-sharepoint-frameworkspfx/

## Outro
https://youtu.be/45ileyqFeGw

## The what and why of Redux
https://blog.pusher.com/the-what-and-why-of-redux/

## Leveling Up with React: Redux
https://css-tricks.com/learning-react-redux/

## FullCalendar React Component
https://fullcalendar.io/docs/react

## Unit Testing React Components
https://medium.com/javascript-scene/unit-testing-react-components-aeda9a44aae2

## React Calendar Demo
https://codesandbox.io/s/2z6wp2jozn

<em>Template for Building React/ Redux Projects</em>

## Planning Stage 📐

## Step 1 - Draw All of the Views of the App
We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that you'll have a good idea of what information and data you're planning to have on each page.

Instead of paper and pencil, you can be a bit more digital and use <a href="https://codingsans.com/blog/mockup-tools">software for creating mockups</a>. If you were given project specifications, check your mock against them to make sure that you have all of the required features.

## Step 2 - Break Each View Into a Hierarchy of Components
For this step,

* draw boxes around every component; and
* arrange the components into a hierarchy

## Step 3 - Determine What Events Happen in the App
We need to take a look at what is happening in each component. Let's determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

## Step 4 - Determine What Data Lives in the Store
Remember that the main problems that Redux (and the react-redux bindings!) was meant to solve were:

* Propagation of props through the entire component tree.
* Ensuring consistency and predictability of the state across the app.

According to Dan Abramov, the creator of Redux, we should follow the following principle for determining whether to store a piece of data in the store or in a React component:

<em>"Use Redux for state that matters globally or is mutated in complex ways… The rule of thumb is: do whatever is less awkward."</em>

Take a look at <a href="https://redux.js.org/faq/organizing-state">Organizing State</a> and <a href="https://github.com/reduxjs/redux/issues/1287">How to choose between Redux's store and React's state?</a> for further information about this.

## Coding Stage🔨
<strong>Step 1</strong> - Design the <a href="https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape">shape of the state</a> and <a href="https://redux.js.org/basics/reducers">create reducers</a>.

<strong>Step 2</strong> - Create a <a href="https://redux.js.org/api/store">Redux store</a>. Connect logger middleware (optional) and Redux Thunk middleware (alternatively, you can use Redux Saga, etc.).

<strong>Step 3</strong> - For each view that needs access to the store, create the component and connect it to the store.

<strong>Step 4</strong> - For the component you created in the last step, create actions and action creators. Check that everything works correctly.

<strong>Step 5</strong> - Repeat Step 3 & Step 4 for each component that needs access to the store.

<strong>Step 6</strong> - Create presentational components and confirm that everything works correctly.

<strong>Step 7</strong> - Add React Router.

<strong>Step 8</strong> - Add finishing touches and make sure the project meets the specifications.
















