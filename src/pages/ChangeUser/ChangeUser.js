import { connect } from 'react-redux';
import { Form } from '../../components/Form/Form';
import { updateUser as updateUserStore } from '../../store/actions';
import { updateUser } from '../../services/users';


export class ChangeUserContainer extends React.Component {
    submit = (fields) => {
      updateUser(fields)
        .then(() => this.props.dispatch(updateUserStore(fields)))
        .then(() => this.props.history.push('/'))
        .catch(err => console.log('Can\'t login', err));
    };


    render() {
      const { user } = this.props;
        console.log('test', user);
    
        return (
        <Form
          data={user}
          disabled={['email']}
          skipped={['password', 'repeatPassword']}
          onSubmit={this.submit}
        />
      );
    }
}


const mapStoreToProps = ({ user }) => ({
  user
});

export const ChangeUser = connect(mapStoreToProps)(ChangeUserContainer);
