import { Component } from 'react'
import { connect } from 'react-redux'

export class GuestsFilter extends Component {

    state = {
        guests: {
            adults: 0,
            children: 0,
            infants: 0,
            Pets: 0
        }

    }

    render() {
        const { guests } = this.state
        return (
            <section>
                <div className='guests-types'>
                    <div className='guest-type flex' >
                        <div className='gust-info'>
                            <h3>Adults</h3>
                            <p>Ages 13 or above</p>
                        </div>
                        <div className='guest-num flex'>
                            <button>-</button>
                            {guests.adults}
                            <button>+</button>
                        </div>
                    </div>
                </div>

                <div className='guests-types'>
                    <div className='guest-type flex' >
                        <div className='gust-info'>
                            <h3>Children</h3>
                            <p>Ages 2–12</p>
                        </div>
                        <div className='guest-num flex'>
                            <button>-</button>
                            {guests.children}
                            <button>+</button>
                        </div>
                    </div>
                </div>
                <div className='guests-types'>
                    <div className='guest-type flex' >
                        <div className='gust-info'>
                            <h3>Infants</h3>
                            <p>Under 2</p>
                        </div>
                        <div className='guest-num flex'>
                            <button>-</button>
                            {guests.infants}
                            <button>+</button>
                        </div>
                    </div>
                    <div className='guests-types'>
                        <div className='guest-type flex' >
                            <div className='gust-info'>
                                <h3>Pets</h3>

                            </div>
                            <div className='guest-num flex'>
                                <button>-</button>
                                {guests.Pets}
                                <button>+</button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


        )
    }
}