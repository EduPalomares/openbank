// import React, { useEffect } from 'react';
import { func, number, object, string, InferProps } from 'prop-types';
import { createUseStyles } from 'react-jss';

const propTypes = {
  /** Aditional Classes */
  className: string,
  /** React children */
  children: object,
  /** Max Length */
  maxLength: number,
  /** Name */
  name: string.isRequired,
  /** Handler */
  onChange: func,
  /** Placeholder */
  placeholder: string,
  /** Input Style */
  style: object,
  /** Type */
  type: string.isRequired
};

const defaultPropTypes = {
  type: 'text'
};

type Props = InferProps<typeof propTypes>;

const useStyles = createUseStyles(() => ({
  input: {
    minWidth: '280px',
    padding: '12px 16px',
    border: '1px solid #bac7cb',
    borderRadius: '3px'
  }
}));

const Input = (props: Props) => {
  const { className, name, maxLength, onChange, placeholder, style, type } = props;
  const css = useStyles();

  return (
    <>
      <input
        className={`${css.input} ${className ? className : ''}`}
        type={type}
        name={name}
        {...(onChange && { onChange: onChange })}
        {...(placeholder && { placeholder })}
        {...(maxLength && { maxLength })}
        {...(style && { style })}
      />
    </>
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultPropTypes;

// export default React.forwardRef(Input);
export default Input;
