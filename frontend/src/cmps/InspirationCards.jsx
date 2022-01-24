import React from 'react'
import Card from './HomeCityCards.jsx'
import NY from '../assets/imgs/matteo-catanese-dVCGpKZB_E8-unsplash.jpg'
import Paris from '../assets/imgs/chris-karidis-nnzkZNYWHaU-unsplash.jpg'
import Prague from '../assets/imgs/dmitry-goykolov-X8Vo9rGVPS8-unsplash.jpg'
import London from '../assets/imgs/alexander-london-3l1sjp562qQ-unsplash.jpg'


function inspirationCards() {
    return (
        <div>
            <p className="inspiration-title">Inspiration for your next trip</p>
            <div className='inspiration-cards-container'>

                <Card
                    src={NY}
                    title="New York City"
                />
                <Card
                    src={Paris}
                    title="Paris"
                />
                <Card
                    src={Prague}
                    title="Prague"
                    
                />
                <Card
                    src={London}
                    title="London"
                    
                />
            </div>
            <p className="inspiration-title">Top rated spots for your next vacation</p>
            <div className='inspiration-cards-container'>
                
                <Card
                    src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                    title="3 Bedroom Flat in Bournemouth"
                    description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                    price="£130/night"
                />
                <Card
                    src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                    title="Penthouse in London"
                    description="Enjoy the amazing sights of London with this stunning penthouse"
                    price="£350/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
                <Card
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title="1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="£70/night"
                />
            </div>
        </div>
    )
}

export default inspirationCards
