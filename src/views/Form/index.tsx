import { useEffect, useReducer } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { usePassword } from 'contexts/password';
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
  const [, dispatch]: any = usePassword();
  const [state, handleChange]: any = useReducer(reducer, initialForm);

  // const pass1Ref = useRef<HTMLElement | null>(null);
  // const pass2Ref = useRef<HTMLElement | null>(null);

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
          <h2>Crea tu Password Manager</h2>

          <p>
            En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónica. <br />
            No podrás recuperar tu contraseña, así que recuérdala bien.
          </p>

          <div className="flex passwords">
            <div className="form-element">
              <label>Crea tu Contraseña Maestra</label>
              <Input //ref={pass1Ref}
                type="password"
                name="password1"
                // onChange={(e) => setPassword1(e.target.value)}
                onChange={handleChange}
                placeholder="Introduce tu contraseña"
              />
              <Icon
                name="eye"
                onClick={() => {
                  // pass1Ref?.current && pass1Ref?.current?.setAttribute('type', 'text');
                  //console.log(pass1Ref?.current); // TODO:
                }}
                size={28}
                style={{ position: 'absolute', top: '34px', right: '10px' }}
              />
            </div>

            <div className="form-element">
              <label>Repite tu Contraseña Maestra</label>
              <Input //ref={pass2Ref}
                type="password"
                name="password2"
                onChange={handleChange}
                placeholder="Repite tu contraseña"
              />
            </div>
          </div>

          <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>

          <div className="form-element">
            <label>
              <span>Crear tu pista para recordar tu contraseña (opcional)</span>{' '}
              <Icon name="rounded-info" size={20} className="light-blue" style={{ marginBottom: '-5px' }} />
            </label>
            <Input type="text" name="clue" onChange={handleChange} placeholder="Introduce tu pista" className="w100" />
            <div className="characters-left">{state.clue.length}/60</div>
          </div>
        </div>

        <div className="actions">
          <NavLink to="/">
            <Button name="Cancelar" variant="minimun" />
          </NavLink>

          <Button
            name="Siguiente"
            disabled={
              //!password.consent ||
              !state.password1 || state.password1 !== state.password2
            }
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
