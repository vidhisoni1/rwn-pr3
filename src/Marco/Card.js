import React from 'react'
import { useState } from 'react'
import './style.css'
// import bg from './Images/b1.jpg.webp'


const Card = () => {
  const product = [
    {
      img : 'https://preview.colorlib.com/theme/marco/img/b1.jpg',
      date :'10 jan 2018',
      name : 'Cooking Perfect Fried Rice in minutes',
      discription : 'inappropriate behavior ipsum dolor sit amet, consectetur.'
    },
    {
      img : 'https://preview.colorlib.com/theme/marco/img/b2.jpg',
      date :'10 jan 2018',
      name : 'Secret of making Heart Shaped eggs',
      discription : 'inappropriate behavior ipsum dolor sit amet, consectetur.'

    },
    {
      img : 'https://preview.colorlib.com/theme/marco/img/b3.jpg',
      date :'10 jan 2018',
      name : 'How to check steak if it is tender or not',
      discription : 'inappropriate behavior ipsum dolor sit amet, consectetur.' 
    },
    {
      img : 'https://preview.colorlib.com/theme/marco/img/b4.jpg',
      date :'10 jan 2018',
      name : 'Seaseme and black seed Flavored Bun Rocks',
      discription : 'inappropriate behavior ipsum dolor sit amet, consectetur.' 
    }
 ]
  const [item, setItem] = useState(product)
  function search(value) {
    const filter = product.filter((elem) => {
      if (elem.name.includes(value)) {
        return elem
      }
    })
    setItem(filter)
  }
  return (
    <>

      <div className='blog'>
       <div className='container' >
        <div className='text-center mb-5 mt-2'>
          <h2>Latest From Our Blog</h2>
          <p>Lorem ipsum dolor sit amet,
             consectetur adipisicing elit, 
             sed do eiusmod tempor incididunt ut labore et <br/> dolore magna aliqua.</p>
        </div>
        <div className='row'>
          {
          item.map((elem) => {
            return (
              <div className='col-3 mt-2'>
                
                 <div className=' card border-0 shadow-sm bg-body-tertiary border-rounded'>
                  <div className='overflow-hidden'>
                     <img src={elem.img} width='100%' className='img'/>
                  </div>
                  <h6 className='mt-2 bg-dark text-light p-1 date'>{elem.date}</h6>
                  <h5 className='mt-2'>{elem.name}</h5>
                  <p className='mt-2 '>{elem.discription}</p>
                  <ul className='d-flex justify-content-between p-1'>
                    <li className=''><i class="fa-regular fa-heart"></i>15 likes</li>
                    <li className=''><i class="fa-regular fa-comment"></i>2 comment</li>
                  </ul>
                  </div>
                
              </div>
            )
          })
        }
      </div>
      </div>
      </div>
    </>
  )
}

export default Card 