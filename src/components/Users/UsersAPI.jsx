import React from 'react';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../rest-api/api';

class UsersAPI extends React.Component {



    componentDidMount() {
        this.props.getUsersThunk(this.props.pageSize, this.props.currentPage);
    }


    onPageCurrent = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.preloaderUse(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.preloaderUse(false);
            this.props.set_user(data.items);
        });
    };
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null
            }
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.propscurrentPage}
                onPageCurrent={this.onPageCurrent}
                usersData={this.props.usersData}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingIsProgress={this.props.followingIsProgress}
                isAuth={this.props.isAuth} />
        </>
    }

}

export default UsersAPI;