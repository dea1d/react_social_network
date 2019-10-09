import React from 'react'
import p from './Post.module.css'

const Post = (props) => {
    return (
        <div className={p.item}>
            <img src="https://bipbap.ru/wp-content/uploads/2019/05/86ae0b2400c92d333751c8d9a9ae68e4.png" alt="keks" />
            <p>{props.message}</p>
            <div>
                
                <span>{props.like_count} Like </span>
                <span>{props.dislike_count} Dislike</span>
            </div>
        </div>
    )
}

export default Post