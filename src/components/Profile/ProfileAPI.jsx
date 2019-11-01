import React from 'react'
import * as axios from 'axios';
import Profile from './Profile.jsx'


class ProfileAPI extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.set_user_profile(response.data);
        });
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}></Profile>
        )
    }
}

export default ProfileAPI;