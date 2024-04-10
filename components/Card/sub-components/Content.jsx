import classNames from 'classnames';
import styles from './Content.module.css';

const Content = ({ className = '', children, ...props }) => {
  const classContent = classNames(className, styles.content);
  return (
    <div className={classContent} {...props}>
      {children}
    </div>
  );
};

Content.displayName = 'Card.Content';

export default Content;
