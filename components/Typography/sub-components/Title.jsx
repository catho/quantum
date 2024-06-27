import classNames from 'classnames';

const Title = ({ className = '', children, ...props }) => {
  const classContent = classNames(className);
  return (
    <h1 className={classContent} {...props}>
      {children}
    </h1>
  );
};

export default Title;
