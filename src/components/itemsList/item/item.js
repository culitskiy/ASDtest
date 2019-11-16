import React from 'react';


export const Item = ({data}) => {
    console.log(data.name);
    
    
    return(
        <div className="media" style={{width:"fit-content"}} >
            <img src={`../../../img/${data.image}`} className="align-self-center mr-3" style={{height: "100%"}} alt="..."/>
            <div class="col-auto">
        <h5>{data.name}</h5>
        <h5>{data.color}</h5>
        </div>
        <div class="col-auto">
        <h5>{data.date}</h5>
        <div class="form-check">
            {/* <input class="form-check-input" type="checkbox" id="autoSizingCheck2" />
            <label class="form-check-label" for="autoSizingCheck2"> */}
            
           
            {(data.inStock === 'true') ? <i class="fa fa-check" aria-hidden="true"></i>
            :  <i class="fas fa-ban"></i>}
            In stock
            {/* </label> */}
        </div>
        </div>
        <div class="col-auto">
        <h5>{data.price}$</h5>
        <button type="submit" class="btn btn-primary">Order</button>
        </div>
        
        
       
        
      </div>
    )
}