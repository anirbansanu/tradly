import React, { Component } from 'react';
import Filters from '../../components/filter/Filters';
import ProductList from '../../components/user/product/ProductList';

export default class Home extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                
                <Filters/>
                <ProductList/>
            </div>
        )
    }
}
