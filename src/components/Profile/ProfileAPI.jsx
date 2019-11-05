import React from 'react'
import Profile from './Profile.jsx'

class ProfileAPI extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5040;
        }

        this.props.setProfile(userId)
    }



    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}></Profile>
        )
    }
}


export default ProfileAPI;