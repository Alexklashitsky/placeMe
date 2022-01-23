import React from 'react';
import Switch from '@mui/material/Switch';

import { Component } from 'react'
import { connect } from 'react-redux'
import { VerifiedUserTwoTone } from '@mui/icons-material';



export class AdditionalFilter extends Component {

    state = {
        filterBy: {
            freeCancel: false,
            VerifiedPlace: false,
            entirePlace: false,
            hotelRoom: false,
            privateRoom: false,
            sharedRoom: false


        }
    }

    toggleCheck = (ev) => {
        const field = ev.target.name
        console.log('ev.target:', ev.target);
        console.log('field:', field);


        // (!this.state.filterBy.freeCancel)
        this.setState((prevState) => ({ filterBy: { ...prevState.filterBy, [field]: !prevState.filterBy[field] } }))
        // () => {

        //     this.props.onSetFilter(this.state.filterBy)
        // })
    }




    render() {
        console.log('this.state.filterBy:', this.state.filterBy);

        const { filterBy } = this.state
        const label = { inputProps: { 'aria-label': 'freeCancel', 'name': 'freeCancel' } };
        return (
            <section>
                <div className="additional-filter-types-header" >
                    <button>x</button>
                    <p>More filters</p>
                </div>
                <div className='additional-filter-types flex' >
                    <div className='body'>
                        <h3>Free cancellation</h3>
                        <small>Only show stays that offer free cancellation</small>
                    </div>
                    <Switch {...label} checked={filterBy.freeCancel} onChange={this.toggleCheck} />
                    {console.log('label:', label)}
                </div>
                <div className='additional-filter-types flex' >
                    <div className='body'>
                        <h3>Verified places</h3>
                        <p>Airbnb Plus</p>
                        <small>A selection of places to stay verified for quality and design</small>
                    </div>
                    <Switch {...label} />
                    {console.log('label:', label)}
                </div>
                <div className='additional-filter-types' >
                    <h3>Type of place</h3>
                    <div>
                        <div className='check-box flex'>
                            <div className='filter-continuer flex'>
                                <input
                                    name="entirePlace"
                                    type="checkbox"
                                    checked={this.state.entirePlace}
                                    onChange={this.toggleCheck}
                                />
                                <div className='check-box-desc' >
                                    <p>Entire place</p>
                                    <small>Have a place to yourself</small>
                                </div>
                            </div>
                            <div className='filter-continuer flex'>
                                <input
                                    name="hotelRoom"
                                    type="checkbox"
                                    checked={this.state.hotelRoom}
                                    onChange={this.toggleCheck}
                                />
                                <div className='check-box-desc' >
                                    <p>Hotel room</p>
                                    <small>Have a private or shared room in a boutique hotel, hostel, and more</small>
                                </div>
                            </div>
                        </div>
                        <div className='spacial-filters flex'>
                            <div className='filter-continuer flex'>
                                <input
                                    name="privateRoom"
                                    type="checkbox"
                                    checked={this.state.privateRoom}
                                    onChange={this.toggleCheck}
                                />
                                <div className='check-box-desc' >
                                    <p>Private room</p>
                                    <small>Have your own room and share some common spaces</small>
                                </div>
                            </div>
                            <div className='filter-continuer flex'>
                                <input

                                    name="sharedRoom"
                                    type="checkbox"
                                    checked={this.state.sharedRoom}
                                    onChange={this.toggleCheck}
                                />
                                <div className='check-box-desc' >
                                    <p>Shared room</p>
                                    <small>Stay in a shared space, like a common room</small>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>


            </section>
        )
    }

}





// const label = { inputProps: { 'aria-label': 'Switch demo' } };

// export default function BasicSwitches() {
//     return (
//         <div>
//             <Switch {...label} defaultChecked />
//             <Switch {...label} />
//             <Switch {...label} disabled defaultChecked />
//             <Switch {...label} disabled />
//         </div>
//     );
// }
