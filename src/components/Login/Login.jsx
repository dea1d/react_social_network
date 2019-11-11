import React from 'react'
import { reduxForm, Field } from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'} />
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} />
            </div>
            <div>
                <Field type={'checkbox'} component={'input'} name={'remember'} /> remember me
            </div>
            <div>
                <button>Sign in</button>
            </div>
        </form>
    )
}

const RedxLoginForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <RedxLoginForm onSubmit={onSubmit} />
    </div>
}


export default Login