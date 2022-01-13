import React, { Component } from 'react';
import logo from '../../../logo.svg';

export default class ProductList extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div class="card" >
                        <img src={logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Product title</h5>
                            <p class="card-text">Product description is here </p>
                            
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div class="card" >
                        <img src={logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Product title</h5>
                            <p class="card-text">Product description is here </p>
                            
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div class="card" >
                        <img src={logo} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Product title</h5>
                            <p class="card-text">Product description is here </p>
                            
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3'>
                    <div class="card">
                        <img src={logo} class="card-img-top" style={{width: "100%"}}alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Product title</h5>
                            <p class="card-text">Product description is here </p>
                            
                        </div>
                    </div>              
                </div>
            </div>
        )
    }
}
