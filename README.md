#Books dot com

Books is a MERN stack web app for finding and reviewing books. The front end is built in React, with Material UI and Tailwind CSS. The back-end API is built in the Node runtime with Express.js. Data and authentication via MongoDB and JWT. The search functionality is made possible by the Open Library API. 
The app is actually two apps disguised in a trench coat: a front-end React client and a back-end Node/Express server.
The Stack
For those not in the know, MERN is an acronym representing MongoDB, Express, React, and NodeJS. It's a spinoff of MEAN (which uses Angular instead of React). So why did I use it for this app?
published


##The Stack

###MongoDB
Mongo is a NoSQL database solution. I opted to use it for this project as I had not yet started working with SQL, and Mongo works great with JavaScript backends out of the box. The hardest part was setting up data models to keep data structured properly.
Express
Express is a Node package for building fast, high-powered APIs in JavaScript. It's the go-to for Node APIs anyway, but I was sold on its inclusion of middleware. Since Books.com uses separate front-end and back-end apps I needed to use the CORS middleware to simplify handling API calls from the React app. 
React
Learning to use React was a big part of why I started this project. As component-based JavaScript frameworks go I found it to be very intuitive, especially compared with some more "powerful" options like Next or .NET. 
I was satisfied enough with React as a tool that I used it to build this website.
Node
Node is the beating heart of books.com. It needs no explanation beyond stating that JavaScript would be a much less useful language without it!
Open Library
Alongside the custom API I built for passing data between MongoDB and React I used the Open Library API to allow users to search its massive pre-existing data for new books to add.
I didn't finish adding the functionality for users to add books from the Open Library to their lists, but the user can enter search terms that will query the API and return a list of books that match. The Open Library also has a book cover API, which I use to fill the book preview cards. 
If I come back to this project I would like to make the Open Library API more central to the experience; probably by making a more sophisticated search function with filters, and by removing the user's ability to manually add books, making them use data from Open Library as a starting point.
