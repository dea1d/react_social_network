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
            <ImageComponent img='https://i.pinimg.com/originals/76/6c/f7/766cf770ea8dd3529bd8e0c41d6784be.jpg'></ImageComponent>
            <div className={c.descriptionBlock}>
                <TextItem text='Description'></TextItem>
                <TextItem text='Test'></TextItem>
            </div>
        </div>
    )
}

export default ComponentInfo