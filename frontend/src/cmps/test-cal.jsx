// import React from 'react';
// import DayPicker from 'react-day-picker';

// import 'react-day-picker/lib/style.css';

// export class TestCal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleDayClick = this.handleDayClick.bind(this);
//         this.state = {
//             selectedDay: undefined,
//         };
//     }

//     handleDayClick(day) {
//         this.setState({ selectedDay: day });
//     }

//     render() {
//         return (
//             <div>
//                 <DayPicker
//                     onDayClick={this.handleDayClick}
//                     selectedDays={this.state.selectedDay}
//                 />
//                 {this.state.selectedDay ? (
//                     <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
//                 ) : (
//                     <p>Please select a day.</p>
//                 )}
//             </div>
//         );
//     }
// }

// import DateFnsAdapter from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';

import * as React from 'react';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';

import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

export function TestCal() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <div className='date-range'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs='desktop'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  );
  // console.log('startProps:', startProps);
  // console.log('endProps:', endProps);
}
