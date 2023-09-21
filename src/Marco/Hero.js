import React from 'react'
import Header from './Header'
import { Container } from 'react-bootstrap'

function Hero() {
    return (
        <div className='hero'>
            <Header />
            <Container>
                <div className='col-lg-12 banner-content mt-5'>
                    <h6 className='text-white'>WIDE OPTIONS OF CHOICE</h6>
                    <h1 className='text-white mt-4 mb-4'>Delicious Recipes</h1>
                    <p className='text-white'>inappropriate behavior is often laughed off as “boys will be boys,” women <br/> 
                    face higher conduct standards especially in the workplace. That’s why it’s <br/>
                     crucial that, as women.
                    </p>
                    <button className="btn btn-danger ">CHECK OUR MENU</button>
                </div>
            </Container>
        </div>
    )
}

export default Hero