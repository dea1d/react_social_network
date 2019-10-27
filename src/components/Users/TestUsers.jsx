// import React from 'react';
// import k from './Users.module.css'
// import * as axios from 'axios';
// import userPhotoM from '../../assets/images/userM.png'


let Users = (props) => {


    let getUsers = () => {
        if (props.usersData.length === 0) {

            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.set_user(response.data.items);
            })
        }
        // { fullname: 'Bot1', message: 'text1', city: 'GPS1', id: 1, followed: true, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
        // { fullname: 'Bot2', message: 'text2', city: 'GPS2', id: 2, followed: false, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
        // { fullname: 'Bot3', message: 'text3', city: 'GPS3', id: 3, followed: true, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
        // { fullname: 'Bot4', message: 'text4', city: 'GPS4', id: 4, followed: false, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },])
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
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

export default Users