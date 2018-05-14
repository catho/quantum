import React from 'react';
import renderer from 'react-test-renderer';
import Logo from './Logo';

describe('Logo component ', () => {
  it('Should match snapshot with default logo', () => {
    const logo = <Logo alt="Example" />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot with Candidate logo', () => {
    const logo = <Logo.Candidate />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot with Business logo', () => {
    const logo = <Logo.Business />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot with Education logo', () => {
    const logo = <Logo.Education />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot with Facebook logo', () => {
    const logo = <Logo.Facebook />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });

  it('Should match snapshot with Google logo', () => {
    const logo = <Logo.Google />;
    expect(renderer.create(logo).toJSON()).toMatchSnapshot();
  });
});
