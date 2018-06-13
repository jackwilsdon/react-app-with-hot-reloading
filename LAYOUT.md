# Layout

The layout is focused around grouping code into "features", such as "counter", "authentication", etc.

Within each feature folder, there are a few folders;
 * `components`: Any components this feature provides.
 * `ducks`: Redux actions, selectors and reducers (inspired by [ducks-modular-redux](https://github.com/erikras/ducks-modular-redux) and [re-ducks](https://github.com/alexnm/re-ducks)).

This is just a suggestion and doesn't have to be followed everywhere.

Styles should be housed next to the components that use them, making it easier to locate styles.

```
src/
├── app
│   ├── components
│   │   ├── App
│   │   │   ├── App.css
│   │   │   ├── App.js
│   │   │   ├── App.test.js
│   │   │   └── index.js
│   │   ├── HotApp.js
│   │   └── index.js
│   └── index.js
├── assets
│   └── logo.svg
├── counter
│   ├── components
│   │   ├── Counter
│   │   │   ├── Counter.css
│   │   │   ├── Counter.js
│   │   │   └── index.js
│   │   └── index.js
│   ├── ducks
│   │   ├── actions.js
│   │   ├── index.js
│   │   ├── reducer.js
│   │   ├── reducer.spec.js
│   │   └── selectors
│   │       ├── getValue.js
│   │       ├── getValue.spec.js
│   │       └── index.js
│   └── index.js
├── index.css
├── index.js
└── redux
    ├── actions.js
    ├── createStore.js
    ├── index.js
    └── reducer.js
```
