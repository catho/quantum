import React from 'react';
import renderer from 'react-test-renderer';
import FooterSection from './FooterSection';

let defaultProps;

beforeEach(() => {
  defaultProps = {
    data: {
      title: 'Candidatos',
      theme: {
        primaryColor: '#005da4',
        secondaryColor: '#666666',
        titleFontSize: '14px',
        titleFontWeight: 'bold',
        linkFontSize: '12px',
      },
      linkGroups: [{
        id: 1,
        sideSeparator: true,
        cols: 4,
        links: [{
          id: 1,
          title: true,
          text: 'Buscar vagas',
          href: null,
          target: null,
          img: null,
        }],
      }],
    },
  };
});

describe('Default props', () => {
  it('Should match the snapshot', () => {
    const footerSection = <FooterSection data={defaultProps.data} />;
    const tree = renderer.create(footerSection).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('When do not have title', () => {
  it('Should match the snapshot', () => {
    defaultProps.data.title = null;

    const footerComponent = <FooterSection data={defaultProps.data} />;
    const tree = renderer.create(footerComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
