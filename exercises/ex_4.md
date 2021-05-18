# Exercise 4

In Exercise 3 we worked on firing a CustomEvent - here we will be handling it from withing another Web Component. We have a partially completed `<todo-notification>` component that we will be finishing. Once finished, this component will listen for the `todoItemToggled` event and will display a short notification before disappearing.

We will also be covering:

1. Internal State
1. Using `<slot>` to hold child nodes.
1. Some implications of the ShadowDOM regarding CSS

## 1. In your console

### Branch checkout

We will be using the branch `ex-4`:

```bash
git checkout -f ex-4
```

### Setting expectations

```bash
yarn test
```

#### Output

![Exercise 4 output](./ex_4_output.png)

The test is expecting an extra DOM node to be rendered to the wrapper after a click, and it isn't there.

### Run command

If your server isn't already started, start it.

```bash
yarn start
```

## 2. In your browser

This should look similar to how Exercise 3 began, except that we now have more `<todo-item>` elements on the page.

## 3. In your editor

1. Open `src/index.html`
1. We still have `<todo-item>`s, but they are children of the `<todo-notification>`

### Modifying the component definition

Here we will be making changes to `<todo-notification>`, since we already know that the event is being fired.

1. Open `src/components/todo-notification/todo-notification.tsx`

#### Templating with slots

Before we proceed with the modification, notice the `<slot></slot>` that is being rendered along with the rest of the JSX. This is [part of the Web Components API](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_templates_and_slots) and acts as a placeholder for any child content that gets passed in to the element. For example, if we had the following in our `index.html`:

```html
<todo-notification>
  <p>I am slotted content</p>
</todo-notification>
```

That `<p>` will **only** appear if the component definition renders a `<slot>`.

#### Using State

Another important callout in the component definition is the use of the `@State` decorator. Like React, any change to a state variable will trigger a re-render. Here we are using a stateful array called `toastMessages` to iteratively render content to the DOM, so any time we reassign that array variable we will be rendering different items.

```jsx
    {this.toastMessages.map( message =>
      <div class="toast">{message}</div>
    )}
```

In our event handler, we will have to modify the `toastMessages` state variable in order for this to work correctly.

#### Event handling

For simplicity, the `Listen` decorator has already been imported and we have it decorating a handler stub called `handleToggle`. To complete this function we need to:

1. Get the `name` out of the event detail and reassign a new array variable containing that `name`
1. Have some way of removing the notifications to prevent the screen from getting so cluttered
    - `setTimeout()` can be used for this


## Wrapping up

Once the event handler is properly set up, we should see a notification appear when we toggle an item, and disappear after 3 seconds. Once again, let's make sure we've satisfied the tests.

```bash
yarn test
```

