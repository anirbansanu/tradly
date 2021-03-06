import React, { Component } from 'react';
import logo from '../../../product.jpg';
import user from '../../../services/userServices';
import {Link} from 'react-router-dom';
export default class ProductList extends Component {
    constructor(props){
        super(props);
        this.state={
            list:[],
            loaded:false
        }
    }
    async getProductList(){
        try{
            const res = await user.products();
            // console.log(res.data);
            const actualData = await res.data;
            this.setState({
                list:actualData,
                loaded: true
            });
            console.log(actualData);
    
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.getProductList();
        //console.log(this.props);
    }
    render() {
        return (
            <div className='row m-0'>
            {
                this.state.loaded?this.state.list.map((item, i) => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mt-2' key={i}>
                        <Link className="text-decoration-none" to={`/product/${item.id}`}>
                            <div className="card product-item shadow" >
                                <div className='card-img-top'>
                                    <img src={logo} alt="product-img" style={{width: '100%',height: "100%"}}/>
                                </div>
                                <div className="card-body border-side-primary p-2">
                                    <h5 className="card-title m-1 text-dark font-weight-bold">{"₹"+item.price}</h5>
                                    <p className="card-text m-1 text-secondary">{item.name}</p>
                                    
                                </div>
                                <div className="card-body border-side-primary p-2 d-flex">
                                    <span className='m-1 text-secondary text-truncate'>{item.city+","+item.district+","+item.state}</span>
                                    <span className='ml-auto m-1 text-secondary '>{item.date}</span>
                                </div>
                            </div>  
                        </Link>            
                    </div>
                )):"Nothing To Show"
                
            }
                
            </div>
        )
    }
}
