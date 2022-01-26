import React, { Component } from 'react';
import Callout from './Callout';
import prod from '../img/prod-1.jpg';
import { Link } from 'react-router-dom';

export default class Add extends Component {
  render() {
    return (
        <Callout color="primary" className="p-0">
            <div className='row m-0'>
                <div className='col-12 col-sm-2 bg-light-gray d-flex flex-row justify-content-center align-items-center ' >
                    
                    <font className='p-2 p-sm-0 text-secondary bold'>{this.props.date?this.props.date:"date"}</font>
                    
                </div>
                
                <div className='col-12 col-sm-5 p-2'>
                    <div className='d-flex'>
                        <img src={prod} className='img-box' alt='prod img'></img>
                        <p className='m-0 ml-2 bold'>{this.props.price?this.props.price:"price"}</p>
                        
                    </div>
                    
                    
                    <p className='text-truncate'>{this.props.title?this.props.title:"title"}</p>
                </div>
                <div className='col-12 col-sm-5 p-2'>
                    <div className='adds-actions ml-auto text-right'>
                        <Link class="btn btn-primary btn-sm m-1" to={`/product/${this.props.prodId}`}>
                            <i class="fas fa-folder mr-md-1">
                            </i>
                            <font className='text-md'>View</font>
                        </Link>
                        <Link class="btn btn-info btn-sm m-1" to="/product/edit/">
                            <i class="fas fa-pencil-alt mr-md-1">
                            </i>
                            <font className='text-md'>Edit</font>
                        </Link>
                        <Link class="btn btn-danger btn-sm m-1" to="/product/delete/">
                            <i class="fas fa-trash mr-md-1">
                            </i>
                            <font className='text-md'>Delete</font>
                        </Link>
                    </div>
                </div>
            </div>
        </Callout>
    );
  }
}
