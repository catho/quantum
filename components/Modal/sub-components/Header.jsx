import classNames from 'classnames';
import Card from '../../Card';
import styles from './ModalHeader.module.css';

const Header = ({ className = '', children, ...props }) => {
  const classContent = classNames(styles.header, className);
  return (
    <Card.Header className={classContent} {...props}>
      {children}
    </Card.Header>
  );
};

export default Header;
