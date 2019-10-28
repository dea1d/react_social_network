import React from 'react';
import k from './Users.module.css'
import userPhotoM from '../../assets/images/userM.png'


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
                        <img src={u.photos.small != null ? u.photos.small : userPhotoM} className={k.photoSize} />
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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