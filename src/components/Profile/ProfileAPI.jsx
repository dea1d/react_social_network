import React from 'react'
import Profile from './Profile.jsx'

class ProfileAPI extends React.Component {



    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 5040;
        }

        this.props.setProfile(userId)
        this.props.setStatus(userId)
    }



    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}></Profile>
        )
    }
}


export default ProfileAPI;