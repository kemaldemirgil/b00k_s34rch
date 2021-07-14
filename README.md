<p align = "center"> <img src="/misc/jumbo-logo.PNG"/> </p>
<h3 align = "center">Google Book Search Application</h3>
 
<p align = "center">
  <img src="https://img.shields.io/npm/v/npm?color=red&logo=npm"/>
  <img src="https://img.shields.io/node/v/jest"/>
  <img src="https://img.shields.io/github/license/kemaldemirgil/b00k_s34rch?color=cyan&label=License&logo=github&logoColor=cyan"/>
  <img src="https://img.shields.io/github/issues/kemaldemirgil/b00k_s34rch?color=yellow&label=Issues&logo=github&logoColor=yellow">
  <img src="https://img.shields.io/github/last-commit/kemaldemirgil/b00k_s34rch?color=orange&label=Last%20Commit&logo=git&logoColor=orange">
</p>

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://g00gl3-b00ks.herokuapp.com/)



## About:
This application allows users to search for books, add them to their favorites and delete them. While the application uses the [Google Books API](https://developers.google.com/books/docs/v1/getting_started), the main purpose of this project was to convert a `RESTful` server to `GraphQL`.


## Usage:
Simply just create an account by signing in then, the option to save a book and view your saved books will be available. Otherwise, without creating an account, the user can still search for books but without the other functionalities.

## Dependencies:

#### Server

```js
"dependencies": {
    "apollo-server-express": "^2.25.2",
    "bcrypt": "^4.0.1",
    "express": "^4.17.1",
    "graphql": "^15.5.1",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^5.9.10"
  },
  "devDependencies": {
    "nodemon": "^2.0.3"
  }
```


#### Client

```js
"dependencies": {
    "@apollo/react-hooks": "^4.0.0",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
    "apollo-boost": "^0.4.9",
    "bootstrap": "^4.4.1",
    "graphql": "^15.5.1",
    "graphql-tag": "^2.12.5",
    "jwt-decode": "^2.2.0",
    "react": "^16.13.1",
    "react-bootstrap": "^1.0.1",
    "react-dom": "^16.13.1",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1"
  },
```

Also, using `concurrently` in the main directory to run both the server and the client.

## Images:
Searched Books
:---------:
![](/misc/ss.png) 

Saved Books        
:-------------------------:  
![](/misc/ss2.png) 




## Notes:
> Using `GraphQL` instead of the standard `RESTful` application definitely has some pros and cons. The good side of `GraphQL` is that the performance is greatly increased by only getting the data the user asks for. However, there is a learning curve which could take some time to get used to it but, once it's understood, the rest actually becomes very easy. It takes away the stress of creating routes, and it also divides some work to the `Front-End` as well. \
> Overall I think I'm going to use `GraphQL` whenever the application size is larger, but for smaller applications I'll still be using the classic `RESTful` methods.

## License:
Copyright © Kemal Demirgil. All rights reserved.
Licensed under the [MIT](https://github.com/kemaldemirgil/b00k_s34rch/blob/main/LICENSE) license.
