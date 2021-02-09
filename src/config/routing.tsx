import { Switch, Route } from 'react-router-dom';
import ProductInformation from 'views/ProductInformation';
import Form from 'views/Form';
import Feedback from 'views/Feedback';
import { RouteType } from 'models/Route';

const routes = [
  { path: '/', exact: true, component: ProductInformation },
  { path: '/formulario', component: Form },
  { path: '/resultado', component: Feedback }
];

export const Router = () => {
  return (
    <Switch>
      {routes.map((route: RouteType, index: number) => (
        <Route key={index} path={route.path} exact={route?.exact} component={route.component} />
      ))}
    </Switch>
  );
};
