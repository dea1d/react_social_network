import React from 'react';
import * as axios from 'axios';
import Users from './Users'
import Preloader from '../common/Preloader/Preloader';


class UsersAPI extends React.Component {


    componentDidMount() {
        this.props.preloaderUse(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
            this.props.preloaderUse(false);
            this.props.set_user(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }
    onPageCurrent = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.preloaderUse(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, { withCredentials: true }).then(response => {
            this.props.preloaderUse(false);
            this.props.set_user(response.data.items);
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
                follow={this.props.follow} />
        </>
    }

}

export default UsersAPI;