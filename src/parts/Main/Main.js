import { UsersList } from "../../pages/Userslist/Userslist";
import './main.scss';

export const Main = () => (
  <React.Fragment>
    <main className="main">
      <UsersList />
    </main>
  </React.Fragment>
);