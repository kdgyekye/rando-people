import React from 'react'
import './card-list.styles.css'

import Card from '../card/card.component'

const imagesUrl = [
    {url: 'img1.jpg'},
    {url: 'img2.jpg'},
    {url: 'img3.jpg'},
    {url: 'img4.jpg'},
    {url: 'img5.jpg'},
    {url: 'img6.jpg'},
    {url: 'img7.jpg'},
    {url: 'img8.jpg'},
    {url: 'img9.jpg'}
]
const CardList = (props) => (
    <div className='card-list'>
        {
            props.people?.map((person,index) => {
                return <Card key={index} person={person} image={imagesUrl[index]}/>
            })
        }
    </div>
)

export default CardList