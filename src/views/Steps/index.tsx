import { number, InferProps } from 'prop-types';
import Bullet from 'components/Bullet';
import Icon from 'components/Icon';

const propTypes = {
  steps: number.isRequired,
  stepCurrent: number.isRequired
};

const defaultPropTypes = {};

type Props = InferProps<typeof propTypes>;

const Steps = (props: Props) => {
  const { steps, stepCurrent } = props;

  const bullets = Array(steps)
    .fill(0)
    .map((_, i) => (
      <Bullet key={i} active={stepCurrent === i + 1} previous={stepCurrent > i + 1}>
        {i + 1 < stepCurrent ? (
          <span>
            <Icon name="check" className="white" size={20} />
          </span>
        ) : (
          <span>{i + 1}</span>
        )}
      </Bullet>
    ));

  return (
    <>
      <div className="steps-wrapper">
        <div className="steps" style={{}}>
          {bullets}
          <div
            className="bg"
            style={{ left: 'calc(0% - ' + Math.floor((100 / steps) * (steps - stepCurrent)) + '% - 27px)' }}
          />
        </div>
      </div>
    </>
  );
};

Steps.propTypes = propTypes;
Steps.defaultProps = defaultPropTypes;

export default Steps;
