import { BentoTwoTone } from '@mui/icons-material'
import { Component } from 'react'
import { connect } from 'react-redux'


export class StayFilter extends Component {
    state = {}


    render() {
        return (
            <section className='filter-header flex' >
                <ul className='special-stay flex '>
                    <li>Houseboats</li>
                    <li>Beachfront</li>
                    <li>Cabins</li>
                    <li>Treehouse</li>
                    <li>Ski in/Ski out</li>
                    <li>Amazing Places</li>
                    <li>farms</li>

                </ul>

                <div className='round-button'></div>
                <button>Anytime </button>
                <button>Guests</button>
                <button>Filters</button>
            </section>
        )

    }
}