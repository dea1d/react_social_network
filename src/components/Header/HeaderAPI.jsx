import React from 'react';
import Header from './Header'
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../rest-api/api';


class HeaderAPI extends React.Component {



  componentDidMount() {
    userAPI.getMeId().then(data => {
      if (data.resultCode === 0) {
        let { id, email, login } = data.data;
        this.props.authData(id, email, login);
      }
    });
  }
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null
      }
      <Header {...this.props} />
    </>
  }

}

export default HeaderAPI;