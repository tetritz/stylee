# @devtree/react-pack

<p align="center">
  <img src="https://img.shields.io/github/license/tetritz/aquamarine?style=for-the-badge" alt="License MIT">
</p>

This is NOT for PRODUCTION.\
Now it is in testing.
---

This package includes the shareable ESLint configuration,
Prettier configuration for React, Next.js <b>TypeScript</b> development.

## Installation
- Using npm:
```shell script
npm i @devtree/react-pack
```

- or using yarn:
```shell script
yarn add -D @devtree/react-pack
```

## Usage

### Basic usage
- `package.json`
```json
{
  "eslintConfig": {
    "extends": [
      "@devtree/react-pack/eslint/base"
    ]
  }
} 
```

- Or, `.eslintrc.json`
```json
{
  "extends": "@devtree/react-pack/base"
}
```

### Basic usage for Next.js
- `.eslintrc.json`
```json
{
  "extends": "@devtree/react-pack/next"
}
```

## Configuration Set

- @devtree/react-pack/base : for normal React projects.
- @devtree/react-pack/next : for Next.js projects.

## License

eslint-config-react-pack is licensed under the [MIT License.](https://github.com/tetritz/devtree/blob/main/LICENSE)
