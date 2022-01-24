import React, { Component } from 'react';

import ProductDetailsCompo from '../../components/user/product/ProductDetailsCompo';

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            info:[],
            loaded:false
        }
        console.log("Product Details");
    }
    async getProductInfo(prevProps, nextProps){
        try{
            const res = await fetch("http://localhost:8070/product/"+this.props.match.params.id);
            const actualData = await res.json();
            //console.log(actualData);
            if(prevProps !== this.props){
                this.setState({
                    info:actualData,
                    loaded: true
                });
            }
            console.log(actualData);
    
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.getProductInfo();        
    }
    render() {
        return (
            this.state.loaded?
            <>
            <div className='content-wrapper'>
                <ProductDetailsCompo info = {this.state.info[0]}/>
            </div>
            </>
            :"Loding..."
        )
    }
}
// let  = (props)=>{
//     let { id } = useParams();
//     console.log("id : "+id);
//     return <Details id={id}/>;
// }

export default ProductDetails;