
import * as React from 'react';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import { useEffect } from 'react';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { updateOrder } from '../store/order.action';
import { useDispatch } from 'react-redux';

export function TestCal({ order, stay }) {
  const [value, setValue] = React.useState([null, null]);

  const dispatch = useDispatch();
  function convert(str) {
    let date = new Date(str),
      mnth = ('0' + (date.getMonth() + 1)).slice(-2),
      day = ('0' + date.getDate()).slice(-2);

    return [day, mnth, date.getFullYear()].join('/');
  }

  useEffect(() => {
    if (!value[0]) return;
    if (!stay) return
    const startDate = convert(value[0]);
    const endDate = convert(value[1]);

    console.log('parseInt(endDate):', parseInt(endDate));

    const days = parseInt(endDate) - parseInt(startDate);
    const totalPrice = days * stay.price;

    const orderToUpdate = { ...order, startDate, endDate, totalPrice };
    dispatch(updateOrder(orderToUpdate));
  }, [value]);

  // const orderDate = newValue


  //start end
  //setorder

  return (
    <div className='date-range'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs='desktop'
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            // console.log('newValue:', newValue);



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
