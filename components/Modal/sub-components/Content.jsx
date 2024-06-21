import classNames from 'classnames';
import Card from '../../Card';
import styles from './ModalContent.module.css';

const Content = ({ className = '', children, ...props }) => {
  const classContent = classNames(styles.content, className);
  return (
    <Card.Content className={classContent} {...props}>
      {children}
    </Card.Content>
  );
};

export default Content;
