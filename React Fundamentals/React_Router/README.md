# React Router Intro
https://youtu.be/PV6TN8ahSX0

## Single-Page Apps
Single-page applications can work in different ways. One way a single-page app loads is by downloading the entire site's contents all at once. This way, when you're navigating around on the site, everything is already available to the browser, and it doesn't need to refresh the page. Another way single-page apps work is by downloading everything that's needed to render the page the user requested. Then when the user navigates to a new page, asynchronous JavaScript requests are made for just the content that was requested.

Another key factor in a good single-page app is that the URL controls the page content. Single-page applications are highly interactive, and users want to be able to get back to a certain state using just the URL. Why is this important? Bookmarkability! (pretty sure that's not a word...yet) When you bookmark a site, that bookmark is only a URL, it doesn't record the state of that page.

Have you noticed that any of the actions you perform in the app do not update the page's URL? We need to create React applications that offer bookmarkable pages!

## React Router
React Router turns React projects into single-page applications. It does this by providing a number of specialized components that manage the creation of links, manage the app's URL, provide transitions when navigating between different URL locations, and so much more.

According to the React Router website:

    React Router is a collection of navigational components that compose declaratively with your application.

If you're interested, feel free to check out the website at https://reacttraining.com/.

In the next section, we'll dynamically render content to the page based on a value in the project's this.state object. We'll use this basic example as an idea of how React Router works by controlling what's being seen via state. Then we'll switch over to using React Router. We'll walk you through installing React Router, adding it to the project, and hooking everything together so it can manage your links and URLs.

## Expert React Training
https://reacttraining.com

# Dynamically Render Pages
As the app currently functions, there's no way to add new contacts! That's a shame because I really need to add Richard to my list of contacts. So let's create a form that'll let us create new contacts and save them to the server.

We don't want the form to display all of the time, so we'll start out by having the form show up only if a setting is enabled. We'll store this setting in this.state. Doing it this way will give us an idea of how React Router functions.

https://youtu.be/I4wTc_ulrME

We packed quite a bit of important changes in this little video! We created the CreateContact component that'll be in charge of the form to create new contacts. In staying with the general React theme of favoring composition, we created this as a standalone component and used composition by adding it to the render() method in the App component.

In an attempt to do an extremely simple recreation of how React Router works, we added a screen property to this.state, and used this property to control what content should display on the screen. If this.state.screen is list then we'll show the list of all existing contacts. If this.state.screen is create then we'll show the CreateContact component.

## Short-circuit Evaluation Syntax
In this video and when we created the Now showing section from earlier, we used a somewhat odd looking syntax:

        {this.state.screen === 'list' && (
            <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact}
            />
        )};

and

        {this.state.screen === 'create' && (
        <CreateContact />
        )}

This can be a little confusing with both the JSX code for a component and the code to run an expression. But this is really just the logical expression &&:

expression && expression

What we're using here is a JavaScript technique called short-circuit evaluation. If the first expression evaluates to true, then the second expression is run. However, if the first expression evaluates to false, then the second expression is skipped. We're using this as a guard to first verify the value of this.state.screen before displaying the correct component.

## Short-circuit evaluation
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Short-circuit_evaluation

## Add A Button
Right now we have to manually change the state to get the app to display the different screens. We want the user to be able to control that in the app itself, so let's add a button!

https://youtu.be/AX-ZpaliAYc

## Dynamic Routing Recap
In the code we added in this section, we tried our attempt at using state to control what content displays to the user. We saw things break down, though, when we used the back button.

Now, let's switch over to using React Router to manage our app's screens.

# The BrowserRouter Component
As we've just seen, when the user presses the 'back' button in the browser, they will probably have to refresh the page to see the proper content at that location. This isn't the best experience for our user! When we update location, we can update the app as well using JavaScript. This is where React Router comes in.

https://www.npmjs.com/package/react-router-dom

## Install React Router
To use React Router in our app, we need to install react-router-dom.

npm install --save react-router-dom

https://youtu.be/qvy-_Pu9QNU

## BrowserRouter
The first component we'll look at is BrowserRouter.

https://youtu.be/bhjvF7Qt7K0

https://youtu.be/uIYOoQKwKfU


# history
https://github.com/reacttraining/history

What's nice about React Router is that everything is just a component. This makes using it nice, but it also makes diving into the code more convenient as well. Let's take a look at what exactly BrowserRouter is doing under the hood.

Here is the code straight from the React Router repository.

        class BrowserRouter extends React.Component {
            static propTypes = {
                basename: PropTypes.string,
                forceRefresh: PropTypes.bool,
                getUserConfirmation: PropTypes.func,
                keyLength: PropTypes.number,
                children: PropTypes.node
            }

            history = createHistory(this.props)

            render() {
                return <Router history={this.history} children={this.props.children} />
            }
        }

When you use BrowserRouter, what you're really doing is rendering a Router component and passing it a history prop. Wait, what is history? history comes from the history library (also built by React Training). The whole purpose of this library is it abstracts away the differences in various environments and provides a minimal API that lets you manage the history stack, navigate, confirm navigation, and persist state between sessions.

So in a nutshell, when you use BrowserRouter, you're creating a history object which will listen to changes in the URL and make sure your app is made aware of those changes.

## BrowserRouter Component Recap
In summary, for React Router to work properly, you need to wrap your whole app in a BrowserRouter component. Also, BrowserRouter wraps the history library which makes it possible for your app to be made aware of changes in the URL.

# The Link Component
https://youtu.be/EZVVkrODWw8

https://youtu.be/jrW6zIa0Qdc

As you've seen, Link is a straightforward way to provide declarative, accessible navigation around your application. By passing a to property to the Link component, you tell your app which path to route to.

        <Link to="/about">About</Link>

If you're experienced with routing on the web, you'll know that sometimes our links need to be a little more complex than just a string. For example, you can pass along query parameters or link to specific parts of a page. What if you wanted to pass state to the new route? To account for these scenarios, instead of passing a string to Links to prop, you can pass it an object like this,

        <Link to={{
            pathname: '/courses',
            search: '?sort=name',
            hash: '#the-hash',
            state: { fromDashboard: true }
            }}>
            Courses
        </Link>

You won't need to use this feature all of the time, but it's good to know it exists. You can read more information about Link in the official docs.

## Link
https://reacttraining.com/react-router/web/api/Link

## Link.js
https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/modules/Link.js

## The Route Component
https://youtu.be/ocZkC0MqGPY

https://youtu.be/Ka19h7gvKi0

## Route Component Recap
The main takeaway from this section is that with a Route component if you want to be able to pass props to a specific component that the router is going to render, you'll need to use Route’s render prop. As you saw, render puts you in charge of rendering the component which in turn allows you to pass any props to the rendered component as you'd like.

In summary, the Route component is a critical piece of building an application with React Router because it's the component which is going to decide which components are rendered based on the current URL path.

## Finishing The Contact Form
Right now, the page to create contacts is empty! Let's build out a form on that page so we start adding our own custom contacts.

The ImageInput component is a custom <input> that dynamically reads and resizes image files before submitting them to the server as data URLs. It also shows a preview of the image. We chose to give this component to you rather than build it ourselves because it contains features related to files and images on the web that aren't crucial to your education in this context. If you're curious, feel free to dive into the code, but know it's not a requirement.

https://youtu.be/p3v2dgrqJsg

## Serialize The Form Data
At this point, our form will serialize the values from user input (i.e., the name and email), adding them as a query string to the URL. We can add some additional functionality by having our app serialize these form fields on its own. After all, we want the app to ultimately handle creating the contact and saving it to the state.

To accomplish this, we'll use the form-serialize package to output this information as a regular JavaScript object for the app to use.

## form-serialize
https://www.npmjs.com/package/form-serialize

        npm install --save form-serialize

https://youtu.be/aAhaXlQ2G6I

## Update Server With New Contact
We have our contact form. We're serializing our data and passing it up to the parent component. All we need to do to have a fully functional app is to save the contact to the server.

https://youtu.be/24lu6iVQHro

## Further Learning
If you're interested in learning more about React Router, we recommend these two resources. First, Build your own React Router v4 will walk through how to implement your own mini version of React Router to better understand its implementation details. Next, is React Training's official documentation for React Router. Feel free to also check out Tyler McGinnis's React Router course as well!

## Build your own React Router v4
https://tylermcginnis.com/build-your-own-react-router-v4/

## Philosophy(Dynamic Routing)
https://reacttraining.com/react-router/web/guides/philosophy

## React Router v4
https://tylermcginnis.com/courses/react-router/

## Nested routes with React Router
https://tylermcginnis.com/react-router-nested-routes/

## The smallest React example looks like this:
https://reactjs.org/docs/hello-world.html

## The market leader in Developer Onboarding
https://tylermcginnis.com

## People to Follow

https://twitter.com/tylermcginnis

https://twitter.com/vjeux

https://twitter.com/iammerrick

https://twitter.com/peggyrayzis

https://twitter.com/left_pad

https://twitter.com/sebmarkbage

https://twitter.com/dan_abramov

## You’re Missing the Point of React
https://medium.com/@dan_abramov/youre-missing-the-point-of-react-a20e34a51e1a

## React "Aha" Moments
https://tylermcginnis.com/react-aha-moments/

## 9 things every React.js beginner should know
https://camjackson.net/post/9-things-every-reactjs-beginner-should-know

## React Elements vs React Components
https://tylermcginnis.com/react-elements-vs-react-components/






