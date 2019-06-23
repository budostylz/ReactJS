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

https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abd5601_nd019-redux-l7-views-01-dashboard/nd019-redux-l7-views-01-dashboard.jpg

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
https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abd5636_nd019-redux-l7-views-02-tweet/nd019-redux-l7-views-02-tweet.jpg

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
https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abd5660_nd019-redux-l7-views-03-new-tweet/nd019-redux-l7-views-03-new-tweet.jpg

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
https://classroom.udacity.com/nanodegrees/nd019/parts/7dab5516-d1ae-45d3-b8f8-d782b5534caf/modules/221d27be-a830-49a3-9803-9aa4a114489c/lessons/f126db7d-157a-4b30-90de-17bd8b07208b/concepts/6bc00d52-4e7a-49e5-9988-a974f627bef1#

I broke this view into the following React Components:

        App - the overall container for the project
        Navigation - displays the navigation
        Tweets List - responsible for the entire list of tweets
        Tweet - in charge of display the content for a single tweet

## Components for the Tweet View
https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abd56f5_nd019-redux-l7-components-02-tweet/nd019-redux-l7-components-02-tweet.png

I broke this view into the following React Components:

        App - the overall container for the project
        Navigation - displays the navigation
        Tweet Container - displays a list of tweets
        Tweet - displays the content for a single tweet
        New Tweet - display the form to create a new tweet (reply)

## Components for the New Tweet View
https://classroom.udacity.com/nanodegrees/nd019/parts/7dab5516-d1ae-45d3-b8f8-d782b5534caf/modules/221d27be-a830-49a3-9803-9aa4a114489c/lessons/f126db7d-157a-4b30-90de-17bd8b07208b/concepts/6bc00d52-4e7a-49e5-9988-a974f627bef1#

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
https://classroom.udacity.com/nanodegrees/nd019/parts/7dab5516-d1ae-45d3-b8f8-d782b5534caf/modules/221d27be-a830-49a3-9803-9aa4a114489c/lessons/f126db7d-157a-4b30-90de-17bd8b07208b/concepts/bb335fa7-c62b-432f-96d0-fdacf739ce1c#

For the Tweets List component, the only information that we see is that we'll have to get a list of all of the tweets. So for this component, we just need to:

<em>get</em> the <strong>tweets</strong>

So the action type for event this will probably be something like GET_LIST_OF_TWEETS or GET_DATA

## Tweet Component
https://classroom.udacity.com/nanodegrees/nd019/parts/7dab5516-d1ae-45d3-b8f8-d782b5534caf/modules/221d27be-a830-49a3-9803-9aa4a114489c/lessons/f126db7d-157a-4b30-90de-17bd8b07208b/concepts/bb335fa7-c62b-432f-96d0-fdacf739ce1c#

We <em>get</em> a particular tweet from a list of <strong>tweets</strong>.

We <em>get</em> the <strong>authedUser (user that is currently logged in)</strong> so the user can <em>toggle</em> the likes on each <strong>tweets</strong>.

We <em>get</em> the <strong>authedUser</strong> so the user can reply to a <strong>tweets</strong>.

## Tweet Container Component
https://s3.amazonaws.com/video.udacity-data.com/topher/2018/March/5abd578d_nd019-redux-l7-store-03-tweet-container/nd019-redux-l7-store-03-tweet-container.png

We <em>get</em> a specific tweet from a list of <strong>tweets</strong>.

We <em>get</em> the replies to a specific tweet from a list of <strong>tweets</strong>.

## New Tweet Component
https://classroom.udacity.com/nanodegrees/nd019/parts/7dab5516-d1ae-45d3-b8f8-d782b5534caf/modules/221d27be-a830-49a3-9803-9aa4a114489c/lessons/f126db7d-157a-4b30-90de-17bd8b07208b/concepts/bb335fa7-c62b-432f-96d0-fdacf739ce1c#

We <em>get</em> the <strong>authedUser</strong> so the user can create a new <strong>tweets</strong>.

We <em>set</em> the text of the new <strong>tweets</strong>.

