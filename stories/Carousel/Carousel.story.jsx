import React from 'react';
import { storiesOf } from '@storybook/react';
// import {
//   Tab,
//   Example,
//   AutoExample,
//   Title,
//   StoryContainer,
// } from '@catho/quantum-storybook-ui';
// import { colors, baseFontSize, spacing } from '../../components/shared/theme';
import Carousel from '../../components/Carousel';
// import { Container } from '../../components/Grid';

// const i18nEsp = {
//   paginationPreposition: 'en',
//   nextWord: 'Siguiente',
// };

// const exampleTab = (
//   <Tab title="Example">
//     <StoryContainer>
//       <Container fluid>
//         <Title as="h2">using i18n with spanish</Title>
//         <Example
//           component={
//             <Stepper
//               i18n={i18nEsp}
//               index={2}
//               total={6}
//               currentStepText="Salarios / beneficios"
//               nextStepText="Contrato / sitio"
//             />
//           }
//           code={
//             "<Stepper i18n={{ paginationPreposition: 'en', nextWord: 'Siguiente' }} index={2} total={6} currentStepText='Salarios / beneficios' nextStepText='Contrato / sitio' />}"
//           }
//         />
//       </Container>
//     </StoryContainer>
//   </Tab>
// );

const content = [
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '1 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '2 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '3 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '4 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '5 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '6 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '7 Lorem ipsum dolor avec celestium of soterum',
  },
  {
    imagePath: 'https://picsum.photos/192/104',
    imageDescription: 'a11y image description',
    title: 'carousel title',
    description: '8 Lorem ipsum dolor avec celestium of soterum',
  },
];

storiesOf('Carousel', module).add('Carousel', () => (
  <>
    <Carousel cards={content} />
  </>
));
