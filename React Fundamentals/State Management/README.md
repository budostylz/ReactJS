[State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)

# Pass Data Into Components with Props
https://youtu.be/XBLRVoSqzVs

https://youtu.be/DIaUp9kzG_0

## Contacts Project (Front End)
https://github.com/udacity/reactnd-contacts-app

## Contacts Project (Back End)
https://github.com/udacity/reactnd-contacts-server2

## The Backend Server
The Contacts app project that we're building is a front-end project. However, we'll eventually be storing the contacts on a backend server. Since we're only really focusing on the front-end for this course, we've gone ahead and built this server for you so you can focus on just the React parts of this program.

The server is just a simple Node/Express app. The repo for the project is at https://github.com/udacity/reactnd-contacts-server2. All you need to do is:

    clone the project with git clone https://github.com/udacity/reactnd-contacts-server2.git
    install the project dependencies with npm install
    start the server with node server.js

Once you've started the server, you can forget about it. The Contacts project we're working on will interact with this server, but we won't ever modify any of the server code.

 ## Running Two Servers

 At this point, you should be running two different servers on your local machine:

    Front-end development server: Accessible on port 3000 (with npm start or yarn start)
    Back-end server: Accessible on port 5001 (with node server.js)

Please be sure that both are running before moving on in this Lesson.

## Functions
https://youtu.be/KJfpF08R6bw

You'll be needing this contacts array in the following video:

        const contacts = [
        {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
        }
        ];

This contacts array is just temporary. Eventually, we'll be retrieving and storing contacts on our backend server. As of right now, though, we don't know how or where to make network requests. We'll get to this soon, so just stick with this static list of contacts for now.

## Apps Are Running?
To follow along, make sure that both your Contacts app and the backend server are running.

https://youtu.be/jf1CJcJRjYU

https://youtu.be/mGe81Nl3zWU

https://youtu.be/knLnMTgn6a8

## Components and Props
https://reactjs.org/docs/components-and-props.html

# Functional COmponents
https://youtu.be/ySW7t8X5jyQ

## Template Literals
In the following video, you'll see us using back-ticks (` `) in the "style" attribute's value. Recall that these template literals allow for embedded expressions. Using template literals, you can interpolate expressions as normal strings through your app.

For further reading, feel free to check out ES6 - JavaScript Improved to explore the latest features and improvements to the language.

https://youtu.be/b05Cd0nkmfE

## Template literals (Template strings)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

## ES6 - JavaScript Improved
https://www.udacity.com/course/es6-javascript-improved--ud356

## Class Components vs. Stateless Functional Components

Class Component

        class User extends React.Component {
                render()(
                        return{
                                <p>Username: {this.props.username} </p>
                        }
                )
        }

Stateless Functional Component

        function User(props){
                return (
                        <p> Username: {props.username} </p>
                )
        }
## Functional Components vs. Stateless Functional Components vs. Stateless Components
https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/

# Add State to A Component

## State
Earlier in this Lesson, we learned that props refer to attributes from parent components. In the end, props represent "read-only" data that are immutable.

A component's state, on the other hand, represents mutable data that ultimately affects what is rendered on the page. State is managed internally by the component itself and is meant to change over time, commonly due to user input (e.g., clicking on a button on the page).

In this section, we'll see how we can encapsulate the complexity of state management to individual components.

https://youtu.be/_gQp4z4mCEQ

## Class Fields
In the code above, we put the state object directly inside the class...not in a constructor() method!

        class User extends React.Component {
                state = {
                username: 'Tyler'
                } 
        }
...rather than:

        class User extends React.Component {
                constructor(props) {
                super(props);
                this.state = {
                username: 'Tyler'
                };
        }
}

This is slightly different from Facebook's Setting the Initial State docs.

Having state outside the constructor() means it is a class field, which is a proposal for a new change to the language. It currently isn't supported by JavaScript, but thanks to Babel's fantastic powers of transpiling, we can use it!

## Setting the Initial State
https://reactjs.org/docs/react-without-es6.html#setting-the-initial-state

## class field
https://github.com/tc39/proposal-class-fields

## Managing State
https://youtu.be/yN_8MWv1g1o

## Props in Initial State
When defining a component's initial state, avoid initializing that state with props. This is an error-prone anti-pattern, since state will only be initialized with props when the component is first created.

        this.state = {
          user: props.user
        }
In the above example, if props are ever updated, the current state will not change unless the component is "refreshed." Using props to produce a component's initial state also leads to duplication of data, deviating from a dependable "source of truth."

## State Recap
By having a component manage its own state, any time there are changes made to that state, React will know and automatically make the necessary updates to the page.

This is one of the key benefits of using React to build UI components: when it comes to re-rendering the page, we just have to think about updating state. We don't have to keep track of exactly which parts of the page change each time there are updates. We don't need to decide how we will efficiently re-render the page. React compares the previous output and new output, determines what has changed, and makes these decisions for us. This process of determining what has changed in the previous and new outputs is called Reconciliation.

## Identify Where Your State Should Live
https://reactjs.org/docs/thinking-in-react.html#step-4-identify-where-your-state-should-live

# Update state with setState
https://youtu.be/81CCwyeiaWE

https://youtu.be/qLa4LEvrYn4

## setState() Recap
While a component can set its state when it initializes, we expect that state to change over time, usually due to user input. The component is able to change its own internal state using this.setState(). Each time state is changed, React knows and will call render() to re-render the component. This allows for fast, efficient updates to your app's UI.

## Using State Correctly
https://reactjs.org/docs/state-and-lifecycle.html

# PropTypes

Type checking a Component's Props with PropTypes
As we implement additional features into our app, we may soon find ourselves debugging our components more frequently. For example, what if the props that we pass to our components end up being an unintended data type (e.g. an object instead of an array)? PropTypes is a package that lets us define the data type we want to see right from the get-go and warn us during development if the prop that's passed to the component doesn't match what is expected.

To use PropTypes in our app, we need to install prop-types:

## Typechecking With PropTypes
https://reactjs.org/docs/typechecking-with-proptypes.html

## prop-types
https://www.npmjs.com/package/prop-types

        npm install --save prop-types

Alternatively, if you have been using yarn to manage packages, feel free to use it as well to install:
        yarn add prop-types

## Let's jump right in and see how it's used!
https://youtu.be/9ngd5sfC4rw

## PropTypes Recap
All in all, PropTypes is a great way to validate intended data types in our React app. Type checking our data with PropTypes helps us identify these bugs during development to ensure a smooth experience for our app's users.

# Controlled Components
https://youtu.be/d4TOSRgm7GU

## React Developer Tools
While building React apps, it may be tricky at times to see exactly is going on in your components. After all, with so many props being passed and accessed, numerous nested components, and all the JSX yet to be rendered as HTML, it can be tough to put things into perspective!

React Developer Tools allows you to inspect your component hierarchy along with their respective props and states. Once you install the Chrome extension, open the Chrome console and check out the React tab. For a detailed overview, feel free to check out the official documentation.

Let's see it in action below!

## Chrome Extension
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US

## official documentation
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en-US

https://youtu.be/0MZhfjHAT-U

Note that the value attribute is set on the <input> element. Since the displayed value will always be the value in the component's state, we can treat state, then, as the "single source of truth" for the form's state.

To recap how user input affects the ListContacts component's own state:

The user enters text into the input field.
The onChange event listener invokes the updateQuery() function.
updateQuery() then calls setState(), merging in the new state to update the component's internal state.

Because its state has changed, the ListContacts component re-renders.
Let's see how we can leverage this updated state to filter our contacts. To help us with our filtering we'll need the following packages:

## escape-string-regexp
https://www.npmjs.com/package/escape-string-regexp

## sort-by
https://www.npmjs.com/package/sort-by

        npm install --save escape-string-regexp sort-by

https://youtu.be/-sgnik4W7vY

## Showing The Displayed Contacts Count

We're almost done working with the controlled component! Our last step is to make our app display the count of how many contacts are being displayed out of the overall total.

https://youtu.be/GbGpEAG-6-w

## Controlled Components
https://reactjs.org/docs/forms.html#controlled-components


## Controlled Components Recap
Controlled components refer to components that render a form, but the "source of truth" for that form state lives inside of the component state rather than inside of the DOM. The benefits of Controlled Components are:

        instant input validation
        conditionally disable/enable buttons
        enforce input formats

In our ListContacts component, not only does the component render a form, but it also controls what happens in that form based on user input. In this case, event handlers update the component's state with the user's search query. And as we've learned: any changes to React state will cause a re-render on the page, effectively displaying our live search results.

## Avoiding React setState() Pitfalls
https://www.duncanleung.com/blog/2017-07-15-avoiding-react-setstate-pitfalls/

## How to NOT React: Common Anti-Patterns and Gotchas in React
https://www.duncanleung.com/blog/2017-07-15-avoiding-react-setstate-pitfalls/

## Forms
https://reactjs.org/docs/forms.html

## State
[Avoiding React setState() Pitfalls](https://duncanleung.com/avoiding-react-setstate-pitfalls/)

[How to NOT React: Common Anti-Patterns and Gotchas in React](https://codeburst.io/how-to-not-react-common-anti-patterns-and-gotchas-in-react-40141fe0dcd?gi=6f64da292ef0)

[How to update nested state properties in React](https://stackoverflow.com/questions/43040721/how-to-update-nested-state-properties-in-react)
