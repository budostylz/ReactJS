[React Lifecycle](https://www.w3schools.com/react/react_lifecycle.asp)

# Lifecycle Events
https://youtu.be/mKcaVQEv38Q

## render() Is For Rendering, Only!
I just mentioned this in the video, but I want to stress it again - data should not be fetched in the render method! A component's render() method should only be used to render that component; it should not make any HTTP requests, fetch data that's used to display the content, or alter the DOM. The render() method also shouldn't call any other functions that do any of these things, either.

So if render() is only used for displaying content, we put the code that should handle things like Ajax requests in what React calls lifecycle events.

## Lifecycle Events
Lifecycle events are specially named methods in a component. These methods are automatically bound to the component instance, and React will call these methods naturally at certain times during the life of a component. There are a number of different lifecycle events, but here are the most commonly used ones.

componentDidMount()

    invoked immediately after the component is inserted into the DOM

componentWillUnmount()

    invoked immediately before a component is removed from the DOM

getDerivedStateFromProps()

    invoked after a component is instantiated as well as when it receives brand new props

To use one of these, you'd just create a method in your component with the name and React will call it. It's an easy way to hook into different parts of the lifecycle of React components.

The lifecycle event that we'll be looking at (and will be using a lot in our app!) is the componentDidMount() lifecycle event.

You'll sometimes see shouldComponentUpdate() in React apps as well. It returns true by default. This means that whenever a component's state (or its parent's state) is updated, the component re-renders.

The React documentation provides the following guidance for using this lifecycle event:

        The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.

        Do not rely on it to “prevent” a rendering, as this can lead to bugs.
        Consider using the built-in PureComponent instead of writing shouldComponentUpdate() by hand.

        We do not recommend doing deep equality checks or using JSON.stringify() in shouldComponentUpdate(). It is very inefficient and will harm performance.

## shouldComponentUpdate()
https://reactjs.org/docs/react-component.html#shouldcomponentupdate

## componentDidMount Lifecycle Event
https://youtu.be/vS81IukLbvg

## How componentDidMount() Works
If you remember from the previous section, componentDidMount() is the lifecycle hook that is run right after the component is added to the DOM and should be used if you're fetching remote data or doing an Ajax request. Here's what the React docs have to say about it:

    componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.

Let's take a look at an example User component:

        import React, { Component } from 'react';
        import fetchUser from '../utils/UserAPI';

        class User extends Component {
        constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: ''
        };
        }

        componentDidMount() {
        fetchUser().then((user) => this.setState({
            name: user.name,
            age: user.age
        }));
        }

        render() {
        return (
            <div>
            <p>Name: {this.state.name}</p>
            <p>Age: {this.state.age}</p>
            </div>
        );
        }
        }

        export default User;

You'll notice that this component has a componentDidMount() lifecycle event. This component seems pretty straightforward, but let's walk through the order of how it works:

1. The render() method is called which updates the page with a <div> that has one paragraph for the name and one paragraph for the age. What's important to realize is that this.state.name and this.state.age are empty strings (at first), so the name and age don't actually display

2. Once the component has been mounted, the componentDidMount() lifecycle event occurs
        The fetchUser request from the UserAPI is run which sends a request to the user database
        When the data is returned, setState() is called and updates the name and age properties

3. Since the state has changed, render() gets called again. This re-renders the page, but now this.state.name and this.state.age have values

Let's use componentDidMount() to fetch real users from a server in our Contacts app!

⚠️ Required API File ⚠️
At the beginning of the program, we gave you the option to clone our starter project or to start from scratch using create-react-app. If you used create-react-app to build your project, then you'll need the ContactsAPI file for the following video.

## Set up a modern web app by running one command.
https://facebook.github.io/create-react-app/

https://youtu.be/P34OXhOl_vk

## Remove Contacts
With what we have so far, we're fetching all users from the Contacts API and adding them to this.state.contacts. Pretty good so far. What's missing, though, is the removing feature. Currently, when we remove a contact, it gets removed from this.state.contacts, but it still exists in the backend database.

Let's use the Contacts API's remove() method to update the backend.

https://youtu.be/hVQR6shyMAE

## Lost All Your Contacts?
Now that we're syncing our contacts back to the server, any delete commands will remove all of them. Since we aren't able to add new ones yet, you'll be kinda stuck if you delete all of them.

To get the default list of contacts back, just restart your backend server. That's the backend server, not the Contacts app, itself.

## componentDidMount() Recap
componentDidMount() is one of a number of lifecycle events that React offers. componentDidMount() gets called after the component is "mounted" (which means after it is rendered). If you need to dynamically fetch data or run an Ajax request, you should do it in componentDidMount().

## Further Research
componentDidMount() from the React Docs

[Lifecycle Methods](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

[Lifecycle Methods Cheat Sheet](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

[Understanding the React Component Lifecycle](http://busypeoples.github.io/post/react-component-lifecycle)

[React component’s lifecycle](https://medium.com/react-ecosystem/react-components-lifecycle-ce09239010df)

[Understanding React — Component life-cycle](https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d) 

[React JS: what is a PureComponent?](http://lucybain.com/blog/2018/react-js-pure-component/) 

[React Top-Level API, Component and PureComponent](https://reactjs.org/docs/react-api.html)







