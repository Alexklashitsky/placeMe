import { BentoTwoTone } from '@mui/icons-material'
import { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from "@material-ui/core";


export class StayFilter extends Component {

    state = {
        currModalShown: ''
    }

    onOpenModal(value) {
        this.setState({ currModalShown: value }, () => console.log('this.state:', this.state))




    }

    render() {
        return (
            <section className='filter-header flex' >
                <ul className='special-stay flex clean-list'>
                    <li>Houseboats</li>
                    <li>Beachfront</li>
                    <li>Cabins</li>
                    <li>Treehouse</li>
                    <li>Ski in/Ski out</li>
                    <li>Amazing Places</li>
                    <li>farms</li>

                </ul>

                <div className='round-button'>
                    {/* <Button variant="outlined">Primary</Button> */}
                    <button onClick={() => this.onOpenModal('cal')} >Anytime </button>
                    <button onClick={() => this.onOpenModal('guests')}  >Guests</button>
                    <button onClick={() => this.onOpenModal('filters')} >Filters</button>
                </div>
                <div className={"cal-modal" + " " + `${this.state.currModalShown === 'cal' ? " " : "shown"}`}>

                </div>
                <div className={"guests-modal" + " " + `${this.state.currModalShown === 'guests' ? " " : "shown"}`}>

                </div>
                <div className={"filters-modal" + " " + `${this.state.currModalShown === 'filters' ? " " : "shown"}`}>

                </div>




            </section >
        )

    }
}