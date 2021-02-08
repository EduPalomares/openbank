import { InferProps } from 'prop-types';

const propTypes = {};

const defaultPropTypes = {};

type Props = InferProps<typeof propTypes>;

const Feedback = (props: Props) => {
  return <></>;
};

Feedback.propTypes = propTypes;
Feedback.defaultProps = defaultPropTypes;

export default Feedback;
