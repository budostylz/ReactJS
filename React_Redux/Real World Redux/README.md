# Real World Redux

## Intro
https://youtu.be/B_DSLj-XyPI

## Introduction to Chirper
https://youtu.be/tF5ES2V20xY

## Check out the project, here: 
https://tylermcginnis.com/projects/redux-twitter/

## Clone the starter code, here:
https://github.com/udacity/reactnd-chirper-app

## Starter Code
https://youtu.be/bZpsQZrby9Q

# Project Walkthrough
To help you solidify your understanding of React and Redux, we will do a project walkthrough. The project we'll be building is called “Chirper”. Building this simple Twitter clone will help you practice improving the predictability of an application's state; establishing strict rules for getting, listening, and updating the store; and identifying what state should live inside of Redux and what state should live inside of React components.

As with most things, there is more than one correct way to achieve a successful result. We will be discussing one approach to building a React/Redux project. We encourage you to come up with an approach that works for you. Regardless of the approach you choose, make sure always to plan out your project's architecture before starting to code.

## The Importance of Planning Your Project
Many developers make the mistake of starting to code before they've put any thought into figuring out precisely what their app's architecture should be. This approach results in spending an incredible amount of time debugging, restructuring the code, and sometimes even starting over, completely!

Trust us, planning out your project before starting to code will save you a lot of time later on.

In our Chirper project walkthrough, we'll go over the planning stages as well as the coding stages of the project.

## Planning Your React/Redux App's Architecture
In the Planning Stage, we will go over 4 steps that will help you come up with your app's architecture, which is often the trickiest part.

## A Guide for the Planning Stages of Your Project
        Identify What Each View Should Look Like
        Break Each View Into a Hierarchy of Components
        Determine What Events Happen in the App
        Determine What Data Lives in the Store

## Coding in Stages
We'll be building the project along together, breaking down each phase of the project's development. The first thing we we'll do is take a look at the different views the final project should have.

Let's dive in!

Planning Stage: Steps 1&2 - Break Down Views and Components

## Step 1 - Identify Each View
We need to determine the look and functionality of each view in your app. One of the best approaches is to draw each view of the app on paper so that you'll have a good idea of what information and data you're planning to have on each page.

Instead of paper and pencil, you can be a bit more digital and use software for creating mockups. If you were given project specifications, check your mock against them to make sure that you have all of the required features.

For this project, we'll use the screenshots of the app we'll be building instead of mocks.


## 20 EASY-TO-USE MOCKUP TOOLS TO DESIGN YOUR NEXT APP
https://codingsans.com/blog/mockup-tools

## View for the Dashboard Page
Let's start by looking at the Dashboard View.

![Dashboard View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/dashboardView.png "Dashboard View")

## Dashboard View Requirements
        is located at the home route (/)
        shows tweets sorted from most recently added at the top, to oldest at the bottom
        each tweet will show:
            the author
            the time stamp
            who the author is replying to
            the text of the tweet
            a reply button - with the number of replies (if higher than 0)
            a like button - with the number of likes (if higher than 0)

## View for the Tweet Page
![Tweet View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/tweet_page.png "Tweet View")

## Tweet Page View Requirements
        is located at /tweet/:id
        shows an individual tweet
            the author
            the time stamp
            a reply button - with the number of replies (if higher than 0)
            a like button - with the number of likes (if higher than 0)
        has a reply form
        shows all replies

## View for Creating a New Tweet
![New Tweet View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/create_new_tweet.png "New Tweet View")

## The New Tweet View Requirements
        is located at /new
        has a textbox for adding a new tweet

## View Recap
So these are the 3 views we need in our app:

        Dashboard
        Tweet
        New Tweet

We now have a clear idea of what we're trying to build and can be confident that our views meet all of the provided requirements.

Now, let's move on to Step 2, where we'll make a conceptual skeleton of our app.

## Step 2: Break Each View Into a Hierarchy of Components
https://reactjs.org/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy

In this step, we'll do 2 things:

        draw boxes around every component
        arrange our components into a hierarchy

Let's get started by drawing boxes around all of the components and giving them all names. Remember that we have three views:

        Dashboard
        Tweet
        New Tweet
Let's start with the Dashboard view.

## Components for the Dashboard View
![Components for the Dashboard View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/components_for_dashboard_view.png "Components for the Dashboard View")

I broke this view into the following React Components:

        App - the overall container for the project
        Navigation - displays the navigation
        Tweets List - responsible for the entire list of tweets
        Tweet - in charge of display the content for a single tweet

## Components for the Tweet View
![Components for the Tweet View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/components_for_tweet_view.png "Components for the Tweet View")

I broke this view into the following React Components:

        App - the overall container for the project
        Navigation - displays the navigation
        Tweet Container - displays a list of tweets
        Tweet - displays the content for a single tweet
        New Tweet - display the form to create a new tweet (reply)

## Components for the New Tweet View
![Components for the New Tweet View](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/components_for_new_tweet_view.png "Components for the New Tweet View")

I broke this view into the following React Components:

        App - the overall container for the project
        Navigation - displays the navigation
        New Tweet - display the form to create a new tweet

All Components
So from the way I broke things down, the application will have the following components:

        App
        Navigation
        Tweets List
        Tweet Container
        Tweet
        New Tweet

This component hierarchy tells us which components will be used inside of other components. It gives us the skeleton of our app. All of these are presentational components. Right now, we don't care which components will be upgraded to containers. As we start building out the store, we'll create additional components that will be container components to get data from the store and pass it to the presentational components that need the data.

Thus far, we haven't done anything that's special to Redux; all of the steps above are applicable and useful for React applications that do not use Redux.

Remember that Redux doesn't care about how our app looks or what components it uses. Instead, it gives a way to manage the state of the application in a predictable way. When we talk about state, we're really talking about data - not just any kind of data inside the app, but data that can change based on the events in the app.

Let's move on to Step 3, where we'll start thinking about the data in this app.

# Planning Statge: Step 3 - Determine Events in the App

## Determine What Events Happen in the App
We need to take a look at what is happening in each component. Let's determine what actions the app or the user is performing on the data. Is the data being set, modified, or deleted?...then we'll need an action to keep track of that event!

Let's italicize the action and bold the data.

## Tweets List Component
![Tweets List Component](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/tweet_list_component.png "Tweets List Component")

For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:

<em>get</em> the <strong>tweets</strong>

So the action type for event this will probably be something like GET_LIST_OF_TWEETS or GET_DATA

## Tweet Component
![Tweet Component](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/tweet_component.png "Tweet Component")

We <em>get</em> a particular tweet from a list of <strong>tweets</strong>.

We <em>get</em> the <strong>authedUser (user that is currently logged in)</strong> so the user can <em>toggle</em> the likes on each <strong>tweets</strong>.

We <em>get</em> the <strong>authedUser</strong> so the user can reply to a <strong>tweets</strong>.

## Tweet Container Component
![Tweet Container Component](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/tweet_container_component.png "Tweet Container Component")

We <em>get</em> a specific tweet from a list of <strong>tweets</strong>.

We <em>get</em> the replies to a specific tweet from a list of <strong>tweets</strong>.

## New Tweet Component
![New Tweet Component](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/new_tweet_component.png "New Tweet Component")

We <em>get</em> the <strong>authedUser</strong> so the user can create a new <strong>tweets</strong>.

We <em>set</em> the text of the new <strong>tweets</strong>.

# Planning Stage: Step 4 - Data and the Store

## Determine What Data Lives in the Store
Remember that the main problems that Redux (and the react-redux bindings!) was meant to solve were:

        Propagation of props through the entire component tree.
        Ensuring consistency and predictability of the state across the app.

According to Dan Abramov, the creator of Redux, we should follow the following principle for determining whether to store a piece of data in the store or in a React component:

<em>"Use Redux for state that matters globally or is mutated in complex ways… The rule of thumb is: do whatever is less awkward."</em>

Take a look at <a href="https://redux.js.org/faq/organizing-state" target="_blank">Organizing State</a> and <a href="https://github.com/reduxjs/redux/issues/1287" target="_blank">How to choose between Redux's store and React's state?</a> for further information about this.

For each piece of data from Step 3, let's see whether it's used by multiple components or mutated in a complex way.

<em>Text of the new tweet Used by:</em> New Tweet Component

This piece of data is not used by multiple components and is not mutated in a complex way. That means that it's a great candidate for component state instead of app state that resides in the store.

<em>Tweets Used by:</em> Dashboard Component, Tweet Page Component, Tweet Component

In the Tweet Page Component, we need to show the reply tweets. Let's take a look at our starter code in the _Data.js file. This is how the tweets are stored in the database:

        let tweets = {
            tweetId: {
                id: tweetId,
                text: tweetText,
                author: userId,
                timestamp: timestamp,
                likes: [userId1, userId2],
                replies: [tweetId1, tweetId2],
                replyingTo: tweetId_OR_null
            }
        };

To get the reply tweets, we can get the tweet with a specific id from the list of all of the tweets and access its replies property.

In the Dashboard Component, we need to access the current list of tweets. If the Dashboard Component knows the ID of the tweet that needs to be displayed, it can just pass that ID to the Tweet Component, which will render the tweet.

In the Tweet Component, we need to pick out a tweet with a specific id from the current list of tweets.

That means that we can store the tweets in the store and make the Tweet Page Component, the Dashboard Component, and the Tweet Component into containers (components that have access to the store via the connect function).

As soon as that data changes — if someone likes the tweet, for example — all of the components that use that data will update.

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store1.png "The Store")

Keep in mind that each tweet contains the author's name and the author's avatar. One way we could model our state is:

        tweets: {
        tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo},
        tweetId: {tweetId, authorId, authorName, authorAvatar, timestamp, text, likes, replies, replyingTo}
        }

Modeling the state this way is not wrong, but it's inconvenient if we want to extend the functionality of our application in the future to be able to find tweets made by a particular author.

Moreover, this way of storing the data mixes the two types of objects:

        tweets data
        user data

This goes against the recommendation to normalize our state. According to the <a href="https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape">Redux documentation</a>, here are the principles of state normalization:

        Each type of data gets its own "table" in the state.
        Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
        Any references to individual items should be done by storing the item's ID.
        Arrays of IDs should be used to indicate ordering.

In our application, normalized state would look like this:

        {
            tweets: {
                tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo},
                tweetId: { tweetId, authorId, timestamp, text, likes, replies, replyingTo}
            },
            users: {
                userId: {userId, userName, avatar, tweetsArray},
                userId: {userId, userName, avatar, tweetsArray}
            }
        }

Our store at this point:

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store2.png "The Store")

Let's continue going through our data.

authedUser Used by: Tweet Component, New Tweet Component

Each Tweet Component needs to show whether the logged in used has liked a tweet. In order to do that, we need to know who the logged in user is. From looking at our Component Hierarchy from Step 2, we know that the Tweet Component gets used by multiple components. Therefore, we need to upgrade this component to a container so it could access the authedUser piece of data from the store to see whether to show a red heart.

We also know that for every new tweet, we'll have to record who the tweet's author (authedUser) is. The React way of storing state is to put the state in the most parent component and then pass it down to all the children that need it. In this app, that would mean storing in the App Component.

One way to do that is to store the authedUser in the App Component and then pass it down to the components that need access to it. While this works, it's inconvenient. It would be much simpler to just store the autheredUser in the store and then provide the Tweet Component access to the store. The New Tweet Component could then just dispatch an action with the text of the new tweet and the id of the tweet we're replying to as parameters in order to save the new tweet.

Saving a tweet is an asynchronous operation and we could use redux thunks to do that. Thunks give us access to the store, so we could have the following action creator:

        function handleAddTweet(text, replyingTo) {
            return (dispatch, getState) => {
                const { authedUser } = getState();

                return saveTweetToDatabase({
                text,
                author: authedUser,
                replyingTo
                }).then(tweet => dispatch(addTweet(tweet)));
            };
        }

Generally, accessing the store from an action creator is <a href="https://stackoverflow.com/questions/35667249/accessing-redux-state-in-an-action-creator/35674575#35674575" target="_blank"> considered an anti-pattern</a>. Dan Abramov says that the few use cases where it's acceptable to do that are:

to check cached data before you make a request or to check whether you are authenticated (in other words, doing a conditional dispatch).

Another reason we would want to keep the authedUser piece of data in the store is that if we extend our application to include the ability to sign in and sign out, this functionality would be easy to manage with Redux.

The New Tweet Component doesn't need to access the authedUser piece of state, but it does need to be able to dispatch an action to let the reducers know that a new tweet has been made. In order to have access to the dispatch method, a component must be connected to the store. In other words, it must be a container. So, we know that both the Tweet Component and the New Tweet Component will be upgraded to containers.

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store2.png "The Store")

We are done making our store! While we were making our store, we also determined which components will be upgraded to containers, so our skeleton app is now even more complete.

We are now at a good point to start coding. We will go view by view and fill in the details of our skeleton along the way.

# Actions

Let's start from the Dashboard View. Our Dashboard View displays a list of tweets and a menu.

We need to take a look at what is happening in this view. Let's determine what actions the app or the user is performing on the data - is the data being set, modified, or deleted?

Remember that in Step 4 of the Planning Stage, we determined that our store will look like this:

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store2.png "The Store")

When the app loads, the Dashboard View is displayed. The Dashboard Component therefore needs to:

        get the tweets
        get the users
        get the authedUser

This data is stored in a database. For this view to load all of the tweets (including their author's avatars), we need to 1) get the tweets and users data from the database; and then 2) to pass that data into the component.

## Moving API requests in React to Redux-Saga’s
https://hackernoon.com/moving-api-requests-to-redux-saga-21780f49cbc8

## redux-axios-middleware
https://github.com/svrcekmichal/redux-axios-middleware

## What is the right way to do asynchronous operations in Redux?
https://decembersoft.com/posts/what-is-the-right-way-to-do-asynchronous-operations-in-redux/

Remember how normal Action Creators return actions - simple Javascript objects that then go to all of our reducers? Making an API request is an asynchronous action, so we cannot just send a plain Javascript object to our reducers. Redux middleware can gain access to an action when it's on its way to the reducers. We'll be using the redux-thunk middleware in this example.

If the Redux Thunk middleware is enabled (which is done via the applyMiddleware() function), then any time your action creator returns a function instead of a Javascript object, it will go to the redux-thunk middleware.

Dan Abramov <a href="https://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559"> describes
</a> what happens next:

<em>"The middleware will call that function with dispatch method itself as the first argument...The action will only reach the reducers once the API request is completed. It will also “swallow” such actions so don't worry about your reducers receiving weird function arguments. Your reducers will only receive plain object actions—either emitted directly, or emitted by the functions as we just described."</em>

Here's what a thunk action creator looks like:

        function handleInitialData () { 
            return function (dispatch) {}
        }
Which is equivalent to this in ES6:

        function handleInitialData () {
            return (dispatch) => {}
        }

Now, we need to give our components access to the data that came in. In other words, we need to populate the store with tweets and users.

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store3.png "The Store")

The tweets slice of the state in the store will be modified by actions that go through the tweets reducer. The users slice of the state in the store will be modified by actions that go through the users reducer. And, similarly, the authedUser portion of the state in the store will be modified by actions that go through the authedUser reducer.


## First Actions
https://youtu.be/Px3vpZBHhHI

## Authorized User Action
https://youtu.be/-cqWNcFKB5E

<a href="https://github.com/udacity/reactnd-chirper-app/commit/acc11b20446b9e19dc861ab9ec46d9de57aa6ea8" target="__blank">Here's the commit with the changes made in the previous videos.</a>


# Reducers & Middleware

## Reducers
A <a href="https://redux.js.org/basics/reducers">Reducer</a> describes how an application's state changes. You’ll often see the <a href="https://redux.js.org/recipes/using-object-spread-operator">Object Spread Operator</a> (...) used inside of a reducer because a reducer must return a new object instead of mutating the old state. If you need a refresher on the spread operator, check out this ES6 lesson.

If you want to know why Redux requires immutability, check out the <a href="https://redux.js.org/faq/immutable-data#why-is-immutability-required">Immutable Data Section of the docs</a>:.

Reducers have the following signature:

        (previousState, action) => newState

In our app, the tweets reducer will determine how the tweets part of the state changes. The users reducer will determine how the users part of the state changes, and so forth:

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store3.png "The Store")

## Initializing State
There are 2 ways to initialize the state inside the store:

You can pass the initial state (or a part of the initial state) as preloadedState to the createStore function.
For example:

        const store = createStore (
            rootReducer,
            { tweets: {} }
        );

        You can include a default state parameter as the first argument inside a particular reducer function.
        For example:

        function tweets (state = {}, action) {
        }

To see how these approaches interact, check out the <a href="https://redux.js.org/recipes/structuring-reducers/initializing-state">Initializing State section of the documentation</a>.

## Reducers
https://youtu.be/QnntUz8r9lo

In our app, we initialized each slice of the store by setting a default state value as the first parameter inside each reducer function.

At this point, our store looks like this:

![The Store](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/store4.png "The Store")

The tweets slice of the state in the store has been initialized to an empty object. The users slice of the state in the store has been initialized to an empty object. And, the authedUser slice of the state in the store has been initialized to null.

So, we have a tweets to manage the tweets slice of the state, a users reducer to manage the users slice of the state, and an authedUser reducer to manage the authedUser portion of the state. Each of these reducers will manage just its own part of the state.

We will combine all of these reducers into one main, root reducer, which will combine the results of calling the tweets reducer, users reducer, and authedUser reducer into a single state object. Remember, we need to do this because the createStore function only accepts a single reducer.

        combineReducers({
            authedUser: authedUser,
            tweets: tweets,
            users: users
        });

Or using ES6's <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer">property shorthand</a>, it can just be:

        combineReducers({
            authedUser,
            tweets,
            users
        });

Now that all of our reducers are set up, we need to actually create the store and provide it to our application. To actually use any of the code that we've written up to this point, we need to install the redux package. Then, to provide the store to our application, we'll also need to install the react-redux package.

So install these packages and then restart your terminal:

        yarn add react-redux redux

## Creating The Store
https://youtu.be/Ac3-sWH49XY

<a href="https://github.com/udacity/reactnd-chirper-app/commit/99605e45670d8beabb571c77a8943d7c64f9be75">Here's the commit with the changes made in the previous videos.</a>

## Middleware
Our last bit of setup involves setting up the app's Middleware functions. Just like in the previous Todos application, we're going to create a logger middleware that will help us view the actions and state of the store as we interact with our application. Also, since the handleInitialData() action creator in src/actions/shared.js returns a function, we'll need to install the react-thunk package:

        yarn add redux-thunk

In the next video, we’ll hook up our redux-thunk middleware, so our thunk action creators actually work. We’ll also put in logger middleware to make debugging easier. Do you remember how to build custom middleware?

All middleware follows this currying pattern:

        const logger = (store) => (next) => (action) => {
            // ...
        }

Use the <a href="https://babeljs.io/repl/" target="_blank">Babel Repl</a> if you want to see this code in ES5.

The variable logger is assigned to a function that takes the store as its argument. That function returns another function, which is passed next (which is the next middleware in line or the dispatch function). That other function return another function which is passed an action. Once inside that third function, we have access to store, next, and action.

It’s important to note that the value of the next parameter will be determined by the applyMiddleware function. Why? All middleware will be called in the order it is listed in that function. In our case, the next will be dispatch because logger is the last middleware listed in that function.

## Project Middleware
https://youtu.be/HXYqXy4uflw

<a href="https://github.com/udacity/reactnd-chirper-app/commit/6176c497a95b10c101a0d9104a160d44645b40f2"> Here's the commit with the changes made in this video. </a>

Here’s our middleware wiring:

        export default applyMiddleware(
            thunk,
            logger
        );
Each thing returned by an action creator - be it an action or a function - will go through our thunk middleware. This is the source code for the thunk middleware:

        function createThunkMiddleware(extraArgument) {
        return ({ dispatch, getState }) => next => action => {
            if (typeof action === 'function') {
            return action(dispatch, getState, extraArgument);
            }
            return next(action);
        };
        }

        const thunk = createThunkMiddleware();
        thunk.withExtraArgument = createThunkMiddleware;

        export default thunk;

If the thunk middleware sees an action, that action will be sent to the next middleware in line - the logger middleware. If it sees a function, the thunk middleware will call that function. That function can contain side effects - such as API calls - and dispatch actions, simple Javascript objects. These dispatched actions will again go to all of the middleware. The thunk middleware will see that it’s a simple action and pass the action on to the next middleware, the logger.

Once inside the logger:

        const logger = store => next => action => {
            console.group(action.type); 
            console.log("The action:", action);
            const returnValue = next(action);
            console.log("The new state:", store.getState());
            console.groupEnd();
            return returnValue;
        };

# Initializing the App's Data

We have previously determined that we need to get the users and tweets data from our database and send that data to our store, along with the authedUser data, when the home page loads.

We have also created a thunk action creator that gets the data from the database and then dispatches actions to the store to set the three pieces of state we have in our store:

        users
        tweets
        authedUser

Here's what the handleInitialData() thunk action creator looks like:

        function handleInitialData () {
            return (dispatch) => {
                return getInitialData()
                .then(({ users, tweets }) => {
                    dispatch(receiveUsers(users));
                    dispatch(receiveTweets(tweets));
                    dispatch(setAuthedUser(AUTHED_ID));
                });
            };
        }

Now, the question is where do we dispatch this action creator?

When we walked through the architecture of our app, we saw that the App Component will contain every other component. If we load the initial data (by dispatching the handleInitialData() action creator) from the App component, then no matter which route our users goes to, they’ll see all of the correct data.

## Initial Data
https://youtu.be/ydXVJmVqebQ

<a href="https://github.com/udacity/reactnd-chirper-app/commit/a81f80deee8ba2692f805ba445b761aeb7357398"> Here's the commit with the changes made in this video. </a>

Using the connect() function upgrades a component to a container. Containers can read state from the store and dispatch actions. Read more about our ability to customize our container’s relationship with the store in the react-redux <a href="https://github.com/reduxjs/react-redux/tree/master/docs">API documentation</a>. Make sure to go through the excellent examples that are provided in the linked documentation to gain a deeper understanding of Redux.

# Dashboard Component

In Step 4 of the Planning Stage, we determined that our store should look like this:

In our application, normalized state would look like this:

        {
            tweets: {
                tweetId: { tweet id, author’s id, timestamp, text, likes, replies, replyingTo},
                tweetId: { tweet id, author’s id, timestamp, text, likes, replies, replyingTo}
            },
            users: {
                userId: {user’s id, user’s name, avatar, tweets array},
                userId: {user’s id, user’s name, avatar, tweets array}
            }
        }

In the Planning Stage, we also determined that the Dashboard Component will be a container since it will need access to the tweets part of the store in order to display the list of tweets.

To make a container, we need to make use the connect() function. Remember that the signature of the connect function looks like this:

        connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])

Take a look at the <a href="https://github.com/reduxjs/react-redux/tree/master/docs">react-redux documentation</a> if you need a refresher.

These details about mapStateToProps and mapDispatchToProps are crucial:

<em>mapStateToProps - If this argument is specified, the new component will subscribe to Redux store updates. This means that any time the store is updated, mapStateToProps will be called. The results of mapStateToProps must be a plain object, which will be merged into the component’s props. If you don't want to subscribe to store updates, pass null or undefined in place of mapStateToProps.</em>

<em>mapDispatchToProps - If an object is passed, each function inside it is assumed to be a Redux action creator. An object with the same function names, but with every action creator wrapped into a dispatch call so they may be invoked directly, will be merged into the component’s props. If a function is passed, it will be given dispatch as the first parameter. It’s up to you to return an object that somehow uses dispatch to bind action creators in your own way. (Tip: you may use the <a href="https://redux.js.org/api/bindactioncreators">bindActionCreators()</a> helper from Redux.)</em>

Do you remember the Component Hierarchy we made in Step 2 of the Planning Stage? We said that the Tweet Component will be inside of the Dashboard Component. If the Dashboard Component knows the ID of the tweet that needs to be displayed, it can just pass that ID to the Tweet Component, which will render the tweet.

Remember that the signature of the mapStateToProps function is:

        mapStateToProps(state, [ownProps])

        state is the state inside the store
        ownProps are the properties that have been passed to this component from a parent component

Since we only care about the tweets part of the store, we can use destructuring to pass the tweets part of the state in the store as the parameter to the mapStateToProps() function.

![mapStateToProps()](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/mapstatetoprops.png "mapStateToProps()")

So this is what the Dashboard Component's mapStateToProps() function looks like:

        function mapStateToProps( {tweets} ){
            return { tweetIds: Object.keys(tweets) };
        }

The important things to note are that:

        tweets is the slice of the state that this component cares about
        tweetIds will show up as a property on this container

## Dashboard
https://youtu.be/xjqf3vm3KjY

<a href="https://github.com/udacity/reactnd-chirper-app/commit/baadd738d83c0b0905577192df8794d5460c2ba4">Here's the commit with the changes made in this video.</a>

# Tweet Component
In Step 4 of the Planning Stage, we saw that this component will need access to the following data:

    users
    tweets
    authedUser

Let's connect this component to the store!

## Tweet State
https://youtu.be/Q6sAKQaQTJ8

Notice how we're passing an id prop along to the Tweet component:

        <Tweet id={id} />

Because we're doing this, the mapStateToProps function's second argument (ownProps) will be an object that has an id property with this value.

![mapStateToProps()](https://github.com/budostylz/ReactJS/blob/master/React_Redux/Real%20World%20Redux/mapstatetoprops2.png "mapStateToProps()")

So as of right now, this is what the mapStateToProps function looks like:

    function mapStateToProps ({authedUser, users, tweets}, { id }) {
        const tweet = tweets[id];

        return {
            authedUser,
            tweet: formatTweet(tweet, users[tweet.author], authedUser)
        };
    }

The important thing to notice here is that mapStateToProps accepts two arguments:

        the state of the store
        the props passed to the Tweet component

We're destructuring both arguments. From the store, we're extracting:

        the authedUser data
        the users data
        the tweets data

Then we're getting the id from the props passed to the Tweets Component. We need both of these pieces of data (coming from the store's state and coming from the component) so that we can determine which Tweet should be displayed by Tweet Component.

## Handling A Parent Tweet
https://youtu.be/fNHUigCJpkY

        function mapStateToProps ({authedUser, users, tweets}, { id }) {
            const tweet = tweets[id];
            const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

            return {
                authedUser,
                tweet: tweet
                ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet)
                : null
            };
        }

Now that we're getting all of the data we need from the store, we can actually build the UI for the Tweet Component.

## Tweet UI
https://youtu.be/es890SLMDqM

<a href="https://github.com/udacity/reactnd-chirper-app/commit/6db39add5b99c8e4996896ff3454c0239de4d5cc">Here's the commit with the changes made in this video.</a>

## Loading
https://youtu.be/FvmgIlJPjQ8

<a href="https://github.com/udacity/reactnd-chirper-app/commit/1fdbaaa20d45fbb94dc461405f756f17815f20fd">Here's the commit with the changes made in this video.</a>

* Further Research

<a href="https://itnext.io/the-perils-of-using-a-common-redux-anti-pattern-344d778e59da">The Perils of Using a Common Redux Anti-Patterns</a>












