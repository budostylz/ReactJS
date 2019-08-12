## Intro
https://youtu.be/BeJTeUg09mo

https://youtu.be/94Bb8stLHrU

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/8f38bb640f0441383ca906597049190989be853f">Commit</a>

## Geolocation
https://youtu.be/ynXUEGUVGA8

A common feature of native applications is the ability to access and receive updates about the user's current location. Like most things, Expo makes this rather straightforward by giving us a JavaScript API that will work on both iOS and Android.

        import { Location } from 'expo';

Typically when dealing with location services, there are one of two features you'll need: getting the user's current location, or getting and watching the user's current location for updates. Expo's Location property gives us both of these options with getCurrentPositionAsync and watchPositionAsync.

getCurrentPositionAsync gets the current location of the device, without watching for future updates. watchPositionAsync will also get the current location of the device, but it will also subscribe to location updates. This way, you'll be notified if that device moves location.

For the full documentation on how to use Expo's Location property, visit <a href="https://docs.expo.io/versions/latest/sdk/location/?redirected">Location</a>

💡 Geolocation Tips 💡
Whenever you're dealing with a feature that requires the user's permission to work properly, it's important that you account for all the different UI options that could be shown. For example, when dealing with a user's location, there are three scenarios to manage:

    1. The user gives you permission to view their location (best-case scenario).
    2. The user decides to neither deny nor grant you permission to their location.
    3. The user denies giving you access to their location.
In an ideal world, the user would always grant you permission to whatever you'd like, but, this isn't always the case and as a UI developer, you need to plan accordingly for those moments.

https://youtu.be/nIQMG9N33IE

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/62780584135dbfcee999b10ec3f01ec646aeb27b">Commit</a>


https://youtu.be/B56Uz-NKKhs

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/70aa708e381b86471da886e01efc6568df076c54">Commit</a>


https://youtu.be/oiz4Fn1Iqqk

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/5a834dc7790f3612a9bebdf4b25ded34e9bfe580">Commit</a>


https://youtu.be/BNYvgnCvPFc

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/654fab8ad1502c104a0501adea1819a4f9ab54c1">Commit</a>

Be sure that you have included the following imports: in Live.js:

        import { Location, Permissions } from 'expo';

        import { calculateDirection } from '../utils/helpers';

https://youtu.be/tl8blRR_nc0

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/0b092b57b530fd6b2d9e9577dd299351e74df75f">Commit</a>

## Summary
In this concept, we saw how to use Expo's Location property to watch the user's current location using watchPositionAsync. For further reading, feel free to check out the <a href="https://docs.expo.io/versions/latest/sdk/location/?redirected">official documentation</a>.

## Animations
https://youtu.be/lyM8LcmrdS8

Animations are a fundamental aspect of any native application. Because of this, React Native comes built in with an animations library called Animated. The whole idea of Animated is that it "focuses on declarative relationships between inputs and outputs, with configurable transforms in between, and simple start/stop methods to control time-based animation execution." In other words, Animated allows you to establish different types of transformations on specific values. For example, you could easily animate an image's opacity property from 0 to 1, giving the effect that the image is slowly appearing.

There are three types of animation configurations that you have access to out of the box with Animated. They are decay, spring, and timing. Again, all three of these allow you to transform a specific value, but each differ in how that value is transformed: "decay" will start with an initial velocity and gradually slow to a stop, "spring" provides a normal spring type of animation, and "timing" animates a value of a specified time.

Let's take a look at some of these in action!

https://youtu.be/H1LJ3C8yzuc

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/7a701a6fbe7d0331e3ae8cce7899d55ce9653bd3">Commit</a>

⚠️ Cautions: Animations ⚠️
Once you fully grasp the Animated API, a whole new world will open up to you. It sounds great, but this can be a double-edged sword. It's a great thing because you now have the ability to enhance the feel of your application with animations. However, with great power comes great responsibility.

The goal of having animations is to add to the user's experience, not distract from it. By keeping this in mind whenever you're adding animations to your app, not only will your app perform better -- you'll also minimize the risk of ruining your user's experience with unnecessary animations.

## Summary
In this section we learned how to improve your application's UX by using React Native's Animated library to add thoughtful animations. For more reading on Animated, you can view the <a href="https://facebook.github.io/react-native/docs/animated.html">official documentation</a>.

# Local Notifications
https://youtu.be/knsXBVw_U84

When dealing with notifications, it's important to understand that there are two different types: push notifications, and local notifications.

Local notifications do not use or require any external infrastructure; they happen entirely on the device itself. That means that the only requirement for the device to display the notification is that the device is on. On the other hand, push notifications require you to have a server which handles pushing the notification to your user's devices when a certain event occurs.

But since we're not incorporating an external server, and all the logic about when we should show the notification can be done on the phone itself -- local notifications will be the most ideal for our application. Let's see how it's done!

⚠️ Notifications on iOS ⚠️
Before we jump in, note that with iOS, notifications (both push notifications and local notifications) do not appear at the top of the screen automatically if the application is in the foreground. Moreover, push notifications do not function in the iOS simulator (whether or not Expo is used).

For more information, check out <a href="https://forums.expo.io/t/psa-reminder-notifications-in-ios-foregrounded-apps/641">this post</a> in the Expo forums. This issue does not appear when working with notifications on Android.

https://youtu.be/Qp7OpUgkhsQ

⚠️ scheduleLocalNotificationAsync ⚠️
In the previous video, scheduleLocalNotificationAsync should have been used instead of the erroneous scheduleLocalNotificationsAsync (note that "Notification" is pluralized in the incorrect version).

The following commit contains the correct version in helpers.js. For additional information, feel free to check out <a href="https://docs.expo.io/versions/latest/sdk/notifications.html#exponotificationsschedulelocalnotificationasynclocalnotification-schedulingoptions">this article</a> in the Expo documentation.

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/blob/setLocalNotification/utils/helpers.js">Commit</a>

https://youtu.be/sGdXitMsRTE

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/63778456f674355e40044c673f4b966ebd446866">Commit</a>

Summary
In this section, you learned how to add local notifications to your app using Expo's Notifications property. For further reading, you can visit the <a href="https://docs.expo.io/versions/latest/sdk/notifications/?redirected">official documentation</a>.

## Handling Photos
https://youtu.be/WVCmP3-0_ic


At this point it shouldn't be a surprise that Expo provides a nice JavaScript abstraction over the native iOS and Android approaches to accessing photos from the device's photo gallery. The name of this property is ImagePicker and it does exactly what you would expect: "Provides access to the system's UI for selecting images from the phone's photo library or taking a photo with the camera."

We won't be adding any of this functionality to the UdaciFitness app we're building, but in the next video we will walk through how to use ImagePicker just in case you'll need it for a future project.

https://youtu.be/fAqI8iGAgiQ

## Summary
In this section, you learned about Expo's ImagePicker component to grab images from the phone's photo gallery. For more information, you can read the <a href="https://docs.expo.io/versions/latest/sdk/imagepicker/?redirected">official documentation</a>.

# App Store Preparations

https://youtu.be/_tyCx2yAkc0

When you submit an app to either app store, there is more information you need to submit than just the app itself. For example, you need details such as the app description, icon, etc. Luckily for us, Expo make it easy to specify these sorts of things just by editing the app.json file at the root of our app folder. Here's an example of configurations we'll be adding in our UdaciFitness app:

```javascript

{
  "expo": {
    "sdkVersion": "19.0.0",
    "orientation": "portrait",
    "name": "Udacifitness",
    "description": "The best triathlon training app in the world.",
    "slug": "udacifitness",
    "version": "1.0",
    "icon": "https://maxcdn.icons8.com/Color/PNG/512/Sports/triathlon-512.png",
    "notification": {
      "icon": "http://www.student-scholarships.com/images/made/img/featured/nav_basketball_45_45.png"
    },
    "ios": {
     "bundleIdentifier": "org.udacifitness.exp",
    },
    "android": {
     "package": "org.udacifitness.exp",
    }
  },
}

```
Let's go ahead and add this to our app!
https://youtu.be/4rcPX-bIneE

<a href="https://github.com/udacity/reactnd-UdaciFitness-complete/commit/ca00e023b9c01139efdfb54d7dfa9e18c75b4297">Commit</a>

## What are .apk and .ipa Files?
Before you submit your application to either app store, you need to "package" it appropriately. The iOS App Store will ask you for a .ipa ("iOS App Store Package") file and the Android Google Play store will ask you for a .apk ("Android Application Package") file. When you create either an ipa or a apk file, you're essentially creating a bundle of all of the necessary information that either App store needs in order to process and run your application.

The easiest way to generate both the .apk and the .ipa files is to use Expo's exp CLI. First, run npm install -g exp. Once that's installed (and after you've configured your app.json file), you can run exp build:ios to build your .ipa file, and exp build:android to build your .apk file.

Note that these will take anywhere from 10-20 minutes to build, so you'll need to be patient. To check the status of the build you can run exp build:status. Eventually that command will give you a URL where you can go to download either your .ipa or .apk files.

https://youtu.be/IryVgEQ0SvE

⚠️ The Rest of the Way ⚠️
The hardest part about uploading your application to either app store is generating a .ipa or .apk file. Because we covered that in the previous section, we're not going to cover the entire process of actually uploading your app. The following documents should help you: <a href="https://developer.apple.com/support/app-store-connect/#//apple_ref/doc/uid/TP40011225-CH38-SW1">for iOS</a>, Uploading a Build for an App and <a href="https://support.google.com/googleplay/android-developer/answer/113469?hl=en">for Android</a>, Upload an App.

## Summary
In this section we learned about preparing your application for the app store and generating .apk and .ipa files. For further reading, feel free t ocheck out <a href="https://docs.expo.io/versions/latest/distribution/building-standalone-apps/?redirected">Building Standalone Apps with Expo</a>

<a href="11 mistakes I’ve made during React Native / Redux app development">11 mistakes I’ve made during React Native / Redux app development</a>











