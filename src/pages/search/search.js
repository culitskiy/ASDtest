import React,{useState, useEffect} from 'react';
import './search.css';
import { Cart } from '../../components/cart/cart';
import { Filter } from '../../components/filter/filter';
import { ItemsList } from '../../components/itemsList/itemsList';
import data from '../../static/data.json';
import {Redirect} from 'react-router-dom';


export const Search = () => {

    const [cartData, setCartData] = useState([]);
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
        if (filterData.date1 || filterData.date2) {

            const dateFilter = newFilterItems.filter((el, index) => {
                const dateItem = el.date.split('.')
                console.log(filterData);
                let msecDateItem = Date.parse(`${dateItem[2]},${dateItem[1]},${dateItem[0]}`);
                return ((msecDateItem >= filterData.date1 || !filterData.date1) &&
                    (msecDateItem <= filterData.date2 || !filterData.date2))
            })
            newFilterItems = dateFilter;
        }
        setItemData(newFilterItems);
    };
    
    useEffect(() => {
        filter()
    },[filterData]);

    const userEmail = localStorage.getItem('email');
    
    const addItem = (item) => {
        setCartData([...cartData, item])
    }
    const deleteItem = (item) => {
        let newCart = [...cartData];
        newCart.splice(item,1)
        setCartData(newCart)
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
    if(!userEmail){
        return <Redirect to={{pathname:'/'}}/>;
    }
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{justifyContent:"space-between"}}>
                <span style={{marginLeft: "40vw"}}>{userEmail}</span>
                < Cart  data={cartData} 
                    deleteItem={deleteItem}/>
            </nav>
            <Filter data={filterData} 
                onDate1={onDate1}
                onDate2={onDate2}
                onInStock={onInStock}
                onPrice1={onPrice1}
                onPrice2={onPrice2}
                onColor={onColor}/>
            <ItemsList data={itemsData}
                addItem={addItem} />
        </div>
        
    )
}