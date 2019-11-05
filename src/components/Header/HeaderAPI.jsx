import React from 'react';
import Header from './Header'
import Preloader from '../common/Preloader/Preloader';


class HeaderAPI extends React.Component {



  componentDidMount() {
    this.props.authData()
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