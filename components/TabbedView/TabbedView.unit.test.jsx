import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import TabbedView from './TabbedView';
import Tab from './Tab';
import { Badge, Icon } from '..';

const badge = <Badge number={4} />;
const icon = <Icon name="star" />;

describe('<TabbedView /> ', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const component = mount(
        <TabbedView>
          <TabbedView.Tab title="example">
            <p>Example text</p>
          </TabbedView.Tab>
        </TabbedView>,
      );

      expect(toJson(component)).toMatchSnapshot();
    });
    it('should match snapshot with badges and icons', () => {
      const component = mount(
        <TabbedView>
          <Tab title="With badge" badge={badge}>
            With badge content
          </Tab>
          <Tab title="With icon" icon={icon}>
            With icon content
          </Tab>
          <Tab title="With icon and badge" icon={icon} badge={badge}>
            With icon and badge content
          </Tab>
          <Tab title="With only text">With only text content</Tab>
        </TabbedView>,
      );

      expect(toJson(component)).toMatchSnapshot();
    });
  });

  describe('Active Tab', () => {
    const component = mount(
      <TabbedView>
        <Tab title="Candidatos">Candidatos content</Tab>
        <Tab title="Empresas">Empresas content</Tab>
        <Tab title="Educação">Educação content</Tab>
      </TabbedView>,
    );

    it('should have first Tab active', () => {
      expect(component.html()).toContain('Candidatos content');
      expect(component.html()).not.toContain('Empresas content');
      expect(component.html()).not.toContain('Educação content');
    });

    it('should change active tab when another Tab is clicked', () => {
      const secondNavItem = component.find('NavItem').at(1);

      secondNavItem.simulate('click');

      expect(component.html()).not.toContain('Candidatos content');
      expect(component.html()).toContain('Empresas content');
      expect(component.html()).not.toContain('Educação content');
    });

    it('should have pre selected Tab', () => {
      const wrapper = mount(
        <TabbedView activeTab="Educação">
          <Tab title="Candidatos">Candidatos content</Tab>
          <Tab title="Empresas">Empresas content</Tab>
          <Tab title="Educação">Educação content</Tab>
        </TabbedView>,
      );

      expect(wrapper.html()).not.toContain('Candidatos content');
      expect(wrapper.html()).not.toContain('Empresas content');
      expect(wrapper.html()).toContain('Educação content');
    });
  });
});
