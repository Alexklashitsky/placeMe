import { Component } from 'react'
import { connect } from 'react-redux'
import { TestCal } from './test-cal';
import { GuestsFilter } from './GuestsFilter'
import { AdditionalFilter } from '../cmps/AdditionalFilters'



import 'react-day-picker/lib/style.css';

// import { Button } from "@material-ui/core";


export class StayFilter extends Component {

    state = {
        currModalShown: ''
    }

    onOpenModal(value) {
        this.setState({ currModalShown: value }, () => console.log('this.state:', this.state))




    }

    render() {
        const { currModalShown } = this.state
        return (

            <section className='filter-header flex' >
                {currModalShown && <div className='screen' onClick={() => this.onOpenModal('')}></div>}
                <section className='special-stay '>
                    <div>Houseboats</div>
                    <div>Beachfront</div>
                    <div>Cabins</div>
                    <div>Treehouse</div>
                    <div>Ski in/Ski out</div>
                    <div>Amazing Places</div>
                    <div>farms</div>

                </section>

                <div className='round-button'>
                    {/* <Button variant="outlined">Primary</Button> */}
                    <button onClick={() => this.onOpenModal('cal')} >Anytime </button>
                    <button onClick={() => this.onOpenModal('guests')}  >Guests</button>
                    <button onClick={() => this.onOpenModal('filters')} >Filters</button>
                </div>

                <div className={"cal-modal" + " " + `${this.state.currModalShown === 'cal' ? " shown" : ""}`}>
                    {/* <CalendarComp /> */}
                    <TestCal />
                    <button className='save' onClick={() => this.onOpenModal('')} >save</button>

                </div>

                <div className={"guests-modal" + " " + `${this.state.currModalShown === 'guests' ? "shown" : ""}`}>
                    <GuestsFilter />

                </div>

                <div className={"filters-modal" + " " + `${this.state.currModalShown === 'filters' ? "shown" : ""}`}>
                    <AdditionalFilter />
                </div>

            </section >
        )

    }
}