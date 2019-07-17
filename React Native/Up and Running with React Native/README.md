# Intro
https://youtu.be/0iWIw2EnuU0

## Course Map
Welcome! This course covers the React Native framework. Here's a quick breakdown of what the course looks like:

* Lesson 1 illustrates the benefits of using React Native to build native applications, as well as how to set up   an effective dev environment.
* Lesson 2 compares the main ideological and API differences between React and React Native.
* Lesson 3 details styling and layout patterns for React Native applications.
* Lesson 4 examines routing patterns and strategies.
* Lesson 5 introduces native functionality (e.g., geolocation, notifications, etc.) and preparation of applications for the app store.

## In-Class Project
During this course, you'll follow along and create a daily fitness-tracking application, <a href="https://github.com/udacity/reactnd-UdaciFitness-complete">UdaciFitness</a>. You'll tie in what you've learned from React Fundamentals as well as React & Redux, then leverage React Native to create a fully functional mobile application!

# What is React Native/Why does it exist?
https://youtu.be/ypo2B8DpmSc

## React Native under the Hood

When React was first introduced, a big selling point was the <a href="https://reactjs.org/docs/faq-internals.html">Virtual DOM</a>. The idea is pretty standard in most UI libraries now, but when it first came out, it was groundbreaking! We can look at what exactly the Virtual DOM is by breaking down the process of what happens when you call setState().

The first thing React does when setState() is called is merge the object passed to setState() into the current state of the component. This will kick off a process called <a href="https://reactjs.org/docs/reconciliation.html">reconciliation</a>. The end goal of reconciliation is to update the UI based on this new state in the most efficient way possible. To do this, React will construct a new tree of React elements (which you can think of as an object representation of your UI). Once it has this new tree, React will "diff" it against the previous element tree in order to figure out how the UI should change in response to the new state. By doing this, React will then know the exact changes which occurred, and by knowing exactly what changes occurred, it will able to minimize its footprint on the UI by only making updates where absolutely necessary.

This process of creating an object representation of the DOM is the whole idea behind the "Virtual DOM". Now, what if instead of targeting and rendering to the DOM, we need to target and render to another platform -- say iOS or Android. Theoretically, the DOM is just an implementation detail. Besides the name itself (which, in my opinion, was more of a marketing ploy than anything), there's nothing that couples the idea of the Virtual DOM to the actual DOM. This is the exact idea behind React Native. Instead of rendering to the web's DOM, React Native renders to native iOS or Android views. This allows us to build native iOS and Android applications just by using React Native.

## Further Research
<a href="https://tadeuzagallo.com/blog/react-native-bridge/">Bridging in React Native</a>

<a href="https://medium.com/dailyjs/12-common-questions-about-react-native-74fc9ba49b17">12 Common Questions from Working with React Native</a>

# Dev Environment Setup

## Create React Native App
When we build our app throughout this course, we'll be building it for both Android and iOS. One of the puzzles at hand is that we'll need to support two separate development environments: iOS uses <a href="https://developer.apple.com/xcode/">Xcode</a>, and Android uses <a href="https://developer.android.com/studio/index.html">Android Studio</a>. This introduces a lot of complexity into this course; after all, both Xcode and Android Studio could probably each be their own set of courses!

Luckily for us, there's a new tool we can use that will allow us to develop for both Android and iOS without ever opening up Android Studio or Xcode. It's called, not surprisingly, Create React Native App. It's similar to Create React App in that all you have to do is install the CLI via NPM. Then, via the CLI, you can easily scaffold a brand new React Native project.

Just like Create React App, there are pros and cons to using Create React Native App (CRNA). First, the pros.

## Create React Native App Pros
The obvious one is that Create React Native app minimizes the amount of time it takes to create a "hello world" application. The fact that you can run a command in your terminal and 15 seconds later have a project that run on both Android and iOS using JavaScript is pretty incredible. Next, and we'll look deeper into this one later on, Create React Native App allows you to easily develop on your own device. This way, any changes you make in your text editor will instantly show on the app running on your local phone. Next, and this is something I mentioned earlier, with Create React Native App you just need one build tool. You don't have to worry about Xcode or Android Studio. Lastly, there's no lock in. Just like Create React App, you can "eject" at anytime.

## Create React Native Cons
Now, there are some cons, and granted they're pretty minor, but they're good to be aware of. First, if you're building an app that's going to be added to an existing native iOS or Android application, Create React Native App won't work. Second, if you need to build your own bridge between React Native and some native API that Create React Native App doesn't expose (which is pretty rare), Create React Native App won't work.

Let's jump right in!

## Install Create React Native App
In order to use Create React Native App, go ahead and install it once globally:

        npm install -g create-react-native-app

Alternatively, feel free to use yarn as well (visit <a href="https://yarnpkg.com/lang/en/docs/install/#windows-stable">here</a> for setup instructions):

        yarn global add create-react-native-app

Note that Create React Native App uses <a href="https://forums.expo.io/t/is-create-react-native-app-retired/14452/2">Expo CLI under the hood</a>. You can get up and running with React Native using the instructions on this page, but feel free to visit the React Native <a href="https://facebook.github.io/react-native/docs/getting-started.html">Quick Start</a> guide if you prefer to use "vanilla" Expo CLI as an alternative.

⚠️ Using Yarn ⚠️
Create React Native App does not currently work well with NPM v5, due to <a href="https://github.com/react-community/create-react-native-app/issues/233#issuecomment-305638103">bugs in NPM</a>. While there should be no issues with NPM v3 or v4, we'll be using yarn from here on out just to be safe.

## Expo
https://youtu.be/Aav5VVqwnzQ

Expo is a service that makes just about everything involving React Native a whole lot easier. The idea behind Expo is that there's no need to use Android Studio or Xcode. What's more: it even allows us to develop for iOS with Windows (or even Linux)!

With Expo, you can load and run projects built by Create React Native App with the same JavaScript you already know. There's no need to compile any native code. And much like Create React App, using Expo with Create React Native App lets us get an application up and running with almost no configuration.

We'll be relying on Expo heavily in this course. First things first: you need to install Expo. Head to the app store and install the Expo mobile app for your device:

* <a href="https://apps.apple.com/us/app/expo-client/id982107779">Expo on Google Play</a> (Android)
* <a href="https://apps.apple.com/us/app/expo-client/id982107779">Expo on the App Store</a> (iOS)



