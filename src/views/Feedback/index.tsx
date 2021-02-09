import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { usePassword } from 'contexts/password';
import { submitForm } from 'services/api';
import Icon from 'components/Icon';
import spinner from 'assets/img/spinner.svg';
import imgOK from 'assets/img/ok.jpg';
import imgKO from 'assets/img/error.jpg';

const Spinner = () => (
  <div className="text-center">
    <br />
    <img src={spinner} alt="Cargando" style={{ maxWidth: '100px' }} />
    <p>Por favor espere...</p>
    <br />
  </div>
);

const OK = () => (
  <>
    <div className="content">
      <div className="flex">
        <div className="image">
          <img src={imgOK} alt="OK" />
        </div>
        <div>
          <h3>¡Tu Password Manager ya está creado!</h3>
          <p>Ya hemos terminado de crear tu password manager y podrás usarlo a partir de este momento.</p>
        </div>
      </div>
    </div>

    <div className="actions">
      <span></span>
      <div className="flex v-center semibold" style={{ color: '#ff0049' }}>
        Acceder
        <Icon name="dropdown" className="primary dropdown-right" />
      </div>
    </div>
  </>
);

const KO = () => {
  const history = useHistory();
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
            <h3>Ha habido un error</h3>
            <p>No hemos podido modificar tu Contraseña Maestra. Inténtalo más tarde.</p>
          </div>
        </div>
      </div>

      <div className="actions">
        <span></span>

        <div className="flex v-center semibold" style={{ color: '#ff0049', cursor: 'pointer' }} onClick={handleReset}>
          Volver a Password Manager
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
