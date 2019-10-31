import React from 'react';
import k from './Users.module.css'
import userPhotoM from '../../assets/images/userM.png'
import { NavLink } from 'react-router-dom'
import * as axios from 'axios';


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
                    return <span className={props.currentPage === p && k.stylePageNumber} onClick={(e) => { props.onPageCurrent(p) }}>{p}</span>
                })
            }
        </div>
        {
            props.usersData.map(u => <div key={'u.id'} className={k.all}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoM} className={k.photoSize} />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: { 'API-KEY': 'db8da976-0165-49c2-83c7-91db7c89bc37' }


                                }).then(response => {
                                    if (response.data.resultCode == 0) {
                                        props.unfollow(u.id)
                                    }
                                });
                        }}>Unfollow</button>

                            :

                            <button onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                    {
                                        withCredentials: true,
                                        headers: { 'API-KEY': 'db8da976-0165-49c2-83c7-91db7c89bc37' }
                                    }).then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id)
                                        }
                                    });
                            }}>Follow</button>}
                    </div>

                </span>
                <span>
                    <span>
                        <div className={k.test}>{u.name}</div>
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