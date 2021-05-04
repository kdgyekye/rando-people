import React from 'react';

import './card.styles.css'

const Card = (props) => {
    //console.log(props.image.url)
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.person.id}?set=set5&size=180x180`} alt='A Monster'/>
            <h2>{props.person.name}</h2>
            <p>{props.person.email}</p>
        </div>
    )
};

export default Card