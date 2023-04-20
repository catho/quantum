import SimpleCard from './examples/SimpleCard';
import JobAdCard from './examples/JobAdCard';
import AdvancedCard from './examples/AdvancedCard';
import Card from '../../components/Card';

export default {
  title: 'Card',
  component: Card,
};

const Wrapper = ({ children }) => (
  <div style={{ backgroundColor: '#1250C4', padding: 8 }}>{children}</div>
);

export const Simple = () => <SimpleCard />;

export const SimpleWithOpacity = () => (
  <Wrapper>
    <SimpleCard backgroundOpacity={0.5} />
  </Wrapper>
);

export const JobAd = () => <JobAdCard />;

export const Advanced = () => <AdvancedCard />;
