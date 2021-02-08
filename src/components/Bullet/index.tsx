import { bool, string, InferProps } from 'prop-types';
import { createUseStyles, useTheme } from 'react-jss';
import { Theme } from 'styles/theme';
import triangle from 'assets/img/triangle.png';

const propTypes = { active: bool, text: string.isRequired };

const defaultPropTypes = { active: false };

type Props = InferProps<typeof propTypes>;

const useStyles = createUseStyles((theme: Theme) => ({
  bullet: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',

    '& span': {
      width: '27px',
      height: '27px',
      borderRadius: '50%',
      backgroundColor: '#788f9c',
      display: 'flex',
      placeContent: 'center',
      alignItems: 'center',
      position: 'relative',
      zIndex: '1',
      color: theme.white,
      fontSize: '1.3rem'
    },

    '&.active span': {
      width: '35px',
      height: '35px',
      backgroundColor: theme.secondary,
      boxShadow: '0px 0px 15px #888888;'
    },

    '&.active:after': {
      content: '""',
      width: '22px',
      height: '9px',
      position: 'absolute',
      left: '7px',
      bottom: '0',
      background: 'url(' + triangle + ') center/auto 100% no-repeat'
    }
  }
}));

const Bullet = (props: Props) => {
  const { active, text } = props;
  const theme = useTheme();
  const css = useStyles({ theme });

  return (
    <>
      <div className={`${css.bullet} ${active ? 'active' : ''}`}>
        <span>{text}</span>
      </div>
    </>
  );
};

Bullet.propTypes = propTypes;
Bullet.defaultProps = defaultPropTypes;

export default Bullet;
