import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Content from './Content';
import Header from './Header';
import SubHeader from './SubHeader';

const content = 'content';
const header = 'header';
const subheader = 'subheader';

describe('<Content />', () => {
  it('Should match the snapshot', () => {
    const wrapper = mount(<Content />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('render Header component', () => {
    const wrapper = mount(<Content content={content} />);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('accept any children as a content', () => {
    const wrapper = mount(<Content>{content}</Content>);

    expect(wrapper.render().text()).toBe(content);
    expect(wrapper.find(Header)).toHaveLength(0);
  });

  it('render Header and SubHeader components', () => {
    const contentWrapper = mount(<Content content={{ header, subheader }} />);
    const propWrapper = mount(
      <Content header={header} subheader={subheader} />,
    );
    // ###
    // ###
    // ###
    // ### FAZER O HEADER E SUBHEADER FUNCIONAREM QDO PASSADO VIA PROPS
    // console.log('###### PROP', propWrapper.find(Header)).toHaveLength(2);

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
