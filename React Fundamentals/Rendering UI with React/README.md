# Rendering UI Intro
https://youtu.be/k549w2hPXpI

React uses JavaScript objects to create React elements. We'll use these React elements to describe what we want the page to look like, and React will be in charge of generating the DOM nodes to achieve the result.

Recall from the previous lesson the difference between imperative and declarative code. The React code that we write is declarative because we aren't telling React what to do; instead, we're writing React elements that describe what the page should look like, and React does all of the implementation work to get it done.

Enough theory, let's get to it and create some elements!

We'll be looking at using React's .createElement() method in the next couple of videos. For starters, here is its signature:

        React.createElement( /* type */, /* props */, /* content */ );

We'll take a deep dive into what all that entails in just a bit! We'll start things out with a project that's already set up. For now, don't worry about creating a project or coding along. There will be plenty of hands-on work for you to do soon enough! We'll start building our in-class project, Contacts App, in the next section. If you would like to code along for the next few videos, you can use this React Sandbox.

# Creating Elements and JSX

## React DOM
https://youtu.be/v7Ui5W6NqUk

We'll be looking at using React's .createElement() method in the next couple of videos. For starters, here is its signature:

        React.createElement( /* type */, /* props */, /* content */ );

We'll take a deep dive into what all that entails in just a bit! We'll start things out with a project that's already set up. For now, don't worry about creating a project or coding along. There will be plenty of hands-on work for you to do soon enough! We'll start building our in-class project, Contacts App, in the next section. If you would like to code along for the next few videos, you can use this React Sandbox.

## React DOM 2
https://youtu.be/v7Ui5W6NqUk

Rendering Elements onto the DOM
In the previous video, we used ReactDOM's render() method to render our element onto a particular area of a page. In particular, we rendered the element onto a DOM node called root. But where did this root come from?

Apps built with React typically have a single root DOM node. For example, an HTML file may contain a <div> with the following:

        <div id="root"></div>

By passing this DOM node into getElementById(), React will end up controlling the entirety of its contents. Another way to think about this is that this particular <div> will serve as a "hook" for our React app; this is the area where React will take over and render our UI!

## React DOM 3
https://youtu.be/joSbGNA_0hY

I just used React's .createElement() method to construct a "React element". The .createElement() method has the following signature:

        React.createElement( /* type */, /* props */, /* content */ ); 

Let's break down what each item can be:

        type – either a string or a React Component

        This can be a string of any existing HTML element (e.g. 'p', 'span', or 'header') or you could pass a React component (we'll be creating components with JSX, in just a moment).

        props – either null or an object

        This is an object of HTML attributes and custom data about the element.

        content – null, a string, a React Element, or a React Component

Anything that you pass here will be the content of the rendered element. This can include plain text, JavaScript code, other React elements, etc.

## React DOM 3
https://youtu.be/j_FHK4jEXJ8

## React DOM 4
https://youtu.be/B7NJ68esH9w

## .createElement() Returns One Root Element
Recall that React.createElement(); creates a single React element of a particular type. We'd normally pass in a tag such as a <div> or a <span> to represent that type, but the content argument can be another React element!

Consider the following example:

        const element = React.createElement('div', null,
                React.createElement('strong', null, 'Hello world!')
        );

Here, "Hello world!" will be wrapped in a <div> when this React element renders as HTML. While we can indeed nest React elements, remember the overall call just returns a single element.

## React DOM 5
https://youtu.be/MLd3g65K2wQ

## React DOM 6
https://youtu.be/MDfyG5SDdEo

## JSX Returns One Main Element, Too
When writing JSX, keep in mind that it must only return a single element. This element may have any number of descendants, but there must be a single root element wrapping your overall JSX (typically a <div> or a <span>). Check out the following example:

        const message = (
        <div>
        <h1>All About JSX:</h1>
        <ul>
        <li>JSX</li>
        <li>is</li>
        <li>awesome!</li>
        </ul>
        </div>
        );

See how there's only one <div> element in the code above and that all other JSX is nested inside it? This is how you have to write it if you want multiple elements. To be completely clear, the following is incorrect and will cause an error:

        const message = (
        <h1>All About JSX:</h1>
        <ul>
        <li>JSX</li>
        <li>is</li>
        <li>awesome!</li>
        </ul>
        );
        
In this example, we have two sibling elements that are both at the root level (i.e. <h1> and <ul>) . This won't work and will give the error:

        Syntax error: Adjacent JSX elements must be wrapped in an enclosing tag

Since we know that JSX is really just a syntax extension for .createElement(), this makes sense; .createElement() takes in only one tag name (as a string) as its first argument.

## Intro to Components
So far we've seen how .createElement() and JSX can help us produce some HTML. Typically, though, we'll use one of React's key features, Components, to construct our UI. Components refer to reusable pieces of code ultimately responsible for returning HTML to be rendered onto the page. More often than not, you'll see React components written with JSX.

Since React's main focus is to streamline building our app's UI, there is only one method that is absolutely required in any React component class: render().

Let's go ahead and build our first component class!

## Components
https://youtu.be/II-fxVwAjeE

## Declaring Components in React 
In the previous video, we defined the ContactList component like so:

        class ContactList extends React.Component {
                // ...
        }

In other words, we are defining a component that's really just a JavaScript class that inherits from React.Component.

In real-world use (and throughout this course), you may also see declarations like:

        class ContactList extends Component {
                // ...
        }
        
Both ways are functionally the same, but be sure your module imports match accordingly! That is, if you choose to declare components like the example directly above, your import from React will now look like:

        import React, { Component } from 'react';

## Creating Elements Recap
In the end, remember that React is only concerned with the View layer of our app. This is what the user sees and interacts with.         As such, we can use .createElement() to render HTML onto a document. More often than not, however, you'll use a syntax extension         to describe what your UI should look like. This syntax extension is known as JSX, and just looks similar to plain HTML written           right into a JavaScript file. The JSX gets transpiled to React's .createElement() method that outputs HTML to be rendered in the         browser.

A great mindset to have when building React apps is to think in components. Components represent the modularity and reusability         of React. You can think of your component classes as factories that produce instances of components. These component classes             should follow the single responsibility principle and just "do one thing". If it manages too many different tasks, it may be a           good idea to decompose your component into smaller subcomponents.

## Thinking in React
https://reactjs.org/docs/thinking-in-react.html

## Single responsibility principle
https://en.wikipedia.org/wiki/Single_responsibility_principle

## Rendering Elements
https://reactjs.org/docs/rendering-elements.html

# Create Reat App
https://youtu.be/x1fp0wLBI5w


## Before Installing create-react-app
If you already have Node.js on your machine, it's a good idea to reinstall it to make sure you have the latest version. Keep in mind that Node.js now comes with npm by default.

### MacOS
    1. Install Homebrew by running /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" in the terminal.
    2. Check that it was installed by running brew --version. You should see the version number that was installed.
    3. Run brew install node.
    4. Run node --version.
    5. Check that npm was installed as well by running npm --version.
    6. Run brew install yarn --without-node.
    7. Run npm --version.
    8. Run yarn install && yarn --version    

### Windows
    1. Please download the Node.js Installer, go through the installation process, and restart your computer once you're done.
    2. Please follow the yarn installation instructions.
    3. Run yarn --version to make sure yarn has been successfully installed. 

### Linux
    1. Please follow these instructions to install Node.js.
    2. Run sudo apt-get install -y build-essential.
    3. Please follow the yarn installation instructions.
    4. Run yarn --version to make sure yarn has been successfully installed.

### Homebrew
https://brew.sh

### NodeJS
https://nodejs.org/en/download/

### Yarn
https://yarnpkg.com/lang/en/docs/install/#windows-stable

### Linux Instructions
https://www.ostechnix.com/install-node-js-linux/

### babel
https://github.com/babel/babel

### npm
https://www.npmjs.com/get-npm

### Resolving EACCES permissions errors when installing packages globally
https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

## npm install -g create-react-app
https://youtu.be/3igA5dQ7aPA

## webpack
https://github.com/webpack/webpack

## The Yarn Package Manager
Both in the following video and in the output of create-react-app, we're told to use yarn start to start the development server. If you haven't heard about it yet, Yarn is a package manager that's similar to NPM. Yarn was created from the ground up by Facebook to improve on some key aspects that are slow or lacking in NPM.

If you don't want to install Yarn, you don't have to! What's great about it is that almost every use of yarn can be swapped with npm and everything will work just fine! So if the command is yarn start, you can use npm start to run the same command.

## Running the Build
https://youtu.be/Qpv2eBSsT1I

The observant student might've noticed that my index.js file does not include the line registerServiceWorker(); that's showing in your project. The call to the Service Worker was added in the version of Create React App right after I recorded this video. Since we're not using Service Workers in this project, it won't affect anything. If you want to remove it, though. Feel free!

## create-react-app
https://github.com/facebook/create-react-app

## Create Apps with No Configuration
https://reactjs.org/blog/2016/07/22/create-apps-with-no-configuration.html

## What's New in Create React App
https://reactjs.org/blog/2017/05/18/whats-new-in-create-react-app.html

# Composing with Components
https://youtu.be/eKqhHxSVx-w

https://youtu.be/edJunNTNX3A

## Commit
https://github.com/udacity/reactnd-contacts-app/commit/f1fbeff5533d82e33b075573fff684a99a82b845

## Favor Composition Over Inheritance
You might have heard before that it’s better to “favor composition over inheritance”. This is a principle that I believe is difficult to learn today. Many of the most popular programming languages make extensive use of inheritance, and it has carried over into popular UI frameworks like the Android and iOS SDKs.

In contrast, React uses composition to build user interfaces. Yes, we extend React.Component, but we never extend it more than once. Instead of extending base components to add more UI or behavior, we compose elements in different ways using nesting and props. You ultimately want your UI components to be independent, focused, and reusable.

So if you’ve never understood what it means to “favor composition over inheritance” you’ll definitely learn using React!




