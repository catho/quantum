import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-size: ${props => (props.small ? '20px' : '24px')};
`;

Title.displayName = 'Card.Title';

Title.propTypes = {
  small: PropTypes.bool,
};

Title.defaultProps = {
  small: false,
};

export default Title;
