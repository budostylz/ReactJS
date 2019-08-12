# Intro
https://youtu.be/ajrFLWzKdKk

# Tab Navigator

💡React Navigation v2💡
The videos in this course cover React Navigation v1. Recently, an updated version of React Navigation was released. <a href src="https://reactnavigation.org/blog/">Here</a> are some of the main differences between these two versions. The documentation for version 1 is located <a href="https://v1.reactnavigation.org/">here</a>, and the documentation for <a href="https://v1.reactnavigation.org/">version 2</a> is here. The default version shipped with npm is v2, so if you want to use v1, you'd have to specify that in your package.json file.

https://youtu.be/SfdRg-bMfLc

## Tab Navigator v1
By using TabNavigator, users can navigate through different screens within an application simply by pressing tabs that render different components.

## Tab Navigator v2
TabNavigator is deprecated in favor of createBottomTabNavigator. createMaterialTopTabNavigator and createMaterialBottomTabNavigator are also available as options for Android. Please note that createBottomTabNavigator does not support the animationEnabled and swipeEnabled properties.

Let's see how we'd use Tab Navigator v2.

Say we have two basic functional components that just render some text, Hello and Goodbye:

```javascript

const Hello = () => (
  <View>
    <Text>Hello!</Text>
  </View>
);

const Goodbye = () => (
  <View>
    <Text>Goodbye!</Text>
  </View>
);

```

If we want to add two tabs for users to select (one rendering Hello, the other rendering Goodbye), first we'll need to install react-navigation and then import createBottomTabNavigator:

        yarn add react-navigation

    or

        npm install --save react-navigation

        import { createBottomTabNavigator } from 'react-navigation';

        Once this is done, we can pass an object into createBottomTabNavigator like so:

```javascript

const Tabs = createBottomTabNavigator({
  Hello: {
    screen: Hello
  },
  Goodbye: {
    screen: Goodbye
  },
});


```

Inside the object, each key-and-value pair represents a single tab. The keys represent the name of the tab; this is what users will see and press. Note that a screen property is included as well; this is the component that is rendered when the tab is active.

Here comes the interesting part: what createBottomTabNavigator returns is actually a component! Since we have stored this in a Tabs variable, we can just render this as we would with any component:

```javascript

// App.js

// ...

export default class App extends React.Component {
  render() {
    return (
      <Tabs />
    );
  }
}


```

https://youtu.be/4Ki4UbOy8II

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/9ff26370e4e5593195fdcad4d85e74f540a39220">Commit</a>

## StatusBar
Recall that so far, our application has been using arbitrary padding to account for the status bar at the top of the device's screen. Let's go ahead and change that! React Native actually provides a simple StatusBar component to customize how the status bar appears in an application.

Before we take a look at how to implement StatusBar, be sure to import it from react-native:

import { StatusBar } from 'react-native';

Let's jump in!

https://youtu.be/LzLIqKtjpD8

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/b5a0e8840cbc48486056331cd92399b729700b56">Commit</a>

## Summary
React Navigator v1 offers a TabNavigator (and React Navigator v2 offers us createBottomTabNavigator) API that allows for navigation between different screens via individual tabs. Each tab is dedicated to rendering a specific component.

This section also detailed React Native's StatusBar component. StatusBar is relatively straightforward to use and is fully customizable -- we typically just set properties to change it!

In the next section, we'll take a look at React Navigator's Stack Navigator, which allows users to add and remove screens from a stack.

## Further Research
* <a href="https://facebook.github.io/react-native/docs/statusbar.html#props">StatusBar</a> props from the React Native docs
* <a href="https://v1.reactnavigation.org/docs/tab-navigator.html">TabNavigator v1</a> from the React Navigator docs
* <a href="https://reactnavigation.org/docs/en/bottom-tab-navigator.html">TabNavigator v2</a> from the React Navigator docs

# Stack Navigator
https://youtu.be/uMbBR5nu3eg

## Stack Navigator v1
When pressing an item in, say, an index view, we expect to go to a new screen with details on that item. React Navigation offers another navigator to do just that! With Stack Navigator, new screens are added and removed as a stack. This places screens on top of one another in a "last in, first out" manner, similar to Array's push() and pop() methods.

StackNavigator's usage is largely similar to that of TabNavigator. But rather than passing in an object of different tabs, we pass in an object of the different screens that should be available in that stack.

## Stack Navigator v2
StackNavigator has been deprecated in favor of createStackNavigator, which is functionally identical but clearly communicates that it's a function that returns a component.

According to the <a href="https://reactnavigation.org/blog/">documentation</a>, the new StackNavigator is “less pushy”:

<a href="https://reactnavigation.org/docs/en/navigating.html">Each time you call push we add a new route to the navigation stack. When you call navigate, it first tries to find an existing route with that name, and only pushes a new route if there isn't yet one on the stack.</a>

<a href="https://reactnavigation.org/docs/en/navigating.html">Let's suppose that we actually want to add another details screen. This is pretty common in cases where you pass in some unique data to each route (more on that later when we talk about params!). To do this, we can change navigate to push. This allows us to express the intent to add another route regardless of the existing navigation history.</a>

Let's see how we'd use the Stack Navigator from React Navigation v2.

First, go ahead an import createStackNavigator from react-navigation.

        import { createStackNavigator } from 'react-navigation';

  Say we have two basic components, Home and Dashboard:

```javascript

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
      <Text>Press here for the Dashboard</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = () => (
  <View>
    <Text>This is the Dashboard</Text>
  </View>
);

```

Note that a navigation prop is passed to the stateless functional Home component, which allows navigation to another route. Once this is done, we can pass an object into createStackNavigator similar to how we did for createBottomTabNavigator:

```javascript

const Stack = createStackNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
})

```

The return value of passing an object into createStackNavigator is a component as well, and we can render it as such!

```javascript

// App.js

// ...

export default class App extends React.Component {
  render() {
    return (
      <Stack />
    );
  }
}


```

<a href="https://reactnavigation.org/docs/en/stack-navigator.html">Stack Navigator</a> and <a href="https://reactnavigation.org/docs/en/bottom-tab-navigator.html">Tab Navigator</a> often go hand-in-hand. Since they each return components, you'll often see one nested within the other. Let's see this in action as we implement this into UdaciFitness!

https://youtu.be/PkoZ__6NPE8

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/86af918722052eebafbc2892b6cd772b51a18dd4">Commit</a>

https://youtu.be/JosvkjGlt30

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/7d4fba6fba7e0f9833e9645c2f34e9c058c9feed">Commit</a>

https://youtu.be/-c5FZCh5LNo

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/5d77f8d831e170fc0ffdeae1bc92a0825e71e14a">Commit</a>

https://youtu.be/Hv_EbcrmbDY

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/7b2103a06e2394f938168d9f1040dd6ba9ac2e2d">Commit</a>

https://youtu.be/_nRJsJ2-zgY

<a href src="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/18aeee6aac40702c2d86cf976a9a67c5691505cf">Commit</a>



## Summary
React Navigation's Stack Navigator is another customizable navigation option based on adding and removing new screens to a stack. Its API is similar to that of the Tab Navigator; it takes in an object that defines all screens, then returns a component. Since both the Stack Navigator and the Tab Navigator both return components, a common practice is to nest these navigators within one another.

In the next section, we'll take a look at the Drawer Navigator, in which screens are switched from a drawer that pops out from the side of the screen!


## Further Research
<a href="https://medium.com/@swathylenjini/stack-navigation-in-react-native-2cd00374ff3a">Stack Navigation</a> in React Native
<a href="https://v1.reactnavigation.org/docs/stack-navigator.html">StackNavigator v1</a> from the React Navigator docs
<a href="https://reactnavigation.org/docs/en/stack-navigator.html">StackNavigator v2</a> from the React Navigator docs

# Drawer Navigator
https://youtu.be/rxb47NRwix8


## Drawer Navigator v1
React Navigation offers one more basic navigator to create custom navigation through React Native apps: the DrawerNavigator. While TabNavigator uses tabs to help users navigate to specific screens, DrawerNavigator uses a drawer-like menu that slides in from the side of the screen. While we won't be implementing this into UdaciFitness -- it's still important to know and fairly common in React Native applications!

To use DrawerNavigator, be sure to install version 1 of react-navigation and import the following from react-navigation:

        import { DrawerNavigator } from 'react-navigation';

Luckily, many of the same philosophies shared by StackNavigator and TabNavigator apply here as well! Let's check out two basic components again and see how DrawerNavigator renders them:

```javascript

const Home = ({ navigation }) => (
  <View>
    <Text>This is the Home view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);

const Dashboard = ({ navigation }) => (
  <View>
    <Text>This is the Dashboard view</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
      <Text>Press here to open the drawer!</Text>
    </TouchableOpacity>
  </View>
);


```

Note that rather than routing to another component, each TouchableOpacity wrapper opens the drawer. Likewise, 'DrawerClose' can be used to close the drawer. To simplify things, React Navigation also offers 'DrawerToggle' to automatically select which navigation is appropriate based on the current drawer state.

Similar to TabNavigator and StackNavigator, we can then pass an object into DrawerNavigator, render the component returned, and we're all set!

```javascript

const Drawer = DrawerNavigator({
  Home: {
    screen: Home
  },
  Dashboard: {
    screen: Dashboard
  }
});

```

```javascript

/ App.js

// ...

export default class App extends React.Component {
  render() {
    return (
      <Drawer />
    );
  }
}


```

## Drawer Navigator v2
DrawerNavigator has been deprecated in favor of createDrawerNavigator, which is functionally identical but clearly communicates that it's a function that returns a component.

According to the documentation:
<a href="https://reactnavigation.org/blog/">Rather than opening a drawer with navigation.navigate(‘DrawerOpen’), you can now call navigation.openDrawer(). Other methods are closeDrawer() and toggleDrawer().</a>

## Summary
React Navigation's Drawer Navigator is used to easily set up a screen with drawer navigation. Many of the same practices we use to set up the Stack Navigator and the Tab Navigator apply to the Drawer Navigator as well. Simply pass in an object containing the different screens, and the return value is a component ready to be rendered. As a result, this makes Drawer Navigator components easy for nesting with other navigators!

## Further Research
<a href="https://v1.reactnavigation.org/docs/drawer-navigator.html">DrawerNavigator v1</a> from the React Navigator docs
<a href="https://reactnavigation.org/docs/en/drawer-navigator.html">DrawerNavigator v2</a> from the React Navigator docs