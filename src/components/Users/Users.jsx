import React from 'react';
import k from './Users.module.css'
import * as axios from 'axios';
import userPhotoM from '../../assets/images/userM.png'


class Users extends React.Component {


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.set_user(response.data.items);
        });

    }

    render() {
        return <div>
            {
                this.props.usersData.map(u => <div key={'u.id'} className={k.all}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhotoM} className={k.photoSize} />
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button> : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users