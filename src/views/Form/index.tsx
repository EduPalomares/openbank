import { useEffect, useReducer } from 'react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePassword } from 'contexts/password';
import { validPassword } from 'helpers/utils/validPassword';
import Button from 'components/Button';
import Icon from 'components/Icon';
import Input from 'components/Input';
import { FormType } from 'models/Form';

const reducer = (
  state: FormType,
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>
) => {
  return { ...state, [e.target.name]: e.target.value };
};

const initialForm = { password1: '', password2: '', clue: '' };

const Form = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const [password, dispatch]: any = usePassword();
  const [state, handleChange]: any = useReducer(reducer, initialForm);

  const handleReset = () => {
    dispatch({ type: 'reset' });
    history.push('/');
  };

  const handleSubmitForm = () => {
    dispatch({ type: 'set_password', payload: state });
    history.push('/resultado');
  };

  useEffect(() => {
    dispatch({ type: 'set_step', payload: 2 });
  }, [dispatch]);

  return (
    <>
      <main className="v-form">
        <div className="content">
          <h2>{t('form.crea_tu_password')}</h2>

          <p>
            {t('form.en_primer_lugar')} <br />
            {t('form.no_podras')}
          </p>

          <div className="flex passwords">
            <div className="form-element">
              <label>{t('form.crea_tu_contraseña')}</label>
              <Input
                type="password"
                name="password1"
                onChange={handleChange}
                placeholder={t('form.introduce_tu_contraseña')}
              />
              <div className="error">
                {state.password1 && !validPassword(state.password1) ? t('form.min_8_max') : ' '}
              </div>
            </div>

            <div className="form-element">
              <label>{t('form.repite_tu_maestra')}</label>
              <Input
                type="password"
                name="password2"
                onChange={handleChange}
                placeholder={t('form.repite_tu_contraseña')}
              />
              <div className="error">
                {state.password2 && state.password1 !== state.password2 ? t('form.las_2') : ' '}
              </div>
            </div>
          </div>

          <p>{t('form.tambien_puedes')}</p>

          <div className="form-element">
            <label>
              <span>{t('form.crear_tu')}</span>{' '}
              <Icon name="rounded-info" size={20} className="light-blue" style={{ marginBottom: '-5px' }} />
            </label>
            <Input
              type="text"
              name="clue"
              maxLength={255}
              onChange={handleChange}
              placeholder={t('form.introduce_tu')}
              className="w100"
            />
            <div className="characters-left">{state.clue.length}/255</div>
          </div>
        </div>

        <div className="actions">
          <Button name={t('general.cancelar')} variant="minimun" onClick={handleReset} />

          <Button
            name={t('general.siguiente')}
            disabled={!password.consent || !state.password1 || state.password1 !== state.password2}
            onClick={handleSubmitForm}
          >
            <Icon name="dropdown" className="white dropdown-right" />
          </Button>
        </div>
      </main>
    </>
  );
};

export default Form;
