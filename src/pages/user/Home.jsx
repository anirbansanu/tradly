import React, { Component } from 'react';
import Categories from '../../components/filter/Categories';
import FilterBox from '../../components/filter/FilterBox';
import ProductList from '../../components/user/product/ProductList';
import Header from '../../components/user/header/Header';
import Menu from '../../components/user/sidebar/Menu';

export default class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <Menu/>
            <div className='content-wrapper'>
                <Categories/>
                <ProductList/>
                <FilterBox />
            </div>
            </>
        )
    }
}
