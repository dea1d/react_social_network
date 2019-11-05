import React from 'react';
import userPhotoM from '../../assets/images/userM.png'
import { NavLink, Redirect } from 'react-router-dom'
import { users } from './../../assets/styles/styles'


let Users = (props) => {


    let UsersNumberPage = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= UsersNumberPage; i++) {
        pages.push(i);
    }
    if (!props.isAuth) return <Redirect to={'/login'} />;


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
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                            :
                            <button disabled={props.followingIsProgress.some(id => id == u.id)} onClick={() => {
                                props.follow(u.id)
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