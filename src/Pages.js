import { Route, Switch, Redirect } from 'react-router-dom';
import { User } from './pages/User/User';
import { Main } from './parts/Main/Main';
import { ChangeUser } from './pages/ChangeUser/ChangeUser';

export class Pages extends React.Component {
  render() {
    return (
      <Switch>
        <Route
          path="/"
          exact
          component={Main}
        />
        <Route
          path="/user/:user"
          // exact
          component={User}
        />
        <Route
          path="/changeUser"
          exact
          component={ChangeUser}
        />
      </Switch>
    );
  }
}
