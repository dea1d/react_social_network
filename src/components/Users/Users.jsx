import React from 'react';
import k from './Users.module.css'

let Users = (props) => {


    if (props.usersData.length === 0) {
        props.set_user([
            { fullname: 'Bot1', message: 'text1', city: 'GPS1', id: 1, followed: true, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
            { fullname: 'Bot2', message: 'text2', city: 'GPS2', id: 2, followed: false, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
            { fullname: 'Bot3', message: 'text3', city: 'GPS3', id: 3, followed: true, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },
            { fullname: 'Bot4', message: 'text4', city: 'GPS4', id: 4, followed: false, imgUrl: 'http://www.forex.ua/bitrix/templates/bv/images/blog/user.jpg' },])
    }
    return <div>
        {
            props.usersData.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.imgUrl} className={k.photoSize} />

                    </div>
                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.fullname}</div>
                        <div>{u.message}</div>
                    </span>
                    <span>
                        <div>{u.city}</div>
                        <div></div>
                    </span>

                </span>

            </div>)
        }
    </div>

}

export default Users