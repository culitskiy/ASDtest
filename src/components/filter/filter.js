import React,{useState} from 'react';
import './filter.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Filter = ({data, onDate1}) => {

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
      <input type="date" className="form-control"/>
    </div>
    <div className="col-auto my-1">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="autoSizingCheck2"/>
        <label className="form-check-label" for="autoSizingCheck2">
          In stock only
        </label>
      </div>
    </div>
    
  </div>
  <div className="form-row align-items-center">
    <div className="col-sm-3 my-1">
      <label for="inlineFormInputName">Price from</label>
      <input type="text" className="form-control"/>
    </div>
    <div className="col-sm-3 my-1">
      <label for="inlineFormInputName">To</label>
      <input type="text" className="form-control"/>
    </div>
    <div class="col-auto my-1">
      <label class="mr-sm-2" for="inlineFormCustomSelect">Color</label>
      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
        <option selected>Choose...</option>
        <option value="1">Red</option>
        <option value="2">Blue</option>
        <option value="3">Black</option>
        <option value="4">Yellow</option>
        <option value="5">Green</option>
        <option value="6">White</option>
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