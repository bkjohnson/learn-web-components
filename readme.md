![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)

# Learn Web Components

This project is meant to serve as a way to learn how Web Components work and how to use them.
The intended audience is frontend engineers who have some familiarity with React, but not necessarily any familiarity with Web Components.

## Material

The only things needed for this project are a `yarn` installation. The main dependencies we wil be using are [Stencil](https://stenciljs.com) for building Web Components, and [NextJS](https://nextjs.org/) to set up a simple React app.

## Getting Started

After cloning the repo, run:

```bash
yarn
```

This will install all of the required dependencies.

To set up a simple dev server to serve static HTML pages, run:

```bash
yarn start
```

To build the components for production, run:

```bash
yarn build
```

To run the tests for the components, run:

```bash
yarn test
```

### React setup

The exercises can also be completed by using a React + NextJS app rather than the Stencil dev server.
To set this up:

```bash
cd src/react-app
yarn
yarn dev
```

## Exercises

This project is organized into several different exercises to teach the core concepts of Web Components and some Stencil features.

- [Exercise 1](./exercises/ex_1.md)
    - Use props on an already provided Web Component.

- [Exercise 2](./exercises/ex_2.md)
    - Add props to an existing Web Component definition.

- [Exercise 3](./exercises/ex_3.md)
    - Fire a Custom Event.

- [Exercise 4](./exercises/ex_4.md)
    - Handle Custom Events and use internal state.

- [Exercise 5](./exercises/ex_5.md)
    - Use a component lifecycle method and create a named `<slot>`.

- [Exercise 6](./exercises/ex_6.md)
    - Piece the components together to build a simple app that works in React and on a plain HTML page.
