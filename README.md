# Learning JavaScript

Miscellaneous practice code in JS.

Just one of the things I'm learning. <https://github.com/hchiam/learning>

## How to Run .js Files Using Terminal/CommandLine:

Make sure to include console.log("output text here");

    node filename.js

## Learn about Modern ES6 JS Features

<https://stackoverflow.blog/2019/09/12/practical-ways-to-write-better-javascript>

Also note the stuff around the default values for function arguments here: <https://devhints.io/es6?ref=devawesome.io>

## Bonus

### Automatically format your code upon save

In VSCode: use the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension, and then in VSCode > Code > Preferences > Settings > search for "Format on save" > turn it on with the checkbox

Now it'll automatically format your code, just like the built-in stuff for [Golang](https://github.com/hchiam/learning-golang).

### Get immediate feedback on code errors and style

To automatically re-run a [.js file](https://github.com/hchiam/learning-js/tree/master/more-like-interview-questions) and the test cases in it whenever you edit that file, copy the .js code into [`index.js`](https://github.com/hchiam/learning-eslint-google/blob/master/index.js) in my [ESLint repo](https://github.com/hchiam/learning-eslint-google) and do the setup so you can run this command just once:

```bash
nodemon -x 'npm run lint; node index.js'
```

**_Or_** `nodemon -x 'npm run lint; npm run test; node index.js'`

This works just like [`rerun` for Python](https://github.com/hchiam/learning-python/blob/master/README.md#run-code-linter).

**Alternatively:**

To set up [eslint and jest](https://github.com/hchiam/eslint-and-jest) locally inside this learning-js folder:

```bash
npm install # eslint and jest-cli are already listed in package.json for you
npm test # runs scripts test command listed in package.json
```

**_Or_** just run this: [`jest`](https://github.com/hchiam/learning-jest).

**_Or_** to run just a-specific.test.js, run this: `jest a-specific.test.js`.

### Get code Maintainability Index (MI score)

The MI combines lines of code, cyclomatic complexity, and the Halstead volume metric (i.e. number of variables, operations, decision paths, and lines of code). After you [`npm install -g plato` or `yarn global add plato`](https://github.com/es-analysis/plato), you can get the MI score of your code:

```bash
plato -r -d report index.js
```

Similar to how I use [`radon`](https://github.com/hchiam/learning-python/#maintainability-index-mi-score) for Python code.

### Minify code

Install `minify`:

```bash
npm i minify -g # or: yarn global add minify
minify -v
```

Use `minify`:

```bash
minify minify-this-script.js > minified-script.js
```

### Using [`yarn`](https://github.com/hchiam/learning-yarn) instead of `npm`

```bash
yarn # instead of npm install or npm run install
yarn test # instead of npm test
```

Instead of `nodemon -x 'npm run test; node index.js'`, you can do:

```bash
nodemon -x 'yarn test; node index.js'
```

### Service Workers

Learning about them: <https://github.com/hchiam/learning-service-workers>

### A list of useful one-liner utilities

<https://1loc.dev/>

### Interesting [a11y](https://github.com/hchiam/web-accessibility-course-notes)-related JS code

<https://github.com/hchiam/keyboard-focus-trap>

<https://github.com/hchiam/flying-focus>

### More data structures/algorithms

<https://github.com/hchiam/learning-splay-tree>

<https://github.com/hchiam/learning-b-tree>

<https://github.com/hchiam/learning-skip-list>

<https://github.com/hchiam/learning-bloom-filter>

### Chrome dev tools tricks for more productive debugging

<https://blog.bitsrc.io/10-tips-to-improve-productivity-using-chrome-dev-tools-7918fc8203f3>

### Edit any website (temporarily on the client side)

Enter this into the console log in dev tools: `document.designMode='on'`
