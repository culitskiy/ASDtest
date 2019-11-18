import React,{useState} from 'react';
import './filter.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Filter = ({ onDate1, onDate2, onInStock, onPrice1, onPrice2, onColor}) => {

    const [firstDate, setFirstDate] = useState();
    const [secondDate, setSecondDate] = useState();

    const changeDateFirst = (date) => {
        setFirstDate(date);
        onDate1(Date.parse(date));
    }
    
    const changeDateSecond = (date) => {
        setSecondDate(date);
        onDate2(Date.parse(date))
    }
   
    return(
        <form className='filter'>
          <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
              <label >From</label>
              <DatePicker
              className="form-control date"
                    selected={firstDate}
                    onChange={changeDateFirst} 
                    timePickerSeconds />
            </div>
            <div className="col-sm-3 my-1">
              <label  >To</label>
              <DatePicker
              className="form-control"
                    selected={secondDate}
                    onChange={changeDateSecond} />
                        
            </div>
            <div className="col-auto my-1">
              <div className="form-check">
                <input onChange={(e) => onInStock(e.target.checked)} className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
                <label className="form-check-label" >
                  In stock only
                </label>
              </div>
            </div>
            
          </div>
          <div className="form-row align-items-center">
            <div className="col-sm-3 my-1">
              <label>Price from</label>
              <input onChange={(e) => onPrice1(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="col-sm-3 my-1">
              <label>To</label>
              <input onChange={(e) => onPrice2(e.target.value)} type="text" className="form-control"/>
            </div>
            <div className="col-auto my-1">
              <label className="mr-sm-2">Color</label>
              <select onChange={(e) => onColor(e.target.value)} className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                <option defaultValue="Choose..." selected>Choose...</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="black">Black</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="white">White</option>
              </select>
            </div>
            
          </div>
      </form>
    )
}

