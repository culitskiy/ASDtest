import React,{useState, useEffect} from 'react';
import './search.css';
import { Card } from '../../components/card/card';
import { Filter } from '../../components/filter/filter';
import { ItemsList } from '../../components/itemsList/itemsList';
import data from '../../static/data.json';

export const Search = () => {

    const [cardData, setCardData] = useState(1);
    const [filterData, setFilterData] = useState({
        date1: null,
        date2: null,
        inStock: null,
        price1: null,
        price2: null,
        color: null
    });

    const [itemsData, setItemData] = useState({});

    useEffect(() => {
        setItemData(data);
        console.log(data.Card1[2]);
    },[]);
        

    console.log('search')
    // console.log(data)
    const userEmail = localStorage.getItem('email');
    const card =() => {
        setCardData(cardData + 1);
    }
    const onDate1 = (date) => {
        // setFilterData({
        //     ...filterData,
        //     date1: date
        // });
        console.log(date)
    }
    const items =() => {
        setItemData(itemsData + 1);
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:"space-between"}}>
                <span style={{marginLeft: "40%"}}>{userEmail}</span>
                < Card  data={cardData} func={card}/>
            </nav>
            
            
            <Filter data={filterData} onDate1={onDate1}/>
            <ItemsList data={itemsData.Card1} func={items}/>
        </div>
        
    )
}