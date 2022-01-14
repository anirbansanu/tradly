import React, { Component } from 'react';
import logo from '../../../avatar.jpg';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default class SellerDesc extends Component {
    render() {
        return (
            <div className="card mt-2 shadow border-side-primary">
                <div className="card-body">
                <h5 className="card-title product-price">Seller description</h5>
                    <div className='card-body d-flex justify-content-between'>
                        <div className='card-body d-flex p-0'>
                            <img src={logo} className="rounded-circle seller-img" alt="..." width={60} height={60}/>
                            <h6 className="card-text font-weight-bold seller-title p-2 m-0">Anirban Mukherjee
                            <p className='font-weight-light text-secondary h6'>member</p></h6>

                        </div>
                        <span className='btn'><ArrowForwardIosIcon/></span>
                    </div>
                    <div className="card-body d-flex justify-content-center p-0">
                        <button className='btn btn-outline-primary btn-lg btn-block font-weight-bold '>Chat With Seller</button>      
                    </div>              
                </div>
            </div>
        )
    }
}
