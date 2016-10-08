# react-binary-clock

A binary clock is a clock that displays the time of day in a binary format.

## How to React

```bash
yo bdd
```

```bash
npm i -S react react-dom
```

```bash
npm i -D webpack
npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-react
npm i -D babel-eslint eslint eslint-config-opentable eslint-plugin-react
npm i -D enzyme sinon-chai
```

```bash
touch .babelrc
touch .eslintrc
```

```bash
npm i -D react-addons-test-utils
```

```json
{
  "test": "mocha --compilers js:babel-core/register"
}
```