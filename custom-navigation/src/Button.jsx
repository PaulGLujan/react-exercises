import PropTypes from "prop-types";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
}) => {
  return <button>{children}</button>;
};

Button.propTypes = {
  checkVariationValue: (
    { primary, secondary, success, warning, danger },
    _,
    componentName
  ) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      throw new Error(
        `Only one value of primary, secondary, success, warning, or danger can be passed into ${componentName}!`
      );
    }
  },
};

export default Button;
