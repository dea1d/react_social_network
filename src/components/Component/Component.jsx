import React from 'react'
import c from './Component.module.css'
import MyPosts from './MyPosts/MyPosts.jsx'

const Component = () => {
    return (
        <div className={c.content}>
            <img src='http://fotorelax.ru/wp-content/uploads/2016/03/Beautiful-photos-and-pictures-on-various-subjects-01.jpg'></img>
            <div className={c.item_1}>ava + desription</div>
            <MyPosts></MyPosts>
        </div>

    )
}

export default Component