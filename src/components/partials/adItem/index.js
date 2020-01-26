import React from 'react';
import { Link } from 'react-router-dom';
import { Item } from './styled';

export default (props) => {
    var price = '';

    if ( props.data.priceNegotiable ) {
        price = 'Preço Negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return (
        <Item className="ad-item">
            <Link to={`/ad/${props.data.id}`}>
                <img src={props.data.image} className="ad-image" />
                <div className="ad-name">{props.data.title}</div>
                <div className="ad-price">{price}</div>
            </Link>
        </Item>
    )
}