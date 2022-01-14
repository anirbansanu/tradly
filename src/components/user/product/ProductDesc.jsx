import React, { Component } from 'react'

export default class ProductDesc extends Component {
    render() {
        return (
            <div class="card shadow mb-4 border-side-danger">
                    <div class="card-body">
                        <div className='card-body d-flex justify-content-between p-0'>
                            <h5 class="card-title product-price">Description</h5>
                        </div>
                        <p class="card-text product-desc h6">With supporting text below as a</p>
                        <p class="card-text product-desc h6">natural lead-in to additional content.</p>
                        
                    </div>
                </div>
        )
    }
}
