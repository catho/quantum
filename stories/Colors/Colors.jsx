import React from 'react';
import styled from 'styled-components';
import { Title, Subtitle } from '@catho-private/quantum-storybook-ui';

export default () => (
  <React.Fragment>
    <p>
      Catho has some segments, below you can see the
      <strong> Candidates</strong> default color palette.
    </p>

    <Title>Brand colors</Title>

    <Subtitle>Blue (500)</Subtitle>
    <p>
      É a brand color principal. Esta cor passa em AAA no contrast checker das
      diretrizes WCAG por isso pode ser usada em diversos contextos como botões,
      textos e headings, backgrounds, elementos gráficos e default states.
    </p>

    <Subtitle>Sky (500)</Subtitle>
    <p>
      Ë uma cor secundária que pode ser usada somente em elementos de apoio como
      backgrounds, elementos gráficos, ícones, strokes e estados informativos.
      Não é recomendado usar esta cor em textos e headings pois ela não passa no
      contrast checker da WCAG.
    </p>

    <Subtitle>Cobalt (500)</Subtitle>
    <p>
      É outra cor secundária que pode ser usada em elementos de suporte como
      backgrounds, elementos gráficos, ícones, textos e headings. Ela passa em
      AAA nas diretrizes WCAG e por isso também é indicada para textos.
    </p>

    <Subtitle>Pink (500)</Subtitle>
    <p>
      É usada principalmente em contextos de grande destaque como CTAs e
      highlights. Evitar usar em contextos onde não incitam ação ou destaque.
    </p>

    {/* <HowToImport importModules="Colors" /> */}
  </React.Fragment>
);
