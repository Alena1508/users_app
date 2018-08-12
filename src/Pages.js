import { Route, Switch, Redirect } from 'react-router-dom';
import { User} from "./pages/User/User";
import { UsersList } from "./pages/Userslist/Userslist";
import { Main} from "./parts/Main/Main";

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
      </Switch>
    );
  }
}
