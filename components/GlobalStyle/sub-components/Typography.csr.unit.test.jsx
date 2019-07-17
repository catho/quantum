import React from 'react';
import renderer from 'react-test-renderer';
import Typography from './Typography';

import { expectCSSMatches } from '../test.utils';

describe('Typography component', () => {
  it('Should add standart typeface on CSR via @import', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `@import url('https://fonts.googleapis.com/css?family=Nunito+Sans:400,600,700,400i,600i,700i&display=swap');`,
    );
  });

  it('Should set standard typeface', () => {
    renderer.create(<Typography />);

    expectCSSMatches(`* {
      font-family: 'Nunito Sans', sans-serif;
      line-height: 1.5;
    }`);
  });

  it('Should set h1 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(`h1 {
        -webkit-letter-spacing: 0.7px;
        -moz-letter-spacing: 0.7px;
        -ms-letter-spacing: 0.7px;
        letter-spacing: 0.7px;
        font-size: 48px;
      }`);
  });

  it('Should set h2 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `h2 {
        font-size: 36px;
        -webkit-letter-spacing: 0.5px;
        -moz-letter-spacing: 0.5px;
        -ms-letter-spacing: 0.5px;
        letter-spacing: 0.5px;
      }`,
    );
  });

  it('Should set h3 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `h3 {
        font-size: 28px;
        -webkit-letter-spacing: 0.4px;
        -moz-letter-spacing: 0.4px;
        -ms-letter-spacing: 0.4px;
        letter-spacing: 0.4px;
      }`,
    );
  });

  it('Should set h4 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `h4 {
        font-size: 24px;
        -webkit-letter-spacing: 0.4px;
        -moz-letter-spacing: 0.4px;
        -ms-letter-spacing: 0.4px;
        letter-spacing: 0.4px;
      }`,
    );
  });

  it('Should set h5 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `h5 {
        font-size: 20px;
        -webkit-letter-spacing: 0.3px;
        -moz-letter-spacing: 0.3px;
        -ms-letter-spacing: 0.3px;
        letter-spacing: 0.3px;
      }`,
    );
  });

  it('Should set h6 style', () => {
    renderer.create(<Typography />);

    expectCSSMatches(
      `h6 {
        font-size: 18px;
        -webkit-letter-spacing: 0.3px;
        -moz-letter-spacing: 0.3px;
        -ms-letter-spacing: 0.3px;
        letter-spacing: 0.3px;
      }`,
    );
  });
});
