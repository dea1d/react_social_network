import React from 'react';
import { connect } from 'react-redux';
import HeaderAPI from './HeaderAPI';
import { setUserDataActionCreator, } from '../../static/authReducer';




let mapStateToProps = (state) => {

  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    authData: (id, email, login) => {
      dispatch(setUserDataActionCreator(id, email, login))
    }
  }
}




const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPI)


export default HeaderContainer