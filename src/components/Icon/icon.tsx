import { string, bool, object, func, oneOf, InferProps } from 'prop-types';
import './icon.scss';

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

const Icon = (props: Props) => {
  const { hidden, className, id, name, onClick, style, size } = props;

  return (
    <>
      <div
        className={`c-icon ${onClick ? 'pointer' : ''} ${name} ${className ? className : ''}`}
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
