import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button component', () => {
  const stub = jest.fn();

  it('Should match the snapshot', () => {
    const tree = renderer.create(<Button>Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot when passed disabled prop', () => {
    const tree = renderer.create(<Button disabled>Disabled</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot when passed type prop equals button', () => {
    const tree = renderer.create(<Button type="button">Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot when passed type prop equals submit', () => {
    const tree = renderer.create(<Button type="submit">Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should match the snapshot when passed type prop equals reset', () => {
    const tree = renderer.create(<Button type="reset">Text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Should execute callback function when click on Button', () => {
    shallow(<Button onClick={stub}>Text</Button>).simulate('click');
    expect(stub).toHaveBeenCalledTimes(1);
  });
});
