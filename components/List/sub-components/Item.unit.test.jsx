import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Item from './Item';
import Content from './Content';

const content = 'content';
const icon = 'icon';
const header = 'header';
const subheader = 'subheader';

describe('<Item />', () => {
  it('Should match the snapshot', () => {
    const wrapper = mount(<Item />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render an Item with icon', () => {
    const wrapper = mount(<Item icon={icon} />);

    expect(wrapper.find('ItemIcon')).toHaveLength(1);
  });

  it('render Content component', () => {
    const wrapper = mount(<Item content={content} />);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('accept any children as a content', () => {
    const wrapper = mount(<Item>{content}</Item>);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Content)).toHaveLength(0);
  });

  it('render Content, Header and SubHeader components', () => {
    const wrapper = mount(<Item content={{ header, subheader }} />);

    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.render().text()).toContain(header);
    expect(wrapper.render().text()).toContain(subheader);
  });
});
