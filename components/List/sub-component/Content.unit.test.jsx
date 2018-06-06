import React from 'react';
import { shallow } from 'enzyme';
import Content from './Content';
import Header from './Header';
import SubHeader from './SubHeader';

const content = 'content';
const header = 'header';
const subheader = 'subheader';

describe('Content component', () => {
  it('Should match the snapshot', () => {
    expect(shallow(<Content />)).toMatchSnapshot();
  });

  it('render Header component', () => {
    const wrapper = shallow(<Content content={content} />);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('accept any children as a content', () => {
    const wrapper = shallow(<Content>{content}</Content>);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Header)).toHaveLength(0);
  });

  it('render Header and SubHeader components', () => {
    const contentWrapper = shallow(<Content content={{ header, subheader }} />);
    const propWrapper = shallow(<Content header={header} subheader={subheader} />);

    expect(contentWrapper.find(Header)).toHaveLength(1);
    expect(contentWrapper.render().text()).toContain(header);
    expect(contentWrapper.find(SubHeader)).toHaveLength(1);
    expect(contentWrapper.render().text()).toContain(subheader);

    expect(propWrapper.find(Header)).toHaveLength(1);
    expect(propWrapper.render().text()).toContain(header);
    expect(propWrapper.find(SubHeader)).toHaveLength(1);
    expect(propWrapper.render().text()).toContain(subheader);
  });
});
