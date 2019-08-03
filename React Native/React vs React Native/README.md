# React vs. React Native

https://youtu.be/R0Qf5a0Vxho

Native applications look and "feel" different because they are fundamentally different. Even though we're using the same React principles that you've learned throughout this program, keep in mind that this is no longer the web! While some of these distinctions are more apparent (e.g., the development process, access to native features, how users get updates, etc.), there are some key differences that we'll be taking a deep dive into during this course.

For one, native apps often leverage animations to help create a great user experience. Animations such as button effects, screen transitions, and other visual feedback may be subtle, but they support continuity and guidance in the apps you build. They all function to dynamically tell a story about how your application works. Without animations, an application can feel like just a collection of static screens. For now, stay tuned; we'll be checking out animations in-depth during Lesson 5.

Another key difference between native and web applications is in navigation. Recall that React Router's Route component allows us to map a URL to a specific UI component. In React Native, routers function as a stack; that is, individual screens are "pushed" and "popped" as needed. We'll look at routing more closely later in Lesson 4.

## Android vs. iOS
Not only are there fundamental differences between native apps and web apps, you'll also find differences between how native platforms (iOS and Android) look and feel as well. Perhaps the most apparent are the distinct design philosophies on each platform: Android apps utilize Google's <a href="https://material.io/design/introduction/#principles">Material Design</a>, while iOS apps take advantage of Apple's <a href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/">Human Interface Design</a>. When designing mobile applications, it's important to your users that an iOS app feels like an iOS app, and an Android app feels like an Android app.

Navigation between screens feels distinct between Android and iOS as well. Android devices have access to a navigation bar at the bottom of the screen, which allows users to go back to the previous screen (among other features). On iOS, the approach is different: there is no such universal navigation bar! When building the UI for an iOS application, it is important to include a back button (perhaps on a custom <a href="https://developer.apple.com/design/human-interface-guidelines/ios/bars/navigation-bars/">navigation bar</a>) to help guide users through your app.

One more key difference between Android and iOS involves tab navigation. iOS apps include <a href="">tab bars</a> at the bottom of the app's screen, allowing for convenient access to different portions of the app. Likewise, Android apps include them as well; however <a href="https://material.io/design/components/tabs.html">tabs</a> are distinctly located at the top of the screen. Both allow access to high-level content, and we'll explore React Native's TabNavigator in closer detail in Lesson 4.

## Summary
When developing your React Native projects, keep in mind that you're designing for a different experience than that of web applications. Mobile applications look and feel different due to fundamental differences, such as subtle animations that build a sense of continuity for your users. Differences exist between Android and iOS as well, especially in their design philosophies and navigation. We'll look at some fundamental components that make up React Natives apps in the next section!

## Further Research
<a href="https://developer.apple.com/design/human-interface-guidelines/ios/overview/interface-essentials">iOS Interface Essentials</a>

# Common React Native Components
https://youtu.be/9Nt1tXV3y0c

        When writing HTML, we're used to using <div> and <span> tags to define sections or to contain other elements on the page. In React Native, a similar principle applies, but this time we're using React Native's <View> component to build the application UI. Just like HTML's <div>, <View> components can accommodate several props (e.g. style), and can even be nested inside other <View> components!

        <Text> works just how you'd expect, as well. Its main objective is to, by no surprise, render text in the application. Just like <View>, styling and nesting capabilities apply to <Text> components, as well.

        Let's see how they work!

https://youtu.be/_Qv4NGKNuug

## In-Class Project Overview
https://youtu.be/HZSi_XB3drA

## Icons
https://youtu.be/tYb0-l81x4U

Right out of the box, Create React Native App offers support for thousands of vector icons to use in your applications. Feel free to bookmark and check out Expo's <a href="https://expo.github.io/vector-icons/">vector icon directory</a> for a complete list. Whichever icon set you choose, just be sure that it fits the overall look and feel of your application (e.g., using platform-specific icons).

https://youtu.be/sH4D8b7MotQ

https://youtu.be/WtAiZNpKpkM

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/c3b244a93a6fdd484cfd9306fc05e0c2095bdbe4">Commit</a>

⚠️ Icons not Rendering? ⚠️
In the commit above, the color property of the MaterialIcons component is set to white. This will make it seem as if no icons are appearing, since the background color is also white. Feel free to switch this value to black (as the above video demonstrates).

https://youtu.be/DrUMM2IzL9Q

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/f710aa25881665feacf82b100643146b8d011446">Commit</a>

https://youtu.be/xLh5C-hCuSE

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/3aa3f69d21b8a96b4b9d99f67b655772a479095f">Commit</a>

https://youtu.be/s0X1NrNNVQM

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/a7ab15bf3f46d1202d86a2c2fe06e458bd7faffd">Commit</a>

Touchables
Users mainly interact with web apps with clicks. In the world of mobile apps, however, several different touch gestures are used to navigate through the app: tapping a button, swiping to scroll through a list, and so on.

React Native offers a number of components to handle "tapping gestures," or what is called Touchables. Let's take a look at them in detail in the following video:

* Button
* TouchableHighlight
* TouchableOpacity
* TouchableNativeFeedback
* TouchableWithoutFeedback

https://youtu.be/u2-Efn5K6eM

https://youtu.be/7OzFooD9EoM

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/fea2dbb62ef103ed0a44307dd7922bdfcab83ef2">Commit</a>

https://youtu.be/eLrjkwYIB0g

https://youtu.be/Mg8vSOPiQ7M

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/528c326cc0dfafcd74199c7be9cb00d971cc8a23">Commit</a>

https://youtu.be/cb3vt0Gpbjc

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/f9b86f4b8fd5c2c2c89cfa32552b67f76a48fcf3">Commit</a>

https://youtu.be/b-AXsdbqZyU

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/a45a7c370228aaa333840544c508c7d8d9f7da31">Commit</a>

💡 Pause Udacifitness💡
At this point, let's put the UdaciFitness project on hold for a bit and talk about some other common React Native components. For example, how would you handle lists in a mobile app? What about forms, or images?

Though these are not necessarily used in the in-class project, these components are still great to know as you develop React Native applications.

## Lists
React Native comes with a few ways to render lists. You'll probably run into ScrollView and FlatList components most commonly, so let's take a look at both of these in detail!

https://youtu.be/6JgdIxDn8H4

💡 Seeing Errors with ScrollView? 💡
If you're running into errors mentioning that ScrollView has no propType..., we recommend reinstalling Create React Native App globally, as well as updating the Expo mobile application. If you still find issues, feel free to check out this GitHub issue on the official React Native repo.

💡 SectionList 💡
What if you wanted to add section headers to a list? FlatList doesn’t quite support these, but React Native offers another list component that renders these headers nicely. Feel free to check out SectionList in the React Native documentation for a closer look

## Forms
Forms in React Native are just like the forms in React that you already know: the state of input form elements is controlled by the React component that renders that form. That is, form values are held in local component state, making state the "source of truth" for that form.

React Native provides a few basic components to use in your application's forms. We'll take a look at each of these more closely in the following video:

* TextInput
* KeyboardAvoidingView
* Slider
* Switch

https://youtu.be/WxdnpxrWZkI

⚠️ Oops! (onChange vs. onChangeText) ⚠️
In the above video, App renders a TextInput component with an onChange prop. With the way that the event handler, handleTextChange(), is implemented, the prop should be onChangeText.

While both methods are invoked on value change, onChangeText passes the actual value (text) as the argument. On the other hand, onChange passes the entire event object as an argument. Both are perfectly valid props, but the logic of your event handler will need to be tailored to the prop chosen. For more info, check out this <a href="https://stackoverflow.com/questions/44416541/react-native-difference-between-onchange-vs-onchangetext-of-textinput">post</a> on Stack Overflow.

https://youtu.be/uxbqKJchzKQ

## Other Components
We've just seen some of the most important components built into React Native. These components will get you started with the essential functionalities in the apps that you build -- but the list of available components goes on! Feel free to review the React Native documentation for a <a href="https://facebook.github.io/react-native/docs/components-and-apis.html#components-and-apis">complete list</a>. For starters, we recommend checking out:

* <a href="https://facebook.github.io/react-native/docs/activityindicator.html">ActivityIndicator</a>
* <a href="https://facebook.github.io/react-native/docs/picker.html">Picker</a>
* <a href="https://facebook.github.io/react-native/docs/webview.html">WebView</a>
* <a href="https://facebook.github.io/react-native/docs/modal.html">Modal</a>

Note that certain components are also platform-specific! Though you want to build cross-platform components with composition, reusing as much code as possible, it may make sense for certain elements to be different depending on your audience (i.e., iOS vs. Android).

## Summary
React Native provides a variety of built-in components for developing mobile applications. While some support basic functionality in an application (e.g., text, images, lists), others offer more specialized functionality (e.g., pulling to refresh, displaying a loading indicator). Feel free to check out <a href="https://facebook.github.io/react-native/docs/components-and-apis.html">Components and APIs</a> in the React Native documentation for an exhaustive list.




















