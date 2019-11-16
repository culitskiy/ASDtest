import React,{useState} from 'react';
import { Item } from './item/item';
import './itemList.css';

export const ItemsList = ({data, func}) => {

    // const [itemsData, setItemsData] = useState(data);
    console.log('items');
    console.log(data);
    let items;
    if (data){
        items = data.map((element, index) => {
            return(
                <div className='item'>
                    <Item  data={element} key={index}/>
                </div>
               
            )
        })
    }
   
    return (<div className='itemList'>
        {items}
      
    </div>
    )
}
