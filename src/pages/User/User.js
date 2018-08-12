import { connect } from 'react-redux';
import { getUserInfo } from "../../services/users";
import { getUserInfo as  getUserInfoAction} from "../../store/actions";

export class UserContainer extends React.Component {


  getUserId() {
    const { user } = this.props.match.params;
    // return this.props.location.search.replace(/\D+/, '') || '';
  }

  componentDidMount() {

    const { user } = this.props.match.params;

    getUserInfo(user)
      .then(user => this.props.getUserInfoAction(user))

  }
  render() {
    const {
      id,
      first_name,
      last_name,
      birth_date,
      gender,
      job,
      biography,
      is_active
    } = this.props;
    return (
      <div className="user-info">
        <h2>{first_name}</h2>
        <p>{`You lastname ${last_name}`}</p>
        <p>{`Date of birth: ${birth_date} `}</p>
        <p>{`Gender: ${gender} `}</p>
        <p>{`Job: ${job} `}</p>
        <p>{`Biography: ${biography} `}</p>
        <p>{`Status: ${is_active} `}</p>
      </div>
    );
  }
}

const mapStoreToProps = ({ userInfo }) => ({
  ...userInfo
});

const mapDispatchToProps = {
  getUserInfoAction
};


export const User = connect(mapStoreToProps, mapDispatchToProps)(UserContainer);
