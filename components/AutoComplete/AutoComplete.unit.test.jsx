import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import AutoComplete from './AutoComplete';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

describe('AutoComplete', () => {
  it('Should render Autocomplete', () => {
    expect(
      renderer.create(<AutoComplete suggestions={Examples} />).toJSON(),
    ).toMatchSnapshot();
  });

  it('should render the AutoComplete open', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component.find('input').simulate('change', { target: { value: 'm' } });
    const autoCompleteOptions = component.find('ul');
    expect(autoCompleteOptions.exists()).toEqual(true);
    component.unmount();
  });

  it('should open the options when input is clicked', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component.find('input').simulate('click');
    expect(component.find('ul').exists()).toEqual(true);
    component.unmount();
  });

  it('should select a item when is clicked', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component
      .find('input')
      .simulate('change', { target: { value: 'melanci' } });
    component.find('li').simulate('click');

    expect(component.find('input').prop('value')).toEqual('melancia');
    component.unmount();
  });

  it('should close the options after item is clicked', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component
      .find('input')
      .simulate('change', { target: { value: 'melanci' } });
    component.find('li').simulate('click');

    expect(component.find('ul').exists()).toEqual(false);
    component.unmount();
  });
});
