import SimpleCard from './examples/SimpleCard';
import JobAdCard from './examples/JobAdCard';
import AdvancedCard from './examples/AdvancedCard';
import Card from '../../components/Card';

export default {
  title: 'Card',
  component: Card,
};

export const Simple = () => <SimpleCard />;

export const JobAd = () => <JobAdCard />;

export const Advanced = () => <AdvancedCard />;
