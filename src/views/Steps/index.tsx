// import { useCallback } from 'react';
import { number, InferProps } from 'prop-types';
import Bullet from 'components/Bullet';

const propTypes = {
  steps: number.isRequired,
  stepCurrent: number.isRequired
};

const defaultPropTypes = {};

type Props = InferProps<typeof propTypes>;

const Steps = (props: Props) => {
  // const { steps, stepCurrent } = props;

  // const bullets = useCallback(() => {},[steps, stepCurrent])

  return (
    <>
      <div className="steps-wrapper">
        <div className="steps">
          <Bullet active text="1" />
          <Bullet text="2" />
          <Bullet text="3" />
        </div>
      </div>
    </>
  );
};

Steps.propTypes = propTypes;
Steps.defaultProps = defaultPropTypes;

export default Steps;
