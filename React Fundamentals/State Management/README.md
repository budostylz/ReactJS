## State Management
https://youtu.be/XBLRVoSqzVs

https://youtu.be/DIaUp9kzG_0

## Contacts Project (Front End)
https://github.com/udacity/reactnd-contacts-app

## Contacts Project (Back End)
https://github.com/udacity/reactnd-contacts-server2

## The Backend Server
The Contacts app project that we're building is a front-end project. However, we'll eventually be storing the contacts on a backend server. Since we're only really focusing on the front-end for this course, we've gone ahead and built this server for you so you can focus on just the React parts of this program.

The server is just a simple Node/Express app. The repo for the project is at https://github.com/udacity/reactnd-contacts-server2. All you need to do is:

    clone the project with git clone https://github.com/udacity/reactnd-contacts-server2.git
    install the project dependencies with npm install
    start the server with node server.js

Once you've started the server, you can forget about it. The Contacts project we're working on will interact with this server, but we won't ever modify any of the server code.

 ## Running Two Servers

 At this point, you should be running two different servers on your local machine:

    Front-end development server: Accessible on port 3000 (with npm start or yarn start)
    Back-end server: Accessible on port 5001 (with node server.js)

Please be sure that both are running before moving on in this Lesson.

## Functions
https://youtu.be/KJfpF08R6bw

You'll be needing this contacts array in the following video:

        const contacts = [
        {
        "id": "karen",
        "name": "Karen Isgrigg",
        "handle": "karen_isgrigg",
        "avatarURL": "http://localhost:5001/karen.jpg"
        },
        {
        "id": "richard",
        "name": "Richard Kalehoff",
        "handle": "richardkalehoff",
        "avatarURL": "http://localhost:5001/richard.jpg"
        },
        {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
        }
        ];

This contacts array is just temporary. Eventually, we'll be retrieving and storing contacts on our backend server. As of right now, though, we don't know how or where to make network requests. We'll get to this soon, so just stick with this static list of contacts for now.

## Apps Are Running?
To follow along, make sure that both your Contacts app and the backend server are running.

https://youtu.be/jf1CJcJRjYU

https://youtu.be/mGe81Nl3zWU

https://youtu.be/knLnMTgn6a8

## Components and Props
https://reactjs.org/docs/components-and-props.html
