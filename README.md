# sports-backend

> API for Huddl App

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/sports-backend; npm install
    ```

3. Start your app

    ```
    npm start
    ```


## Users and Authentication

The authmanagement, users and authentication services implement the flows around creating users, verifying their email, and issuing them authentication tokens.

1. Creating a user
  Users can be created with a `POST` to the route `/users` with a payload like the following: 
    ```
      {
        "email": "grant.van.helsdingen@connecto.co.za",
        "password": "secret",
        "isAdmin": false,
        "isMerchant": true
      }
    ```
  This will trigger a post-creation hook to send a verification email to the user - using the authmanagement notifier. Currently the API is using `nodemailer-smtp-transport` library to send emails via AWS SES. This is currently in sandbox mode so only verified email addresses will work.

  Once a user is created and verified, JWT tokens can be issued via `POST` calls to `/authentication` with a payload:
    ```
    {
      "strategy": "local",
      "email": "gvanhels@gmail.com",
      "password": "test"
    }
    ```

## POSTman API Collection

  Example calls to the API are detailed in the `Sports Backend.postman_collection.json`. This can be imported into Postman and used to test the API.

## Models

  Currently, data models are persisted into a PostgreSQL database, using Sequelize as an ORM to interface with them. To learn more, see the documentatiom for Feathers Sequelize (https://github.com/feathersjs-ecosystem/feathers-sequelize), Sequelize (https://sequelize.org/) and PostgreSQL (https://www.postgresql.org/)
