# Notes web application

## Why did I do this ?

I wrote this small web application to gain more experience in working with a separate backend and frontend. That is, having a
REST API communicating over a network to an SPA running in the browser as opposed to MVC

## What frameworks did I use?

1. Frontend

- Written in TypeScript using React. I decided to use React even though I work with [Nextjs](https://nextjs.org/) professionally.
  I feel as though I skipped learning React and went straight into Nextjs with its opinionated way of doing things and all of its
  game changing features
- This is why I decided to use a Create React App instead
- I get to manually do client-side routing with react-router-dom v6.4
- I get to decide whether this app should even have server-side rendering. And I don't see the need for it
- Also to gain some TypeScript experience

2. Backend - Java

- I used SpringBoot 2.7.5 to make a REST API
- Spring Data JPA as an ORM
- Postgres instance running locally in a Docker container

3. Backend - C#

- .NET 6 REST API
- Entity Framework Core PostgreSQL package to use a Postgres database
- Postgres instance running in a Docker container locally to learn a little about Docker
- I had to take a database first approach since I already had a database with data from when I was developing this backend
  in SpringBoot.

## Why two backends?

- Even though I did an internship with .NET, I wanted to see how .NET 6 works and to start using C# again. As I would like to move
  towards being a backend engineer
- I wanted to see what Java backend development was like. I heard good things about SpringBoot and it definitely is quite a nice
  framework

## Futher improvements?

I find .NET more enjoyable and am going to continue this project in another repo. That being said, improvements are:

- I will start from scratch and will take a code first approach where I build out the entities and relationships and
  create a migration
- Add authentication and create notes for your specific user
- Authentication will be done with JWT tokens and having an `AuthController`
- Upon login, this JWT token will be saved in the browser and used for future requests for notes create, reading, updating and deleting.
