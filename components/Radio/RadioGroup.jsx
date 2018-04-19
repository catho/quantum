import PropTypes from 'prop-types';
import styled from 'styled-components';

const RadioGroup = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: 20px;
  }

  ${props => props.inline && `
    align-items: unset;
    display: inline-block;
    flex-direction: unset;
  `}
`;

RadioGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default RadioGroup;
