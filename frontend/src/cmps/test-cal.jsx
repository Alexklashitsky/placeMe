import React from 'react';
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

export class TestCal extends React.Component {
    render() {
        return (
            <div>
                <DayPicker />
            </div>
        );
    }
}