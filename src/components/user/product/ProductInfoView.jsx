import React, { Component } from 'react';
import ShareIcon from '@material-ui/icons/Share';
import SellerDesc from './SellerDesc';

export default class ProductInfoView extends Component {
    render() {
        return (
            <div className='container-fluid p-0 border-danger'>
                <div class="card shadow border-side-primary">
                    <div class="card-body">
                        <div className='card-body d-flex justify-content-between'>
                            <h5 class="card-title product-price">₹ 10,999</h5>
                            <span className='btn text-primary'><ShareIcon/></span>
                        </div>
                        <p class="card-text product-title h5">With supporting text below as a natural lead-in to additional content.</p>
                        <div className='card-body d-flex justify-content-between p-0'>
                            <p class="card-text text-secondary m-0 p-1 h6">product address</p>
                            <p className='card-text text-secondary p-1'>22/04/2021</p>
                        </div>
                    </div>
                </div>
                <SellerDesc/>
            </div>
        )
    }
}
