import { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, baseFontSize } from '../../shared/theme';
import Header from './Header';
import SubHeader from './SubHeader';

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

ContentBox.displayName = 'Content';

class Content extends Component {
  _renderContent = ({ content, header, subheader, theme }) => {
    const renderHeader =
      typeof content !== 'string' && content.header ? content.header : header;
    const renderSubHeader =
      typeof content !== 'string' && content.subheader
        ? content.subheader
        : subheader;

    if (typeof content === 'string' && content.length > 0) {
      return <Header theme={theme}>{content}</Header>;
    }

    return (
      <>
        <Header theme={theme}>{renderHeader}</Header>

        {renderSubHeader && (
          <SubHeader theme={theme}>{renderSubHeader}</SubHeader>
        )}
      </>
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
  theme: {
    spacing,
    baseFontSize,
  },
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
  theme: PropTypes.shape({
    spacing: PropTypes.object,
    baseFontSize: PropTypes.number,
  }),
};

Content.displayName = 'List.Content';

export default Content;
