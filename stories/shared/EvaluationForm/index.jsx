import { Unstyled } from '@storybook/addon-docs';
import styled from 'styled-components';
import Accordion from '../../../components/Accordion';

const urlGenerator = (componentName) =>
  `https://docs.google.com/forms/d/e/1FAIpQLSewdS_VhSt_JSFOxiuiIc-auEj0MQwn_P_WiXYhAEAE1DqJhg/viewform?entry.1112120969=${componentName}`;

const IFrame = styled.iframe`
  width: 100%;
  height: 500px;
  border: 0;
  background-color: blue;
`;

const EvaluationForm = ({ componentName }) => (
  <Unstyled>
    <Accordion
      items={[
        {
          content: (
            <ul>
              <li>
                <IFrame
                  title="Rate our Documentation"
                  src={`${urlGenerator(componentName)}`}
                >
                  Carregando…
                </IFrame>
              </li>
            </ul>
          ),
          title: 'Rate our Documentation ⭐ ',
        },
      ]}
    />
  </Unstyled>
);

export default EvaluationForm;
