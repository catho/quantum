import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import SubHeader from './SubHeader';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

ContentBox.displayName = 'Content';

class Content extends React.Component {
  _renderContent = ({ content, header, subheader }) => {
    const renderHeader =
      typeof content !== 'string' && content.header ? content.header : header;
    const renderSubHeader =
      typeof content !== 'string' && content.subheader
        ? content.subheader
        : subheader;

    if (typeof content === 'string' && content.length > 0) {
      return <Header>{content}</Header>;
    }

    return (
      <React.Fragment>
        <Header>{renderHeader}</Header>

        {renderSubHeader && <SubHeader>{renderSubHeader}</SubHeader>}
      </React.Fragment>
    );
  };

  render() {
    const { content, children, header, subheader } = this.props;

    return (
      <ContentBox>
        {children || this._renderContent({ content, header, subheader })}
      </ContentBox>
    );
  }
}

Content.defaultProps = {
  subheader: '',
  header: '',
  content: '',
  children: null,
};

Content.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      header: PropTypes.string,
      subheader: PropTypes.string,
    }),
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Content.displayName = 'List.Content';

export default Content;
