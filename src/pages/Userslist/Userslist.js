import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsers as getUsersRequest, deleteUser as deleteUserRequest } from '../../services/users';
import { getUsers, deleteUser } from '../../store/actions';


import './userslist.scss';


export class UsersListContainer extends React.Component {
    handleDeleteUser = (id) => {
      deleteUserRequest(id)
        .then(() => this.props.deleteUser());
      console.log(id);
    };

    componentDidMount() {
      return getUsersRequest()
        .then(usersList => this.props.getUsers(usersList));
    }


    render() {
      const { usersList } = this.props;
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
                <span
                  className="deleteUser"
                  onClick={() => this.handleDeleteUser(user.id)
                }
                >Delete
                </span>
              </li>
          ))}
          </ol>
          <Link to="/changeUser">Add new user</Link>
        </React.Fragment>
      );
    }
}

const mapStoreToProps = ({ usersList }) => ({
  usersList
});

const mapDispatchToProps = {
  getUsers,
  deleteUser
};

export const UsersList = connect(mapStoreToProps, mapDispatchToProps)(UsersListContainer);
