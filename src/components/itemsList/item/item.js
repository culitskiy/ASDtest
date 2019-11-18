import React from 'react';
import './item.css';

export const Item = ({data, addItem}) => {
    return(
        <div className="media" style={{width:"fit-content"}} >
            <div className='img' style={{backgroundImage:`url(/../../../img/${data.image})`}}>
            </div>
            
            <div className="col-auto">
                <h5>{data.name}</h5>
                <h5>{data.color}</h5>
            </div>
            <div className="col-auto">
                <h5>{data.date}</h5>
                <div className="form-check">
                    {(data.inStock === true) ? <i className="fa fa-check" aria-hidden="true"></i>
                    :  <i className="fas fa-ban"></i>}
                    In stock
                </div>
            </div>
            <div className="col-auto">
                <h5>{data.price}$</h5>
                <button onClick={()=> addItem(data)} type="submit" className="btn btn-primary">Order</button>
            </div>
      </div>
    )
}