import { string, bool, object, func, oneOf, InferProps } from 'prop-types';
import { createUseStyles } from 'react-jss';

const propTypes = {
  /** Additional Classes */
  className: string,
  /** Hidden */
  hidden: bool,
  /** Id */
  id: string,
  /** Name */
  name: string.isRequired,
  /** Opacity */
  opacity: oneOf([100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0]),
  /** Callback OnClick */
  onClick: func,
  /** Size */
  size: oneOf([12, 16, 20, 24, 28, 32, 40, 64]),
  /** Additional Style */
  style: object
};

const defaultPropTypes = {
  size: 16,
  opacity: 100
};

type Props = InferProps<typeof propTypes>;

const useStyles = createUseStyles(() => ({
  icon: {
    display: 'inline-flex',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center',
    '&.white': {
      filter: 'invert(96%) sepia(29%) saturate(0%) hue-rotate(290deg) brightness(113%) contrast(100%)'
    },
    '&.light-blue': {
      filter: 'invert(66%) sepia(77%) saturate(435%) hue-rotate(150deg) brightness(91%) contrast(92%);'
    },
    '&.primary': {
      filter: 'invert(22%) sepia(65%) saturate(7496%) hue-rotate(334deg) brightness(96%) contrast(117%)'
    },
    '&.secondary': {
      filter: 'invert(12%) sepia(20%) saturate(6880%) hue-rotate(181deg) brightness(95%) contrast(102%)'
    },
    '&.dropdown-right': {
      marginTop: '1px',
      transform: 'rotate(-90deg)'
    }
  }
}));

const Icon = (props: Props) => {
  const { hidden, className, id, name, onClick, style, size } = props;
  const css = useStyles();

  return (
    <>
      <div
        className={`${css.icon} ${onClick ? 'pointer' : ''} ${name} ${className ? className : ''}`}
        {...(hidden && { hidden })}
        {...(id && { id })}
        {...(onClick && { onClick: onClick })}
        style={{
          width: size + 'px',
          height: size + 'px',
          backgroundImage: 'url(' + process.env.PUBLIC_URL + '/assets/img/icons/' + name + '.svg)',
          ...style
        }}
      />
    </>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultPropTypes;

export default Icon;
