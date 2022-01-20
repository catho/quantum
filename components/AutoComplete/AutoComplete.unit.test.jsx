import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { mount } from 'enzyme';
import AutoComplete from './AutoComplete';

const Examples = ['morango', 'melancia', 'maça', 'banana', 'laranja'];

describe('AutoComplete', () => {
  it('Should render Autocomplete', () => {
    const { container } = render(<AutoComplete suggestions={Examples} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render Autocomplete with dark skin', () => {
    const { container } = render(
      <AutoComplete skin="dark" suggestions={Examples} />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the AutoComplete open', () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    fireEvent.change(input, { target: { value: 'm' } });

    const autoCompleteOptions = screen.getAllByRole('listbox')[0];

    expect(autoCompleteOptions).toBeInTheDocument();
  });

  it('should open the options when input is clicked', () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    fireEvent.click(input);

    const autoCompleteOptions = screen.getAllByRole('listbox')[0];

    expect(autoCompleteOptions).toBeInTheDocument();
  });

  it('should select a item when is clicked', () => {
    render(<AutoComplete suggestions={Examples} />);
    const input = screen.getByRole('combobox');

    fireEvent.change(input, { target: { value: 'melanci' } });

    const melanciaOption = screen.getAllByRole('option', {
      name: /melancia/i,
    })[0];

    fireEvent.click(melanciaOption);

    expect(input.getAttribute('value')).toBe('melancia');
  });

  it('should close the options after item is clicked', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component
      .find('input')
      .simulate('change', { target: { value: 'melanci' } });

    expect(component.find('ul').exists()).toEqual(true);

    component.find('li').simulate('click');

    expect(component.find('ul').exists()).toEqual(false);
    component.unmount();
  });

  it('should close the options when there is no valid option', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component.find('input').simulate('change', { target: { value: 'mon' } });

    expect(component.find('ul').exists()).toEqual(false);
    component.unmount();
  });

  it('should clean input value when clicked in the x button', () => {
    const component = mount(<AutoComplete suggestions={Examples} />);
    component.find('input').simulate('change', { target: { value: 'mon' } });

    component.find('svg').simulate('click');

    expect(component.find('input').prop('value').length).toEqual(0);
    component.unmount();
  });

  it('should has an error icon when "error" prop is set', () => {
    const component = mount(
      <AutoComplete suggestions={Examples} error="error text" />,
    );
    const InputErrorIconElement = component.find('svg');

    expect(InputErrorIconElement).toHaveLength(1);
    component.unmount();
  });

  it('should call selectedItemMock callback when prop is setted', () => {
    const selectedItemMock = jest.fn();
    const component = mount(
      <AutoComplete suggestions={Examples} selectedItem={selectedItemMock} />,
    );
    component.find('input').simulate('change', { target: { value: 'mora' } });

    expect(selectedItemMock).toHaveBeenCalled();
  });

  it('should call selectedItemMock callback when prop is setted and user selected a option', () => {
    const selectedItemMock = jest.fn();
    const component = mount(
      <AutoComplete suggestions={Examples} selectedItem={selectedItemMock} />,
    );
    component
      .find('input')
      .simulate('change', { target: { value: 'melanci' } });

    component.find('li').simulate('click');

    expect(selectedItemMock).toHaveBeenCalled();
    component.unmount();
  });

  it('should has an helper text prop is set', () => {
    const component = mount(
      <AutoComplete suggestions={Examples} helperText="helper text" />,
    );

    expect(component.find('HelperText').exists()).toEqual(true);
    component.unmount();
  });
});
