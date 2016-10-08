# react-binary-clock

A binary clock is a clock that displays the time of day in a binary format.

> Sometimes, the elegant implementation is just a function.
>
> Not a method.
>
> Not a class.
>
> Not a framework.
>
> Just a function. 
>
> _John Carmack_

## How to demo

![demo](demo/react-binary-clock-demo.gif "demo")

```bash
npm i
npm start
```

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

```bash
npm un -D istanbul
npm i -D istanbul@^1.1.0-alpha.1
```

```json
{
  "test": "mocha --compilers js:babel-core/register --compilers jsx:babel-register"
}
```
> The command above enables you to watch also .jsx files when you use the `--watch` flag w/ mocha
