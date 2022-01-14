import React, { Component } from 'react';
import Categories from '../../components/user/filter/Categories';
import ProductList from '../../components/user/product/ProductList';

export default class Home extends Component {
    render() {
        return (
            <div className=''>
                
                <Categories/>
                <ProductList/>
            </div>
        )
    }
}
