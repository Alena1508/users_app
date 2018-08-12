import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUsers as getUsersRequest} from "../../services/users";
import {getUsers} from "../../store/actions";


import './userslist.scss';


export class UsersListContainer extends React.Component {

  createUser = () => {
    this.props.history.push(`contact/`);
  }

  componentDidMount() {
    return getUsersRequest()
      .then(usersList => this.props.getUsers(usersList));
  }


  render() {
    const {usersList} = this.props;
    console.log('aaaaaaaaaaaa', usersList);
    return (
      <React.Fragment>
        <ol className="usersList">
          {usersList.map(user => (
            <li
              key={user.id}
              className="userList__item"
            >
              <Link
                to={`/user/${user.id}`}
              >
                {user.first_name}
                {user.last_name}
                {user.birth_date}
                {user.gender}
              </Link>
            </li>
          ))}
        </ol>
      <button className="usersList__btn" onClick={() => this.createUser()}>Add new user</button>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = ({usersList}) => ({
  usersList
});

const mapDispatchToProps = {
  getUsers
};

export const UsersList = connect(mapStoreToProps, mapDispatchToProps)(UsersListContainer);
