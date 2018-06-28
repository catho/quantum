/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../Heading';
import AutoPropsApi from '../AutoPropsApi';
import ComponentPanel from '../ComponentPanel';
import { TabbedView, Tab } from '../TabbedView';
import Atom from '../../static/atom.svg';

const AutoExample = ({
  component: Component,
  componentProps: props,
  element = <Component {...props} />,
  name = element.type.displayName || element.type.name || element.type,
  importModules = name,
  additionalTabs,
}) => (
  <React.Fragment>
    <Heading name={name} image={Atom}>
      <TabbedView>
        <Tab title="Usage">
          <ComponentPanel component={element} importModules={importModules} />
        </Tab>

        <Tab title="API">
          <AutoPropsApi component={element.type} />
        </Tab>

        {additionalTabs}
      </TabbedView>
    </Heading>
  </React.Fragment>
);

AutoExample.defaultProps = {
  componentProps: {},
  additionalTabs: null,
};

AutoExample.propTypes = {
  component: PropTypes.instanceOf(Object).isRequired,
  componentProps: PropTypes.instanceOf(Object),
  element: PropTypes.instanceOf(Object),
  name: PropTypes.string,
  importModules: PropTypes.string,
  additionalTabs: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AutoExample.displayName = 'AutoExample';

export default AutoExample;
