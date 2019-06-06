# The Store
view index.js

## Application Architecture and State
https://youtu.be/IDdb6baBQyo

## State Tree
One of the key points of Redux is that all of the data is stored in a single object called the state tree. But what does a state tree actually look like? Good question! Here's an example:

        {
        recipes: [
            { … },
            { … },
            { … }
        ],
        ingredients: [
            { … },
            { … },
            { … },
            { … },
            { … },
            { … }
        ],
        products: [
            { … },
            { … },
            { … },
            { … }
        ]
        }

See how all of the data for this imaginary cooking site is stored in a single object? So all of the state (or "application data") for this site is stored in one, single location. This is what we mean when we say "state tree"...it's just all of the data stored in a single object.

Throughout this course, whenever we refer to an application's "state tree", we'll use a triangle to convey this concept.

## 3 Ways interacting with state
https://youtu.be/o8cEkLqR7VU

## Summary
In this lesson, we looked at the data in an application. We saw that in traditional apps, the data is mixed in with the UI and markup. This can lead to hard-to-find bugs where updating the state in one location doesn't update it in every location.

We learned that the main goal that Redux is trying to offer is predictable state management. The way that Redux tries to accomplish this is through having a single state tree. This state tree is an object that stores the entire state for an application. Now that all state is stored in one location, we discovered three ways to interact with it:

        getting the state
        listening for changes to the state
        updating the state
        Then we combine the three items above and the state tree object itself into one unit which we called the store. We'll look at creating this store in the next lesson.

# Create Store: Getting and Listening
In the following video, we'll start with a blank index.js file and create a factory function that creates store objects. Then we'll have the store keep track of the state, and we'll write the method to get the state from the store.

https://youtu.be/YqmnAPNCxkQ

## commit1
https://github.com/udacity/reactnd-redux-todos-goals/blob/getting-the-state/index.js

In this screencast, we started building out the createStore function. Currently, this factory function:

        takes in no arguments
        sets up a local (private) variable to hold the state
        sets up a getState() function
        returns an object that publicly exposes the getState() function
        Let's take a look at the getState() function

Our list of things we need to build for the store is shrinking:

        the state tree(done)
        a way to get the state tree(done)
        a way to listen and respond to the state changing
        a way to update the state
        Our next task on the list is to make a way to listen for changes to the state.

https://youtu.be/AWOuF_qoEh8
https://youtu.be/5jVn0L7nlBA

## commit2
https://github.com/udacity/reactnd-redux-todos-goals/blob/listening-to-changes/index.js

## Keep in mind that

        const subscribe = (listener) => {
            listeners.push(listener)
            return () => {
            listeners = listeners.filter((l) => l !== listener)
            }
        }

is equivalent to the following ES5:

        var subscribe = function subscribe(listener) {
        listeners.push(listener);
        return function () {
            listeners = listeners.filter(function (l) {
            return l !== listener;
            });
        };
        };

## App Predictability
https://youtu.be/-MtD_RCqKK4

We've got our first rule!

        Only an event can change the state of the store.

Ok...well, without knowing what an "event" is, this rule is less than helpful :-\ Fear not, because we're going to look at what events are in this video:

## Actions
https://youtu.be/4SSkRoVunbI

When an event takes place in a Redux application, we use a plain JavaScript object to keep track of what the specific event was. This object is called an Action.

Let's take another look at an Action:

        {
            type: "ADD_PRODUCT_TO_CART"
        }
As you can see, an Action is clearly just a plain JavaScript object. What makes this plain JavaScript object special in Redux, is that every Action must have a type property. The purpose of the type property is to let our app (Redux) know exactly what event just took place. This Action tells us that a product was added to the cart. That's incredibly descriptive and quite helpful, isn't it?

Now, since an Action is just a regular object, we can include extra data about the event that took place:

        {
            type: "ADD_PRODUCT_TO_CART",
            productId: 17
        }
In this Action, we're including the productId field. Now we know exactly which product was added to the store!

One more note to keep in mind as you build your Action objects: it's better practice to pass as little data as possible in each action. That is, prefer passing the index or ID of a product rather than the entire product object itself.

Action Creators are functions that create/return action objects. For example:

        const addItem = item => ({
            type: ADD_ITEM,
            item
        });

        or in ES5:

        var addItem = function addItem(item) {
            return {
                type: ADD_ITEM,
                item: item
            };
        };

# Updating State

Let's step back one more time and think about what Redux is all about. The whole goal of Redux is to increase predictability:

        Redux is a predictable state container for JavaScript apps.

With this in mind, let's see dig into how we can use actions and our state tree to predictably manage an application's state.

## Predictable Functions
https://youtu.be/15sTwJsyWbU

And we've got our second rule!

        The function that returns the new state needs to be a pure function.

So far, our rules are:

Only an event can change the state of the store.
The function that returns the new state needs to be a pure function.
A pure function can be a bit theoretical, so we'll take it step by step and explain why a pure function is so powerful and how it helps improve predictability.

## Pure function(Wiki)
https://en.wikipedia.org/wiki/Pure_function

## Pure Functions
https://youtu.be/o9cWPrOMuyU

What are Pure Functions?
Pure functions are integral to how state in Redux applications is updated. By definition, pure functions:

    1. Return the same result if the same arguments are passed in
    2. Depend solely on the arguments passed into them
    3. Do not produce side effects, such as API requests and I/O operations
    4. Let’s check out an example of a pure function, square():

Let’s check out an example of a pure function, square():

    // `square()` is a pure function

    const square = x => x * x;
square() is a pure function because it outputs the same value every single time, given that the same argument is passed into it. There is no dependence on any other values to produce that result, and we can safely expect just that result to be returned -- no side effects (more on this in a bit!).

On the other hand, let’s check out an example of an impure function, calculateTip():

    // `calculateTip()` is an impure function

    const tipPercentage = 0.15;

const calculateTip = cost => cost * tipPercentage;
calculateTip() calculates and returns a number value. However, it relies on a variable (tipPercentage) that lives outside the function to produce that value. Since it fails one of the requirements of pure functions, calculateTip() is an impure function. However, we could convert this function to a pure function by passing in the outside variable, tipPercentage, as a second argument to this function!

    const calculateTip = (cost, tipPercentage = 0.15) => cost * tipPercentage;

## Why Pure Functions Are Great
For our purposes, the most important feature of a pure function is that it's predictable. If we have a function that takes in our state and an action that occurred, the function should (if it's pure!) return the exact same result every single time.

You're going to be sick of this by the end ;-) but this course (and Redux!) are all about predictability!

## Implement Pure Function/Reducer to State
https://youtu.be/QU_WvPaC6cM

## Commit3
https://github.com/udacity/reactnd-redux-todos-goals/blob/the-reducer-function/index.js

## Action, Reducer, Store
https://youtu.be/z5yJhTOxmMU

## Update State
https://youtu.be/wIyRfRSpvDo

## Commit4
https://github.com/udacity/reactnd-redux-todos-goals/blob/create-store-dispatch/index.js

The new dispatch() method is pretty small, but is vital to our functioning store code. To briefly recap how the method functions:

        dispatch() is called with an Action
        the reducer that was passed to createStore() is called with the current state tree and the action...this updates the state tree
        because the state has (potentially) changed, all listener functions that have been registered with the subscribe() method are called
        
Summary
In this section, we learned about a number of important points about Redux. We learned about pure functions, a Reducer function (which, itself, needs to be a pure function), dispatching changes in our store, and identifying which parts of our code are generic library code and which are specific to our app.









