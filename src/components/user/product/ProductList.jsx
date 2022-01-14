import React, { Component } from 'react';
import logo from '../../../logo.svg';

export default class ProductList extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-md-2'>
                    <div className="card product-list shadow" >
                        <div className='card-img-top'>
                            <img src={logo} alt="..." style={{width: '100%',height: "100%"}}/>
                        </div>
                        <div className="card-body border-side-primary p-3">
                            <h5 className="card-title m-1">Product title</h5>
                            <p className="card-text m-1 text-secondary">Product description is here </p>
                            <span className='float-right text-secondary'>date</span>
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-md-2'>
                    <div className="card product-list shadow" >
                        <div className='card-img-top'>
                            <img src={logo} alt="..." style={{width: '100%',height: "100%"}}/>
                        </div>
                        <div className="card-body border-side-primary p-3">
                            <h6 className="card-title m-1">Product title</h6>
                            <p className="card-text m-1 text-secondary">Product description is here </p>
                            <span className='float-right text-secondary'>date</span>
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-md-2'>
                    <div className="card product-list shadow" >
                        <div className='card-img-top'>
                            <img src={logo} alt="..." style={{width: '100%',height: "100%"}}/>
                        </div>
                        <div className="card-body border-side-primary p-3">
                            <h5 className="card-title m-1">Product title</h5>
                            <p className="card-text m-1 text-secondary">Product description is here </p>
                            <span className='float-right text-secondary'>date</span>
                        </div>
                    </div>              
                </div>
                <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-md-2'>
                    <div className="card product-list shadow" >
                        <div className='card-img-top'>
                            <img src={logo} alt="..." style={{width: '100%',height: "100%"}}/>
                        </div>
                        <div className="card-body border-side-primary p-3">
                            <h5 className="card-title m-1">Product title</h5>
                            <p className="card-text m-1 text-secondary">Product description is here </p>
                            <span className='float-right text-secondary'>date</span>
                        </div>
                    </div>              
                </div>
                
                
            </div>
        )
    }
}
