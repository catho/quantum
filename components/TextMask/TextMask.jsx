import React from 'react';
import PropTypes from 'prop-types';
import { conformToMask } from 'react-text-mask';
import TextMaskTypes from './TextMaskTypes';

class TextMask extends React.Component {
  static CEP = TextMaskTypes.CEP;

  static CNPJ = TextMaskTypes.CNPJ;

  static CPF = TextMaskTypes.CPF;

  static Date = TextMaskTypes.Date;

  static Phone = TextMaskTypes.Phone;

  render() {
    const { children, text, mask } = this.props;
    const input = text || children;

    return mask ? conformToMask(input, mask).conformedValue : input;
  }
}

TextMask.defaultProps = {
  text: '',
  children: '',
  mask: false,
};

TextMask.propTypes = {
  /** Value to be masked. If ommited, it will be the children prop. */
  text: PropTypes.string,
  children: PropTypes.string,
  /**
   * Mask must follow this [rules](https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#mask)
   */
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.shape({
      mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
      pipe: PropTypes.func,
    }),
  ]),
};

export default TextMask;
