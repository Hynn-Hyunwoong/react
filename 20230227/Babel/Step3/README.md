# Translate JSX Compaile via Babel

1. Package Install

```sh
npm init -y
npm install @babel/core @babel/cli @babel/preset-react
```

2. .babelrc

```json
{
    "presets" : ["@babel/preset-react"]
}
```

3. babel launch

```sh
npx babel app.js --out-file dist/app.js
```