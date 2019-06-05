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







