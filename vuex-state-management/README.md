# state-management-vuex

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### State management with [vuex](https://vuex.vuejs.org/)

```sh
npm install vuex@next --save
```

vuex is a library for managing global state.

What's a state?
State could simply be translated with data. Data your application needs and data that affects what the user sees on the screen. State can be thought of as reactive data, data which may change and where such changes then should trigger something on the screen.

Two main kinds of state:

1. Local State: Data we manage inside of one component, which only affects this one component and possibly, indirectly through props also a child component
2. Global State: Data that affects multiple components, possibly the entire app. Data that we need in a lot of different places.
