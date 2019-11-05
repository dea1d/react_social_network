import React from 'react';
import { connect } from 'react-redux';
import HeaderAPI from './HeaderAPI';
import { loginHeader } from '../../static/authReducer';




let mapStateToProps = (state) => {

  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    authData: () => {
      dispatch(loginHeader())
    }
  }
}




const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)


export default HeaderContainer