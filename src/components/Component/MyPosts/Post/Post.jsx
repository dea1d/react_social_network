import React from 'react'
import p from './Post.module.css'

const Post = () => {
    return (
        <div className={p.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png" alt="keks" />
            <p>blog</p>
            <div>
                <span>Like </span>
                <span>Dislike</span>
            </div>
        </div>
    )
}

export default Post