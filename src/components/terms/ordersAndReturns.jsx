import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Link } from 'react-router-dom';
const OrdersAndReturns = (props) => {
    return (
        <div>
            <Header />
            <br />
            <br />
            <div className="container">

                <div className="blended_grid">
                    <div className="row1">
                        <span className="span1">Orders and Return</span>
                        <b />

                        <div style={{ background: '#ff0066', width: '100%', maxWidth: '1170px', height: '2px' }}></div>
                        <br />
                    </div>


                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>Refund and Return Policy</div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>

                        You can initiate a return up to 7 days after delivery if:
                        You receive a wrong, damaged, defective or counterfeit item
                        You change your mind with the exception of Shipped-from-Overseas items, underwear, adult toys, perfumes, cosmetics, hair extensions and jewelry.
                        
<br />
                        When returning an item, ensure all seals, tags and accessories are left intact and item is in it's original packaging. If you have created a password on the device you wish to return, please ensure it is removed, otherwise, your return will be invalid.
                        
<br />
                        <br />
                        <br />
                    </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>How do I return an Item?</div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        Online or Offline at our office.
<br />
                        <br />
                    </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>How long will it take to return an item and get  my refund?</div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        Five Business days
<br />
                        <br /> </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>Once I initiate a return, What happens next?</div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        If the package was delivered to you and you requested for a pick-up, our delivery agent will call you to schedule a retrieval. There will be 2 attempts made to retrieve the item(s).
                        
                        If you initially picked-up your package from one of our stations or chose to drop-off at one, please take the items you wish to return to a pick-up station near you.
                        
<br />
                        <br /> </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>I have requested for returns pick-up from my home, how long will it take? </div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        Once we receive your request, we will make two attempts to retrieve the item(s).
                        
<br />
                        <br /> </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>What happens if i miss both attempts to retrieve my return? </div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        Your return request will be cancelled and you will no longer be able to return that item.
                        
<br />
                        <br /> </div>

                    <div style={{ color: '#ff0066', textAlign: 'left', fontSize: '18px', lineHeight: '22px', marginBottom: '5px' }}>Can I return an Item after 7 days?</div>

                    <div style={{ textAlign: 'justify', fontSize: '12px', lineHeight: '22px' }}>
                        You will not be able to return an item after 7 days but if it is faulty, it may be covered under warranty.
                        
<br />
                        <br /> </div>





                    <div className="about-row">
                        <center>
                            <p className="clor">Ready to start Shopping?</p>
                            <br />
                            <Link to="/" className="btnn">Shop Now</Link>
                        </center>

                    </div>


                </div>

            </div>
            <br />
            <br />


            <Footer />
        </div>

    )
}
export default OrdersAndReturns;