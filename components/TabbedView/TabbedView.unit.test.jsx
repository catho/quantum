import React from 'react';
import { shallow } from 'enzyme';
import TabbedView from './TabbedView';
import Tab from './Tab';

describe('<TabbedView /> ', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const component = shallow(
        <TabbedView>
          <TabbedView.Tab title="example">
            <p>Example text</p>
          </TabbedView.Tab>
        </TabbedView>,
      );

      expect(component).toMatchSnapshot();
    });
  });

  describe('Active Tab', () => {
    const component = shallow(
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
      const wrapper = shallow(
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
