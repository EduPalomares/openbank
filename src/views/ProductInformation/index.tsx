import { NavLink } from 'react-router-dom';
import { usePassword } from 'contexts/password';
import Button from 'components/Button';
import img1 from 'assets/img/product-information-1.jpg';
import img2 from 'assets/img/product-information-2.jpg';

const ProductInformation = () => {
  const [password, dispatch]: any = usePassword();

  const toggleConsent = () => {
    dispatch({ type: 'set_consent', payload: !password.consent });
  };

  return (
    <>
      <main className="v-product-information">
        <div className="content">
          <h1>Cuenta Corriente OpenClose</h1>
          <p>
            Bienvenido a la contratación de la "Cuenta corriente OpenClose". <br />
            En los siguientes pasos le vamos a demandar algunos datos necesarios para completar el proceso. <br />
          </p>

          <div className="flex v-center">
            <input type="checkbox" name="consent" onClick={toggleConsent} /> Declaro que soy mayor de edad y acepto que
            traten mis datos según la política de protección de datos.
          </div>
          <br />

          <h2>Crea tu Password Manager</h2>
          <div className="introduction">
            <div>
              <img src={img1} alt="Guarda aquí todas tus contraseñas" />
              <p>
                Guarda aquí todas tus contraseñas, datos o cualquier información, olvida las notas de papel y las
                aplicaciones no protegidas.
              </p>
            </div>

            <div>
              <img src={img2} alt="Crea tu clave maestra" />
              <p>Crea tu clave maestra: solo tú podrás acceder a tus secretos con ella.</p>
            </div>
          </div>

          <h3>Cómo funciona</h3>

          <p>
            En primer lugar, debes crear una contraseña diferente para sus pertenencias electrónicas. No podrás
            recuperar tu contraseña, así que recuérdala bien.
          </p>

          <br />
          <h3>Qué datos puedes guardar</h3>

          <p>
            Por ejemplo, el número de tu tarjeta, el PIN y el PUK de tu teléfono móvil, el número de serie de alguno de
            tus dispositivos o cualquier información que necesites tener en un lugar seguro.
          </p>
        </div>

        <div className="actions">
          <Button name="Cancelar" variant="minimun" />
          <NavLink to="/formulario">
            <Button name="Siguiente" disabled={!password.consent} />
          </NavLink>
        </div>
      </main>
    </>
  );
};

export default ProductInformation;
