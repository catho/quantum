[![Quantum CI - publish](https://github.com/catho/quantum/actions/workflows/actions-publish.yml/badge.svg)](https://github.com/catho/quantum/actions/workflows/actions-publish.yml)
[![npm version](https://badge.fury.io/js/%40catho%2Fquantum.svg)](https://badge.fury.io/js/%40catho%2Fquantum)
[![All Contributors](https://img.shields.io/badge/all_contributors-13-orange.svg?style=flat-square)](#contributors)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

<div align="center">
  <img src="https://assets.catho.com.br/quantum/quantum_logo.svg" height="80" width="200">
</div>

**Quantum** is a react component library that dictates Catho Frontend applications.

> **Warning**
> Quantum requires react@16.14.0 or higher.

## Notices ⚠️

For performance and long-term maintenance reasons, we do not recommend using [MUI](https://mui.com/material-ui/getting-started/) in Quantum components implementation. MUI is present in our library only to allow the use of [Material Icons](https://mui.com/material-ui/material-icons/).

We also do not recommend using any other ready-made component libraries. We suggest that new components have their DOM structure, styling and functionalities completely implemented internally, that is, without dependence on third-party libraries.

For more details, visit the "Important notices" section at [CONTRIBUTING.MD](https://github.com/catho/quantum/blob/master/CONTRIBUTING.MD#important-notices)

## Getting started

Quantum is available as an [npm package](https://github.com/catho/quantum/pkgs/npm/quantum). It can be installed using:

```sh
yarn add @catho/quantum styled-components
# or npm install @catho/quantum styled-components
```

In order to use a component, it need to be imported in your project as follow:

```jsx
import { Button } from '@catho/quantum';
// or import Button from '@catho/quantum/Button';
```

The list of all components and their documentation can be found at [**our storybook**](https://catho.github.io/quantum/)

## Contributing

- Check the [issues](https://github.com/catho/quantum/issues) to ensure that there is not someone already working on it.
- Check our [contribution guide](https://github.com/catho/quantum/blob/master/CONTRIBUTING.MD).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/ddsilva"><img src="https://avatars1.githubusercontent.com/u/755101?v=4" width="100px;" alt=""/><br /><sub><b>Daniel Silva</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=ddsilva" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=ddsilva" title="Code">💻</a> <a href="#ideas-ddsilva" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Addsilva" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=ddsilva" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://twitter.com/ggdaltoso"><img src="https://avatars0.githubusercontent.com/u/6536985?v=4" width="100px;" alt=""/><br /><sub><b>Gabriel Daltoso</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=ggdaltoso" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=ggdaltoso" title="Code">💻</a> <a href="#ideas-ggdaltoso" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Aggdaltoso" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=ggdaltoso" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://twitter.com/_allyssonsantos"><img src="https://avatars1.githubusercontent.com/u/13424727?v=4" width="100px;" alt=""/><br /><sub><b>Allysson dos Santos</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=allyssonsantos" title="Code">💻</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Aallyssonsantos" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=allyssonsantos" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=allyssonsantos" title="Tests">⚠️</a> <a href="#ideas-allyssonsantos" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/alan-oliv"><img src="https://avatars3.githubusercontent.com/u/4368481?v=4" width="100px;" alt=""/><br /><sub><b>Alan Oliveira</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=alan-oliv" title="Code">💻</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Aalan-oliv" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=alan-oliv" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=alan-oliv" title="Tests">⚠️</a> <a href="#ideas-alan-oliv" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/rapahaeru"><img src="https://avatars3.githubusercontent.com/u/3389749?v=4" width="100px;" alt=""/><br /><sub><b>Raphael Oliveira</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=rapahaeru" title="Code">💻</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Arapahaeru" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=rapahaeru" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=rapahaeru" title="Tests">⚠️</a> <a href="#ideas-rapahaeru" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://github.com/renatogalvones"><img src="https://avatars0.githubusercontent.com/u/302819?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Renato Galvão</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=renatogalvones" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=renatogalvones" title="Code">💻</a> <a href="#ideas-renatogalvones" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Arenatogalvones" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=renatogalvones" title="Tests">⚠️</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/pedrohmorais"><img src="https://avatars1.githubusercontent.com/u/16689908?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Pedro Morais</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=pedrohmorais" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=pedrohmorais" title="Code">💻</a> <a href="#ideas-pedrohmorais" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Apedrohmorais" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=pedrohmorais" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/rodrigoclemente"><img src="https://avatars3.githubusercontent.com/u/45388027?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Rodrigo Clemente</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=rodrigoclemente" title="Documentation">📖</a> <a href="https://github.com/catho/quantum/commits?author=rodrigoclemente" title="Code">💻</a> <a href="#ideas-rodrigoclemente" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Arodrigoclemente" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=rodrigoclemente" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/tcelestino"><img src="https://avatars3.githubusercontent.com/u/190265?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Tiago Celestino</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=tcelestino" title="Code">💻</a> <a href="#ideas-tcelestino" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Atcelestino" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=tcelestino" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/luizjaccao"><img src="https://avatars2.githubusercontent.com/u/36733015?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Luiz Jacção</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=luizjaccao" title="Code">💻</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Aluizjaccao" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/alisson-suzigan"><img src="https://avatars2.githubusercontent.com/u/5255042?s=400&v=4" width="100px;" alt=""/><br /><sub><b>Alisson Suzigan</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=alisson-suzigan" title="Code">💻</a> <a href="#ideas-alisson-suzigan" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Aalisson-suzigan" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=alisson-suzigan" title="Tests">⚠️</a></td>
    <td align="center"><a href="https://github.com/toncabral88"><img src="https://avatars.githubusercontent.com/u/82893321?v=4" width="100px;" alt=""/><br /><sub><b>Ton Cabral</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=toncabral88" title="Code">💻</a>
    <a href="https://github.com/catho/quantum/commits?author=toncabral88" title="Documentation">📖</a> <a href="#ideas-toncabral88" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Atoncabral88" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=toncabral88" title="Tests">⚠️</a></td>
  </tr>
  <tr>
  <td align="center"><a href="https://github.com/matheusrpp"><img src="https://avatars.githubusercontent.com/u/85566581?v=4" width="100px;" alt=""/><br /><sub><b>Matheus Rodrigues</b></sub></a><br /><a href="https://github.com/catho/quantum/commits?author=toncabral88" title="Code">💻</a>
    <a href="https://github.com/catho/quantum/commits?author=matheusrpp" title="Documentation">📖</a> <a href="#ideas-matheusrpp" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/catho/quantum/pulls?q=is%3Apr+reviewed-by%3Amatheusrpp" title="Reviewed Pull Requests">👀</a> <a href="https://github.com/catho/quantum/commits?author=matheusrpp" title="Tests">⚠️</a></td></tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification.
<br>Contributions of any kind welcome!
