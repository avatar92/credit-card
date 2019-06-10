import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'; 

const VisaCard = ()=>
    <div className="maincardcontainer">
        <h1 className="mainTitle"> <strong >CREDIT CARD</strong></h1>
        <img className="emvShipCard" src="https://pngimage.net/wp-content/uploads/2018/05/chip-credit-card-png-9-230x200.png" alt="puce"></img>
        <div className="cardCode">
            <p className="goldCorlor ">7253</p>
            <p className="goldCorlor ">3256</p>
            <p className="goldCorlor ">7895</p>
            <p className="goldCorlor ">1245</p>
        </div>
        <div className="cardSecurityAndExperationDate">
            <span className="securityCode">5422</span>
            <div className="experationDate">
                <div className="firstContainer">    
                    <span className="validThru">VALID <br/> THRU</span>
                    <i class="fa fa-caret-right icon1"></i>
                </div>
                <div className="secondContainer">
                    <span className="monthandyear">MONTH/YEAR</span>
                    <span>11/50</span>
                </div>
            </div>
        </div>
        <p className="moreeditting">CARDHOLDER</p>
        <div className="visaandmasterCard">
            <img className="brandicon" src="https://boutique.letemps.ch/moxiemanager/data/products/paymenticons/mastercard_payment.png.pagespeed.ce.Ky4aKPTuWO.png"  alt="mastervisaicon"></img>
            <img className="brandicon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/1280px-Visa.svg.png" alt="visaicon"></img>
        </div>
    </div>; 
ReactDOM.render(
<VisaCard />,
document.getElementById('card')
);

