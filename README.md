# Catho Style Guide

This is the default pack of components and layout principles that dictates Catho Frontend applications.

## Instalation & Usage

To install the style guide, you must add a .npmrc file at project root with this content:

```
registry="http://armazem.devel:4873/"
```

Then, it can be installed via npm or yarn.
```sh
npm install @cathodevel/style-guide
```

To use a component, it need to be imported in your project:

```js
import { Header } from '@cathodevel/style-guide';
```

## Component creation
To start create a component, you should use the [component cli](http://gitlab.devel/frontend-platform/component-cli) tool, wich apply a default file structure defined by frontend platform team.


## Contributing

- Check the [issues](http://gitlab.devel/frontend-platform/style-guide/issues) to ensure that there is not someone already working on it
- Check our [contribution guide](http://gitlab.devel/frontend-platform/style-guide/blob/master/CONTRIBUTING.MD)

### Technical prerequisites
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)

Clone this repository:
```sh
git clone http://gitlab.devel/frontend-platform/style-guide
```

Access the folder and install the project's dependencies:
```sh
cd style-guide && npm install
```

Before send a pull request, always runs the unit tests:
```sh
npm test
```

