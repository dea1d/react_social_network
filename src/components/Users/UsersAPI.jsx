import React from 'react';
import k from './Users.module.css'
import * as axios from 'axios';
import userPhotoM from '../../assets/images/userM.png';
import Users from './Users'


class UsersAPI extends React.Component {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.set_user(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });

    }
    onPageCurrent = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.set_user(response.data.items);
        });




    };
    render() {
        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.propscurrentPage}
            onPageCurrent={this.onPageCurrent}
            usersData={this.props.usersData}
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
    }

}

export default UsersAPI;