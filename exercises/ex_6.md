# Exercise 6

This is the last exercise. We will be focusing on building comparable apps both in React and in a plain HTML page using the Stencil dev server.

There are no automated tests to pass.

## 1. In your console

### Branch checkout

We will be using the branch `ex-6`:

```bash
git checkout -f ex-6
```

### Run command

To start the React app follow the instructions in [the project readme](../readme.md#react-setup).

## 2. In your browser

1. Navigate to [http://localhost:3000](http://localhost:3000)
1. See the app on the page

## 3. In your editor

1. Open `src/react-app/pages/index.js`
1. Notice the `<app-shell>` component.

There is a bit of additional "magic" that lets Web Components work in a React app:

```js
import { defineCustomElements } from '../../../loader';

defineCustomElements();
```

The `loader` is a build output from Stencil containing all of the pieces for registering our custom components with the browser as well as lazy loading them on the page.

**Note:** `defineCustomElements()` doesn't need to be called in each file where a Web Component is in use, only in a module that appears on every page.

### Using named slots

We did this in the previous exercise, but let's explore this a bit more.

1. Open `src/index.html`
1. Place `<my-component>` in the `top` slot for `<app-shell>`
1. Place `<todo-completed>` in the `bottom` slot for `<app-shell>`

## Wrapping up

If you have been making your changes in `src/index.html`, copy them into `src/react-app/pages/index.js`. You should see that the app works identically in React as well as on a plain HTML page, provided that the Web Components have been defined with the browser's custom element registry.
