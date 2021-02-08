import { Switch, Route } from 'react-router-dom';
import Feedback from 'views/Feedback';
import Form from 'views/Form';
import ProductInformation from 'views/ProductInformation';
import { RouteType } from 'models/Route';

const routes = [
  { path: '/', exact: true, component: ProductInformation },
  { path: '/formulario', exact: true, component: Form },
  { path: '/resultado', exact: true, component: Feedback }
];

export const Router = () => {
  return (
    <Switch>
      {routes.map((route: RouteType, index: number) => (
        <Route key={index} path={route.path} component={route.component} />
      ))}
    </Switch>
  );
};
