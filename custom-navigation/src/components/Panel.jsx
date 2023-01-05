import classNames from "classnames";

const Panel = ({ children, className, ...rest }) => {
  const classes = classNames(
    className,
    "w-full rounded border bg-white p-3 shadow"
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Panel;
