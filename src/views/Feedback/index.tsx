import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePassword } from 'contexts/password';
import { submitForm } from 'services/api';
import Icon from 'components/Icon';
import spinner from 'assets/img/spinner.svg';
import imgOK from 'assets/img/ok.jpg';
import imgKO from 'assets/img/error.jpg';

const Spinner = () => {
  const { t } = useTranslation();

  return (
    <div className="text-center">
      <br />
      <img src={spinner} alt="Cargando" style={{ maxWidth: '100px' }} />
      <p>{t('feedback.por_favor')}</p>
      <br />
    </div>
  );
};

const OK = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="content">
        <div className="flex">
          <div className="image">
            <img src={imgOK} alt="OK" />
          </div>
          <div>
            <h3>{t('feedback.tu_password')}</h3>
            <p>{t('feedback.por_favor')}</p>
            <p>{t('feedback.ya_hemos')}</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <span></span>
        <div className="flex v-center semibold" style={{ color: '#ff0049' }}>
          {t('general.acceder')}
          <Icon name="dropdown" className="primary dropdown-right" />
        </div>
      </div>
    </>
  );
};

const KO = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [, dispatch]: any = usePassword();

  const handleReset = () => {
    dispatch({ type: 'reset' });
    history.push('/');
  };

  return (
    <>
      <div className="content">
        <div className="flex">
          <div className="image">
            <img src={imgKO} alt="KO" />
          </div>
          <div>
            <h3>{t('feedback.ha_habido')}</h3>
            <p>{t('feedback.no_hemos')}</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <span></span>

        <div className="flex v-center semibold" style={{ color: '#ff0049', cursor: 'pointer' }} onClick={handleReset}>
          {t('general.volver_a_password')}
          <Icon name="dropdown" className="primary dropdown-right" />
        </div>
      </div>
    </>
  );
};

const Feedback = () => {
  const [password, dispatch]: any = usePassword();
  const [apiResponse, setApiResponse] = useState<number | null>();

  useEffect(() => {
    async function submit() {
      const { password1, password2, clue } = password.password;

      try {
        await submitForm(password1, password2, clue);
        setApiResponse(200);
      } catch (error) {
        setApiResponse(401);
      }
    }

    dispatch({ type: 'set_step', payload: 3 });
    submit();
  }, [dispatch, password.password]);

  return apiResponse ? (
    <>
      <main className="v-feedback">{apiResponse === 200 ? <OK /> : apiResponse === 401 ? <KO /> : null}</main>
    </>
  ) : (
    <Spinner />
  );
};

export default Feedback;
