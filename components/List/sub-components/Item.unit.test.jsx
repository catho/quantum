import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';
import Content from './Content';

const content = 'content';
const icon = 'icon';
const header = 'header';
const subheader = 'subheader';

describe('<Item />', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<Item />)).toMatchSnapshot();
  });

  it('render an Item with icon', () => {
    const wrapper = shallow(<Item icon={icon} />);

    expect(wrapper.find('ItemIcon')).toHaveLength(1);
  });

  it('render Content component', () => {
    const wrapper = shallow(<Item content={content} />);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Content)).toHaveLength(1);
  });

  it('accept any children as a content', () => {
    const wrapper = shallow(<Item>{content}</Item>);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Content)).toHaveLength(0);
  });

  it('render Content, Header and SubHeader components', () => {
    const wrapper = shallow(<Item content={{ header, subheader }} />);

    expect(wrapper.find(Content)).toHaveLength(1);
    expect(wrapper.render().text()).toContain(header);
    expect(wrapper.render().text()).toContain(subheader);
  });
});
