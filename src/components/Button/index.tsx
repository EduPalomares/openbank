import { array, bool, func, object, oneOf, string, InferProps } from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from 'styles/theme';

const propTypes = {
  /** React children */
  children: array,
  /** Aditional Classes */
  className: string,
  /** Disabled */
  disabled: bool,
  /** Hidden */
  hidden: bool,
  /** Name */
  name: string,
  /** Callback */
  onClick: func,
  /** Aditional Style */
  style: object,
  /** Variants */
  variant: oneOf(['primary', 'secondary', 'inactive', 'minimun'])
};

const defaultPropTypes = {
  name: '',
  variant: 'primary'
};

type Props = InferProps<typeof propTypes>;

const useStyles = createUseStyles((theme: Theme) => ({
  button: {
    padding: '15px 22px',
    border: '0',
    borderRadius: '5px',
    background: 'transparent',
    fontFamily: 'Quicksand, sans-serif',
    fontWeight: '600',
    cursor: 'pointer',

    '&.disabled, &:disabled': {
      pointerEvents: 'none',
      opacity: '0.4'
    },

    '&.primary': {
      backgroundColor: theme.secondary,
      color: theme.white,

      '&:hover': {
        backgroundColor: '#ccd5da'
      }
    },

    '&.minimun': {
      padding: '15px 0'
    }
  }
}));

const Button = (props: Props) => {
  const { className, disabled, hidden, name, onClick, style, variant } = props;
  const theme = useTheme();
  const css = useStyles({ theme });
  let timeout: ReturnType<typeof setTimeout>;

  const handleClick = () => {
    if (typeof timeout === 'undefined') {
      onClick && onClick();
      timeout = setTimeout(() => {
        return clearTimeout(timeout);
      }, 500);
    }
  };

  return (
    <>
      <button
        className={`${css.button} ${variant} ${className ? className : ''}`}
        {...(disabled && { disabled })}
        {...(hidden && { hidden })}
        {...(onClick && { onClick: handleClick })}
        {...(style && { style })}
      >
        {name}
        {props.children}
      </button>
    </>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultPropTypes;

export default Button;
