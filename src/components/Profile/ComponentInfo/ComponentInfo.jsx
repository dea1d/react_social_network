import React from 'react'
import c from './ComponentInfo.module.css'

const ImageComponent = (props) => {
    return (
        <div>
            <img src={props.img}></img>
        </div>
    )
}

const TextItem = (props) => {
    return (
        <div className={c.item_1}>
            {props.text}
        </div>
    )
}


const ComponentInfo = (props) => {
    return (
        <div>
            <ImageComponent img='https://media.proglib.io/wp-uploads/2017/12/React.jpg'></ImageComponent>
            <div className={c.descriptionBlock}>
                <img src={props.profile.photos.large}></img>
                <TextItem text={props.profile.fullName}></TextItem>
                <TextItem text={props.profile.aboutMe}></TextItem>
            </div>
        </div>
    )
}

export default ComponentInfo