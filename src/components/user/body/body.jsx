import React, { Component } from 'react'
import ProductList from './ProductList'

export default class Body extends Component {
    render() {
        return (
            <div className='container-fluid p-4'>
                <ProductList/>
            </div>
        )
    }
}
