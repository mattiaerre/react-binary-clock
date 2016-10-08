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
npm i -D babel-eslint eslint eslint-config-opentable eslint-plugin-react eslint-plugin-import
```

```bash
touch .babelrc
touch .eslintrc
```

```bash
npm i -D enzyme chai-enzyme
npm i -D react-addons-test-utils
```

```json
{
  "test": "mocha --compilers js:babel-core/register --compilers jsx:babel-register"
}
```
> The command above enables you to watch also .jsx files when you use the `--watch` flag w/ mocha
