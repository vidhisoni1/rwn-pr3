import React from 'react'
import { useState } from 'react'
import './style.css'

const Footer = () => {
    const product = [
      {
       
      },
      {
       
      },
      {
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
  
 <div className='footer bg-danger'>
     <div className='container' >
           <div className='row'>
        <div className="col-lg-4 text-white">
<div className="single-footer-widget">
<h4>Opening Hours</h4>
<ul className="hr-list">
<li className="d-flex justify-content-between">
<span>Monday - Friday</span> <span>08.00 am - 10.00 pm</span>
</li>
<li className="d-flex justify-content-between">
<span>Saturday</span> <span>08.00 am - 10.00 pm</span>
</li>
<li className="d-flex justify-content-between">
<span>Sunday</span> <span>08.00 am - 10.00 pm</span>
</li>
</ul>
</div>
</div>
<div className="col-lg-4 text-white ">
<div className="single-footer-widget">
<h4>Contact Us</h4>
<p>
56/8, los angeles, rochy beach, Santa monica, United states of america - 1205
</p>
<p className="number">
012-6532-568-9746 <br/>
012-6532-569-9748
</p>
</div>
</div>
<div className="col-lg-4 text-white">
<div className="single-footer-widget">
<h4>Newsletter</h4>
<p>You can trust us. we only send promo offers, not a single spam.</p>
<div className="d-flex flex-row" id="mc_embed_signup">
<form className="navbar-form" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" novalidate="true">
<div className="input-group add-on align-items-center d-flex">
  <input className="form-control position-relative" name="EMAIL" placeholder="Your Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your Email address'" required="" type="email" fdprocessedid="t82k4i"/>
<div className=''>
{/* <input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text"/> */}
</div>
<div className="input-group-btn position-absolute">
<button className="genric-btn rounded-circle p-2 bg-danger text-white border border-white" fdprocessedid="ji2uut">--></button>
</div>
</div>
<div className="info mt-20"></div>
</form>
</div>
</div>
</div>
        </div>
        </div>
        </div>
      </>
    )
  }
  
export default Footer