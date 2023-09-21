import React from 'react'
import { Container } from 'react-bootstrap'
import burger from './Images/about-img.jpg.webp'
function About() {
  return (
    <div className='About'>
        <Container>
            <div className='row'>
               <div className='col-6 pt-4'>
                <h2>About Our Story</h2>
                <p className='text-secondary mt-4'>Who are in extremely love with eco friendly system. 
                    Lorem ipsum dolor <br/> sit amet, consectetur adipisicing elit,
                     sed do eiusmod tempor <br/>incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim <br/> veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea <br/> commodo consequat.</p>
                     <button className='btn btn-danger mt-4'>VIEW FULL MENU</button>
               </div> 
               <div className='col-6'>
    <img src={burger} alt=""/>
               </div>
            </div>

        </Container>
    </div>
  )
}

export default About