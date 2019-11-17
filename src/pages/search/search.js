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
        inStock: false,
        price1: 0,
        price2: 0,
        color: 'Choose...'
    });

    const [itemsData, setItemData] = useState(data.Card1);

    
   
    const filter = () => {
        let newFilterItems = [...data.Card1];
        if (filterData.inStock) {
            const filterItems = newFilterItems.filter((el, index) => {
                return el.inStock === filterData.inStock
            });
            newFilterItems = filterItems;
        }
        if (filterData.color !== 'Choose...') {
            const colorFilter = newFilterItems.filter((el, index) => {
                return el.color === filterData.color
            });
            newFilterItems = colorFilter;
        }
        if (filterData.price1 !== 0 || filterData.price2 !== 0) {
            const priceFilter = newFilterItems.filter((el, index) => {
                return ((+el.price >= filterData.price1 || filterData.price1 === 0) &&
                    (+el.price <= filterData.price2 || filterData.price2 === 0))
            });
            newFilterItems = priceFilter;
        }
        setItemData(newFilterItems);
    };
      
    
    useEffect(() => {
        filter()
        console.log(filterData)
    },[filterData]);
    const userEmail = localStorage.getItem('email');
    const card =() => {
        setCardData(cardData + 1);
    }
    const onDate1 = (date) => {
        setFilterData({
            ...filterData,
            date1: date
        });
    }
    const onDate2 = (date) => {
        setFilterData({
            ...filterData,
            date2: date
        });
    }
    const onInStock =(stock) => {
        setFilterData({
            ...filterData,
            inStock: stock
        });
    }
    const onPrice1 =(price) => {
        setFilterData({
            ...filterData,
            price1: +price
        });
    }
    const onPrice2 =(price) => {
        setFilterData({
            ...filterData,
            price2: +price
        });
    };
    const onColor =(color) => {
        setFilterData({
            ...filterData,
            color: color
        })
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
            <Filter data={filterData} 
            onDate1={onDate1}
            onDate2={onDate2}
            onInStock={onInStock}
            onPrice1={onPrice1}
            onPrice2={onPrice2}
            onColor={onColor}/>
            <ItemsList data={itemsData} />
        </div>
        
    )
}