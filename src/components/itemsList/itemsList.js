import React from 'react';
import { Item } from './item/item';
import './itemList.css';

export const ItemsList = ({data, addItem}) => {

    let items;
    if (data){
        items = data.map((element) => {
            return(
                <div key={`${element.name}${element.color}${element.date}`} className='item'>
                    <Item addItem={addItem} data={element} />
                </div>
               
            )
        })
    }
   
    return (
        <div className='itemList'>
            {items}
        
        </div>
    )
}
