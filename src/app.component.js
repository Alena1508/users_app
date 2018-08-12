import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { Loader } from './components/Loader/Loader';

import './common.scss';
import {Header} from "./parts/Header/Header";
import {Footer} from "./parts/Footer/Footer";
import {Pages} from "./Pages";


export class AppComponent extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Header/>
        <Pages/>
        <div className="push"/>
        <Footer/>
      </React.Fragment>
    );
  }
}

const mapStoreToProps = state => ({
// user: state.user
});

export const App = withRouter(connect(mapStoreToProps)(AppComponent));
