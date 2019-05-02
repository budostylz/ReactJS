
# Composition
https://youtu.be/IDDIvXqMiD4

## Compose me That: Function Composition in JavaScript
https://www.linkedin.com/pulse/compose-me-function-composition-javascript-kevin-greene/

## Functional JavaScript: Function Composition For Every Day Use.
https://hackernoon.com/javascript-functional-composition-for-every-day-use-22421ef65a10

# What is Declarative Code
https://youtu.be/JXR2p_vtP3c

## Imperative vs Declarative Programming
https://tylermcginnis.com/imperative-vs-declarative-programming/

## Difference between declarative and imperative in React.js?
https://stackoverflow.com/questions/33655534/difference-between-declarative-and-imperative-in-react-js

# React Data Flow
    Data flows down from parent component to child component. 
    Data updates are sent to the parent component where the parent performs the actual change.

# React is Just JavaScript

## Array​.prototype​.map()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

## Array​.prototype​.filter()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Avoid Reconciliation
https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation

## The Diffing Algorithm
https://reactjs.org/docs/reconciliation.html#the-diffing-algorithm

## How Virtual-DOM and diffing works in React
https://medium.com/@gethylgeorge/how-virtual-dom-and-diffing-works-in-react-6fc805f9f84e

## React Developer Tools
https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi

## It's Just JavaScript
One of the great things about React is that a lot of what you'll be using is regular JavaScript. To make sure you're ready to move forward, please take a look at the following code:

        const shelf1 = [{name: 'name1', shelf: 'a'},{name: 'name2', shelf: 'a'}];
        const shelf2 = [{name: 'name3', shelf: 'b'},{name: 'name4', shelf: 'b'}];
        const allBooks = [...shelf1, ...shelf2];

        const filter = books => shelf => books.filter(b => {
        return b.shelf === shelf;
        });

        const filterBy = filter(allBooks);
        const booksOnShelf = filterBy('b');

If any of the code above looks confusing, or if you simply need a refresher on E6, please go through our ES6 course before moving forward.

Over the past couple of years, functional programming has had a large impact on the JavaScript ecosystem and community. Functional programming is an advanced topic in JavaScript and fills hundreds of books. It's too complex to delve into the benefits of functional programming (we've got to get to React content, right?!?). But React builds on a lot of the techniques of functional programming...techniques that you'll learn as you go through this program. However, there are a couple of important JavaScript functions that are vital to functional programming that we should look at. These are the Array's .map() and .filter() methods.

## Array's .map() Method
If you're not familiar with JavaScript's Array .map() method, it gets called on an existing array and returns a new array based on what is returned from the function that's passed as an argument. Let's take a look:

        const names = ['Karen', 'Richard', 'Tyler'];

        const nameLengths = names.map( name => name.length );


## Array's .filter() Method
JavaScript's Array .filter() method is similar to the .map() method:

        it is called on an array
        it takes a function as an argument
        it returns a new array

The difference is that the function passed to .filter() is used as a test, and only items in the array that pass the test are included in the new array. Let's take a look at an example:

        const names = ['Karen', 'Richard', 'Tyler'];

        const shortNames = names.filter( name => name.length < 6 );

Just as before, we have the starting array:

        const names = ['Karen', 'Richard', 'Tyler'];

We call .filter() on the names array and pass it a function as an argument:

        names.filter( name => name.length < 6 );

Again, just like with .map() the arrow function that's passed to .filter() gets called for each item in the names array. The first item (i.e. 'Karen') is stored in the name variable. Then the test is performed - this is what's doing the actual filtering. It checks the length of the name. If it's 6 or greater, then it's skipped (and not included in the new array!). But if the length of the name is less than 6, then name.length < 6 returns true and the name _is_ included in the new array!

And lastly, just like with .map() the .filter() method returns a new array instead of modifying the original array:

        const shortNames = names.filter( name => name.length < 6 );

So shortNames will be the new array ['Karen', 'Tyler']. Notice that it only has two names in it now, because 'Richard' is 7 characters and was filtered out.

This was just a brief overview of how the .filter() method works. For a deeper dive, check out .filter() on MDN.

## Combining .map() And .filter() Together

What makes .map() and .filter() so powerful is that they can be combined. Because both methods return arrays, we can chain the method calls together so that the returned data from one can be a new array for the next.

        const names = ['Karen', 'Richard', 'Tyler'];

        const shortNamesLengths = names.filter( name => name.length < 6 ).map( name => name.length );

To break it down, the names array is filtered, which returns a new array, but then .map() is called on that new array, and returns a new array of its own! This new array that's returned from .map() is what's stored in shortNamesLengths.

### .filter() First!
On a side note, you'll want to run things in this order (.filter() first and then .map()). Because .map() runs the function once for each item in the array, it will be faster if the array were already filtered.