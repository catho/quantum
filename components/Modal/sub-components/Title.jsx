import classNames from 'classnames';
import Card from '../../Card';
import styles from './Title.module.css';

const Title = ({ className = '', children, ...props }) => {
  const classContent = classNames(styles.title, className);
  return (
    <Card.Title className={classContent} {...props}>
      {children}
    </Card.Title>
  );
};

export default Title;
