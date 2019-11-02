import React from 'react'
import Profile from './Profile.jsx'
import { userAPI } from '../../rest-api/api';

class ProfileAPI extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        userAPI.getProfile(userId).then(data => {
            this.props.set_user_profile(data);
        });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}></Profile>
        )
    }
}

export default ProfileAPI;