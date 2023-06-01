import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseIcon from '../Icon';
import { colors } from '../shared/theme';

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 24px;
  height: 24px;
`;

const Icon = styled(BaseIcon).withConfig({
  shouldForwardProp: prop => prop !== 'inverted',
})`
  color: ${props => (props.inverted ? colors.neutral[900] : colors.neutral[0])};
`;

const IconDot = styled.span`
  position: absolute;
  width: 7px;
  height: 7px;
  border: solid 2px ${props => colors.neutral[props.inverted ? 0 : 1000]};
  top: 0;
  right: 0;
  border-radius: 100%;
  background-color: ${colors.error[700]};
`;

const Hamburger = ({
  showNotification,
  isOpened,
  inverted,
  ariaLabelDescription,
}) => {
  const Block = (
    <>
      {showNotification && (
        <IconDot aria-label={ariaLabelDescription} inverted={inverted} />
      )}
      <Icon name="menu" inverted={inverted} />
    </>
  );

  return (
    <Wrapper aria-live="polite">
      {isOpened ? <Icon name="close" inverted={inverted} /> : Block}
    </Wrapper>
  );
};

Hamburger.propTypes = {
  showNotification: PropTypes.bool,
  isOpened: PropTypes.bool,

  /** Swap background and text color */
  inverted: PropTypes.bool,
  ariaLabelDescription: PropTypes.string,
};

Hamburger.defaultProps = {
  inverted: false,
  showNotification: false,
  isOpened: false,
  ariaLabelDescription: 'There are new notifications',
};

export default Hamburger;
