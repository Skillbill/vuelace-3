[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/@skillbill%2Fvuelace-3.svg)](https://badge.fury.io/js/@skillbill%2Fvuelace-3)

![Vuelace-3](./src/stories/docs/public/assets/vuelace-logo.svg)

# Vuelace-3

Vuelace-3 is a powerful UI component library built on top of Shoelace, designed to streamline the process of creating beautiful and responsive user interfaces for Vue.js applications leveraging the reliability of web components

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run [Storybook](https://storybook.js.org/)

```sh
npm run storybook
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Installation

### Using npm

Vuelace-3 is available at [npm](https://www.npmjs.com/package/@skillbill/vuelace-3). To install the library inside your project run:

```sh
npm i @skillbill/vuelace-3
```

### Local installation

- download and build the library

```sh
npm i
npm run build
```

- install the library locally adding the following line to the dependecies inside your package.json

```js
   "@skillbill/vuelace-3": "file:/path/to/the/lib/vuelace-3"
```

## Usage

### Init

- import library style and install function inside your entry file (default is main.js for Vue-based projects)

```js
import { createApp } from 'vue'

import '@skillbill/vuelace-3/styles/vuelace.css'
import '@skillbill/vuelace-3/styles/theme_primevue.css'
import { installVuelace } from '@skillbill/vuelace-3'

import App from './App.vue'

const app = createApp(App)

installVuelace(app)

app.mount('#app')
```

### Add icons

By default, the library uses [Material Design Icons](https://pictogrammers.com/library/mdi/).
However, not all icons are available to mantain a lightweight package size.
It is possible to add/override current icons (icons must be svgs from any source) using the exposed functions:

Example adding an icon using MDI svgs

```js
import cat from '@mdi/svg/svg/cat.svg'
import { addIcon } from '@skillbill/vuelace-3'

addIcon('cat', cat)
```

Then the icon is available and can be used as follows:

```html
<VLIcon name="cat"></VLIcon>
```

### Customize colors

It is possible to customize colors overriding shoelace design [tokens](https://shoelace.style/getting-started/customizing) inside your .css

Example

```css
:root {
  --sl-color-primary-50: var(--color-purple-50);
  --sl-color-primary-100: var(--color-purple-100);
  --sl-color-primary-200: var(--color-purple-200);
  --sl-color-primary-300: var(--color-purple-300);
  --sl-color-primary-400: var(--color-purple-400);
  --sl-color-primary-500: var(--color-purple-500);
  --sl-color-primary-600: var(--color-purple-600);
  --sl-color-primary-700: var(--color-purple-700);
  --sl-color-primary-800: var(--color-purple-800);
  --sl-color-primary-900: var(--color-purple-900);
  --sl-color-primary-950: var(--color-purple-950);
}
```

## Contribution 🤝

We welcome contributions from the community. If you find any issues or have ideas for improvements, please open an issue or submit a pull request. 🤝
