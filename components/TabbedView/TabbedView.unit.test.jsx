import { fireEvent, render, screen } from '@testing-library/react';
import TabbedView from './TabbedView';
import Tab from './Tab';
import Badge from '../Badge';
import Icon from '../Icon';

const badge = <Badge number={4} />;
const icon = <Icon name="star" />;

describe('<TabbedView /> ', () => {
  describe('Snapshot', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <TabbedView>
          <TabbedView.Tab title="example">
            <p>Example text</p>
          </TabbedView.Tab>
        </TabbedView>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
    it('should match snapshot with fluid option', () => {
      const { container } = render(
        <TabbedView fluid>
          <Tab title="Candidates">Candidates content</Tab>
          <Tab title="Companies">Companies content</Tab>
          <Tab title="Education">Education content</Tab>
        </TabbedView>,
      );

      expect(container.firstChild).toMatchSnapshot();
    });
    it('should match snapshot with badges and icons', () => {
      const { container } = render(
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

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('Active Tab', () => {
    it('should have first Tab active', () => {
      render(
        <TabbedView>
          <Tab title="Candidatos">Candidatos content</Tab>
          <Tab title="Empresas">Empresas content</Tab>
          <Tab title="Educação">Educação content</Tab>
        </TabbedView>,
      );

      expect(screen.getByText('Candidatos content')).toBeInTheDocument();
      expect(screen.queryByText('Empresas content')).not.toBeInTheDocument();
      expect(screen.queryByText('Educação content')).not.toBeInTheDocument();
    });

    it('should change active tab when another Tab is clicked', async () => {
      render(
        <TabbedView>
          <Tab title="Candidatos">Candidatos content</Tab>
          <Tab title="Empresas">Empresas content</Tab>
          <Tab title="Educação">Educação content</Tab>
        </TabbedView>,
      );

      const secondNavItem = screen.getByRole('tab', { name: /Empresas/i });

      fireEvent.click(secondNavItem);

      expect(screen.queryByText('Candidatos content')).not.toBeInTheDocument();
      expect(screen.getByText('Empresas content')).toBeInTheDocument();
      expect(screen.queryByText('Educação content')).not.toBeInTheDocument();
    });

    it('should have pre selected Tab', () => {
      render(
        <TabbedView activeTab="Educação">
          <Tab title="Candidatos">Candidatos content</Tab>
          <Tab title="Empresas">Empresas content</Tab>
          <Tab title="Educação">Educação content</Tab>
        </TabbedView>,
      );

      expect(screen.queryByText('Candidatos content')).not.toBeInTheDocument();
      expect(screen.queryByText('Empresas content')).not.toBeInTheDocument();
      expect(screen.getByText('Educação content')).toBeInTheDocument();
    });

    it('should render a tab with title and children', () => {
      render(<Tab title="Candidates">Candidates content</Tab>);
      expect(screen.getByText('Candidates content')).toBeInTheDocument();
    });
  });

  describe('events', () => {
    const onTabClickEventMock = jest.fn();

    it('should trigger the callback when the tab is clicked', () => {
      render(
        <TabbedView onTabClick={onTabClickEventMock}>
          <Tab title="Candidates">Candidates content</Tab>
          <Tab title="Companies">Companies content</Tab>
          <Tab title="Education">Education content</Tab>
        </TabbedView>,
      );

      const secondNavItem = screen.getByRole('tab', { name: /Companies/i });

      fireEvent.click(secondNavItem);

      expect(onTabClickEventMock).toHaveBeenCalled();
    });
  });
});
