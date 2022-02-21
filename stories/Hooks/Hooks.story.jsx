import { Heading } from '@catho/quantum-storybook-ui';
import UseMaxWidthMediaQueryExample from './Examples/UseMaxWidthMediaQueryExample';

export default {
  title: 'Hooks ',
};

export const useMaxWidthMediaQuery = () => (
  <>
    <Heading title="UseMaxWidthMediaQuery" />
    <UseMaxWidthMediaQueryExample />
  </>
);

useMaxWidthMediaQuery.story = {
  name: 'useMaxWidthMediaQuery',
};
