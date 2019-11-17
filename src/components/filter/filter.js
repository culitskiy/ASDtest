import React,{useState} from 'react';
import './filter.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Filter = ({data, onDate1, onDate2, onInStock, onPrice1, onPrice2, onColor}) => {

    const [filterData, setFilterData] = useState(data);
    // const [date, setDate] = useState({
    //     firstDate: null,
    //     secondDate: null
    // });
    const [firstDate, setFirstDate] = useState();
    const [secondDate, setSecondDate] = useState();
console.log('filter');
    const changeDateFirst = (date) => {
        setFirstDate(date);
    }
    const changeDateSecond = (date) => {
        setSecondDate(date);
    }

    return(
        <form className='filter'>
  <div className="form-row align-items-center">
    <div className="col-sm-3 my-1">
      <label  for="inlineFormInputName">From</label>
      <input onChange={(e) => onDate1(e.target.value)} type="date" className="form-control"/>
    </div>
    <div className="col-sm-3 my-1">
      <label  for="inlineFormInputName">To</label>
      <input onChange={(e) => onDate2(e.target.value)} type="date" className="form-control"/>
    </div>
    <div className="col-auto my-1">
      <div className="form-check">
        <input onChange={(e) => onInStock(e.target.checked)} className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
        <label className="form-check-label" for="autoSizingCheck2">
          In stock only
        </label>
      </div>
    </div>
    
  </div>
  <div className="form-row align-items-center">
    <div className="col-sm-3 my-1">
      <label for="inlineFormInputName">Price from</label>
      <input onChange={(e) => onPrice1(e.target.value)} type="text" className="form-control"/>
    </div>
    <div className="col-sm-3 my-1">
      <label  for="inlineFormInputName">To</label>
      <input onChange={(e) => onPrice2(e.target.value)} type="text" className="form-control"/>
    </div>
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Color</label>
      <select onChange={(e) => onColor(e.target.value)} class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
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

// div className='form-row align-items-center'>
//             <div className='col-sm-3 my-1'>
//             <label >From</label>
//             <input type="text" class="form-control" ></input>
//            {/* <DatePicker
//                 selected={firstDate}
//                 onChange={changeDateFirst}/> */}
//                 <i class="far fa-calendar-alt"></i>
//             </div>
            
//             <div className='col-sm-3 my-1'>
//             <label >To</label>
//             <input type="text" class="form-control" ></input>
//             {/* <DatePicker 
//                 selected={secondDate}
//                 onChange={changeDateSecond}/> */}
//             </div>
//             <div className='col-auto my-1 ' >
//             <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//                 <label className="form-check-label" for="defaultCheck1">
//                     Default checkbox
//                 </label>
//             </div>
            
            
//             {/* <div className="form-check">
//                 <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
//                 <label className="form-check-label" for="defaultCheck1">
//                     Default checkbox
//                 </label>
//             </div>
//              */}
//         </div>