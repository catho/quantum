import React from 'react';
import renderer from 'react-test-renderer';
import FooterLinkGroup from './FooterLinkGroup';

let defaultProps;

beforeEach(() => {
  defaultProps = {
    data: {
      hasSideSeparator: true,
      links: [{
        id: 1,
        href: 'http://foo.bar',
        isLinkImg: true,
        isTitle: true,
        imgSrc: 'http://foo.img',
        imgWidth: '20px',
        text: 'Link text',
      }],
    },
  };
});

describe('Default props', () => {
  it('Should match the snapshot', () => {
    const footerComponent = <FooterLinkGroup data={defaultProps.data} />;
    const tree = renderer.create(footerComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('hasSideSeparator is false', () => {
  it('Should match the snapshot', () => {
    defaultProps.data.hasSideSeparator = false;

    const footerComponent = <FooterLinkGroup data={defaultProps.data} />;
    const tree = renderer.create(footerComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('IsLinking is false', () => {
  it('Should match the snapshot', () => {
    defaultProps.data.links[0].isLinkImg = false;

    const footerComponent = <FooterLinkGroup data={defaultProps.data} />;
    const tree = renderer.create(footerComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

describe('IsTitle is false', () => {
  it('Should match the snapshot', () => {
    defaultProps.data.links[0].isTitle = false;

    const footerComponent = <FooterLinkGroup data={defaultProps.data} />;
    const tree = renderer.create(footerComponent).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
