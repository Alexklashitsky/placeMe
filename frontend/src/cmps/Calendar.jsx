import { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

import { DateRangePicker } from 'react-date-range';
// import 'react-dates/initialize';
// import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
// import 'react-dates/lib/css/_datepicker.css';

// alex
export class CalendarComp extends Component {
  handleSelect(ranges) {
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  render() {
    const selectionRange = {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    };
    return <DateRangePicker ranges={[selectionRange]} onChange={this.handleSelect} />;
  }
}

// //zur

// import React, { useState } from 'react';
// // import './Search.css';
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRangePicker } from "react-date-range";
// // import { Button } from "@material-ui/core";
// // import PeopleIcon from "@material-ui/icons/People";
// import { useHistory } from "react-router-dom";

// // DATE PICKER COMPONENT
// function Search() {
//     const history = useHistory();
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());

//     const selectionRange = {
//         startDate: startDate,
//         endDate: endDate,
//         key: "selection",
//     };

//     function handleSelect(ranges) {
//         setStartDate(ranges.selection.startDate);
//         setEndDate(ranges.selection.endDate);
//     }

//     return (
//         <div className='search'>
//             <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
//             <h2>
//                 Number of guests <PeopleIcon />
//             </h2>
//             <input min={0} defaultValue={2} type="number" />
//             <Button onClick={() => history.push('/search')}>Search Airbnb</Button>
//         </div>
//     )
// }

// export default Search
