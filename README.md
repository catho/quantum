# Quantum

This is the default pack of components and layout principles that dictates Catho Frontend applications.

[![build status](http://gitlab.devel/frontend-platform/quantum/badges/master/build.svg)](http://gitlab.devel/frontend-platform/quantum/commits/master)
[![coverage report](http://gitlab.devel/frontend-platform/quantum/badges/master/coverage.svg)](http://gitlab.devel/frontend-platform/quantum/commits/master)

## Instalation & Usage

To install quantum, you must add a .npmrc file at project root with this content:

```
registry="http://armazem.devel:4873/"
```

Then, it can be installed via npm or yarn.
```sh
yarn add @cathodevel/quantum
```

To use a component, it need to be imported in your project:

```js
import { Button } from 'quantum';
```

## Component creation
To start create a component, you should use the [component cli](http://gitlab.devel/frontend-platform/component-cli) tool, wich apply a default file structure defined by frontend platform team.

## Generate a build version
After create a component, it's necessary to generate a build version to be published on the registry. To do that, run the following command:

```
yarn build
```

## Contributing

- Check the [issues](http://gitlab.devel/frontend-platform/quantum/issues) to ensure that there is not someone already working on it
- Check our [contribution guide](http://gitlab.devel/frontend-platform/quantum/blob/master/CONTRIBUTING.MD)

### Technical prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

Clone this repository:
```sh
git clone http://gitlab.devel/frontend-platform/quantum
```

Access the folder and install the project's dependencies:
```sh
cd quantum && yarn
```

Before send a pull request, always runs the unit tests:
```sh
yarn test
```

