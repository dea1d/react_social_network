import React from 'react';
import userPhotoM from '../../assets/images/userM.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';
import { users } from './../../assets/styles/styles'


let Users = (props) => {


    let UsersNumberPage = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= UsersNumberPage; i++) {
        pages.push(i);
    }


    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && users.stylePageNumber} onClick={(e) => { props.onPageCurrent(p) }}>{p}</span>
                })
            }

        </div>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoM} style={users.photoSize} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button disabled={props.followingIsProgress.some(id => id == u.id)} onClick={() => {
                            props.followingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'f8832ec8-e381-4845-9076-c0716a728052'
                                    }



                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                    props.followingProgress(false, u.id);
                                });
                        }}>Unfollow</button>
                            :
                            <button disabled={props.followingIsProgress.some(id => id == u.id)} onClick={() => {
                                props.followingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'f8832ec8-e381-4845-9076-c0716a728052'
                                        }

                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                        props.followingProgress(false, u.id);
                                    });
                            }}>Follow</button>}
                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.city'}</div>
                        <div>{u.id}</div>
                    </span>

                </span>

            </div>)
        }
    </div>
}


export default Users;