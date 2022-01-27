import * as React from 'react';
import TextField from '@mui/material/TextField';
import StaticDateRangePicker from '@material-ui/lab/StaticDateRangePicker';
import { useEffect, useState } from 'react';
import DateRangePicker from '@material-ui/lab/DateRangePicker';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { updateOrder } from '../store/order.action';
import { useDispatch } from 'react-redux';
import { utilService } from '../services/util.service.js';

export function TestCal({ order, stay, onToggleCal, handelDateChange, onSaveClicked }) {
  const [value, setValue] = React.useState([null, null]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!value[0]) return;

    console.log('value:', value);

    const startDate = utilService.convert(value[0]);
    let endDate = utilService.convert(value[1]);

    let today = startDate;
    today = new Date(today.split('/')[2], today.split('/')[1] - 1, today.split('/')[0]);
    if (endDate.includes('1970')) {
      endDate = '25/01/2022';
    }
    let date2 = endDate;
    date2 = new Date(date2.split('/')[2], date2.split('/')[1] - 1, date2.split('/')[0]);
    let timeDiff = Math.abs(date2.getTime() - today.getTime());
    let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    console.log('cal');

    if (handelDateChange) {
      handelDateChange(startDate, endDate);
    }

    if (!stay) return;
    const totalPrice = diffDays * stay.price;

    const orderToUpdate = { ...order, startDate, endDate, totalPrice };
    dispatch(updateOrder(orderToUpdate));
    if (value.every((date) => date)) onToggleCal();
  }, [value]);

  return (
    <div className='calendar-div'>
      <div className='date-range'>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            disablePast
            displayStaticWrapperAs='desktop'
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(startProps, endProps) => (
              <div>
                <React.Fragment>
                  <TextField {...startProps} />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} />
                </React.Fragment>
              </div>
            )}
          />
        </LocalizationProvider>
      </div>
      <button className='save' onClick={() => onSaveClicked()}>
        save
      </button>
    </div>
  );
  // console.log('startProps:', startProps);
  // console.log('endProps:', endProps);
}
