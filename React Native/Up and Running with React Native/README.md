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


