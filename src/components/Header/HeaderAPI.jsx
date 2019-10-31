import React from 'react';
import * as axios from 'axios';
import Header from './Header'
import Preloader from '../common/Preloader/Preloader';


class HeaderAPI extends React.Component {


  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        this.props.authData(id, email, login);
      }
    });

  }
  // onPageCurrent = (pageNumber) => {
  //   axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
  //   });


  // };
  render() {
    return <>
      {this.props.isFetching ? <Preloader /> : null
      }
      <Header {...this.props} />
    </>
  }

}

export default HeaderAPI;