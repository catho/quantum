import { render } from '@testing-library/react';

import Typography from './Typography';

import { expectCSSMatches } from '../../../test-utils/helpers/shared/test.utils';

describe('Typography component', () => {
  it('Should match snapshot', () => {
    expect(render(<Typography />).asFragment()).toMatchSnapshot();
  });

  it('Should set standard typeface', () => {
    render(<Typography />);

    expectCSSMatches(`* {
      font-family: 'Nunito Sans', sans-serif;
      line-height: 1.5;
    }`);
  });

  it('Should set h1 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h1{font-size:36px;-webkit-letter-spacing:0.25px;-moz-letter-spacing:0.25px;-ms-letter-spacing:0.25px;letter-spacing:0.25px;}@media (min-width:1024px){h1{-webkit-letter-spacing:0.72px;-moz-letter-spacing:0.72px;-ms-letter-spacing:0.72px;letter-spacing:0.72px;font-size:48px;}}`,
    );
  });

  it('Should set h2 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h2{font-size:32px;-webkit-letter-spacing:0.24px;-moz-letter-spacing:0.24px;-ms-letter-spacing:0.24px;letter-spacing:0.24px;}@media (min-width:1024px){h2{font-size:36px;-webkit-letter-spacing:0.54px;-moz-letter-spacing:0.54px;-ms-letter-spacing:0.54px;letter-spacing:0.54px;}}`,
    );
  });

  it('Should set h3 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h3{font-size:28px;-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}@media (min-width:1024px){h3{-webkit-letter-spacing:0.42px;-moz-letter-spacing:0.42px;-ms-letter-spacing:0.42px;letter-spacing:0.42px;}}`,
    );
  });

  it('Should set h4 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h4{font-size:24px;-webkit-letter-spacing:0.24px;-moz-letter-spacing:0.24px;-ms-letter-spacing:0.24px;letter-spacing:0.24px;}@media (min-width:1024px){h4{-webkit-letter-spacing:0.36px;-moz-letter-spacing:0.36px;-ms-letter-spacing:0.36px;letter-spacing:0.36px;}}`,
    );
  });

  it('Should set h5 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h5{font-size:20px;-webkit-letter-spacing:0.2px;-moz-letter-spacing:0.2px;-ms-letter-spacing:0.2px;letter-spacing:0.2px;}@media (min-width:1024px){h5{-webkit-letter-spacing:0.3px;-moz-letter-spacing:0.3px;-ms-letter-spacing:0.3px;letter-spacing:0.3px;}}`,
    );
  });

  it('Should set h6 style', () => {
    render(<Typography />);

    expectCSSMatches(
      `h6{font-size:18px;-webkit-letter-spacing:0.18px;-moz-letter-spacing:0.18px;-ms-letter-spacing:0.18px;letter-spacing:0.18px;}@media (min-width:1024px){h6{-webkit-letter-spacing:0.27px;-moz-letter-spacing:0.27px;-ms-letter-spacing:0.27px;letter-spacing:0.27px;}}`,
    );
  });
});
