import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { usePassword } from 'contexts/password';
import Button from 'components/Button';
import Icon from 'components/Icon';
import img1 from 'assets/img/product-information-1.jpg';
import img2 from 'assets/img/product-information-2.jpg';

const ProductInformation = () => {
  const [password, dispatch]: any = usePassword();
  const { t } = useTranslation();

  const toggleConsent = () => {
    dispatch({ type: 'set_consent', payload: !password.consent });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
    window.location.reload();
  };

  useEffect(() => {
    dispatch({ type: 'set_step', payload: 1 });
  }, [dispatch]);

  return (
    <>
      <main className="v-product-information">
        <div className="content">
          <h1>{t('product.cuenta_corriente')}</h1>
          <p>
            {t('product.bienvenido_a_la')}
            <br />
            {t('product.en_los_siguientes')}
          </p>

          <div className="flex v-center">
            <input defaultChecked={password.consent} type="checkbox" name="consent" onClick={toggleConsent} />
            {t('product.declaro_que')}
          </div>
          <br />

          <h2>{t('product.crea_tu')}</h2>
          <div className="introduction">
            <div>
              <img src={img1} alt="Guarda aquí todas tus contraseñas" />
              <p>{t('product.guardar_aqui')}</p>
            </div>

            <div>
              <img src={img2} alt="Crea tu clave maestra" />
              <p>{t('product.crea_tu_clave')}</p>
            </div>
          </div>

          <h3>{t('product.como_funciona')}</h3>

          <p>{t('product.en_primer_lugar')}</p>

          <br />
          <h3>{t('product.que_datos')}</h3>
          <p>{t('product.por_ejemplo')}</p>
        </div>

        <div className="actions">
          <Button name={t('general.cancelar')} variant="minimun" onClick={handleReset} />

          <NavLink to={password.consent ? '/formulario' : ''}>
            <Button name={t('general.siguiente')} disabled={!password.consent}>
              <Icon name="dropdown" className="white dropdown-right" />
            </Button>
          </NavLink>
        </div>
      </main>
    </>
  );
};

export default ProductInformation;
