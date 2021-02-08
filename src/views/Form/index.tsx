import { InferProps } from 'prop-types';

const propTypes = {};

const defaultPropTypes = {};

type Props = InferProps<typeof propTypes>;

const Form = (props: Props) => {
  return (
    <>
      <h1>Crea tu Password Manager</h1>

      <p>
        En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónica. <br />
        No podrás recuperar tu contraseña, así que recuérdala bien.
      </p>

      <div>
        <div className="form-element">
          <label>Crea tu Contraseña Maestra</label>
          <input type="password" name="password1" placeholder="Introduce tu contraseña" />
        </div>

        <div className="form-element">
          <label>Repite tu Contraseña Maestra</label>
          <input type="password" name="password2" placeholder="Repite tu contraseña" />
        </div>
      </div>

      <p>También puedes crear una pista que te ayude a recordar tu contraseña maestra.</p>

      <div className="form-element">
        <label>Crear tu pista para recordar tu contraseña (opcional) i</label>
        <input type="text" name="clue" placeholder="Introduce tu pista " />
        <div className="char-left">0/60</div>
      </div>
    </>
  );
};

Form.propTypes = propTypes;
Form.defaultProps = defaultPropTypes;

export default Form;
