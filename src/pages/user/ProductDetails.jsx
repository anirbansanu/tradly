import React, { Component } from 'react';

import ProductInfoView from '../../components/user/product/ProductInfoView';
import ProductCarousel from '../../components/user/product/ProductCarousel';
import ProductDesc from '../../components/user/product/ProductDesc';

export default class ProductDetails extends Component {
    render() {
        return (
            <div className='container-fluid p-2 p-lg-5'>
                <div className='row m-0'>
                    <div className='col-12 col-lg-6'>
                        <ProductCarousel/>
                        <ProductDesc/>
                    </div>
                    <div className='col-12 col-lg-6 '>
                        <ProductInfoView/>
                    </div>
                </div>
            </div>
        )
    }
}
