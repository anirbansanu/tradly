import React, { Component } from 'react';
import ProductInfoView from '../../components/user/product/ProductInfoView';
import ProductCarousel from '../../components/user/product/ProductCarousel';
import ProductDesc from '../../components/user/product/ProductDesc';

class ProductDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            info:[],
            loaded:false
        }
        console.log("Product Details");
    }
    async getProductInfo(){
        try{
            const res = await fetch("http://localhost:8070/product/"+3);
            const actualData = await res.json();
            //console.log(actualData);
            this.setState({
                info:actualData,
                loaded: true
            });
            console.log(actualData);
    
        }
        catch(err){
            console.log(err);
        }
        
    }
    componentDidMount(){
        this.getProductInfo();
        console.log("this is Props : ");
        console.log(this.props);
    }
    render() {
        return (
            this.state.loaded?
            <div className='container-fluid p-2 p-lg-5'>
                <div className='row m-0'>
                    <div className='col-12 col-lg-6'>
                        <ProductCarousel/>
                        <ProductDesc info={this.state.info[0]}/>
                    </div>
                    <div className='col-12 col-lg-6 '>
                        <ProductInfoView info={this.state.info[0]}/>
                    </div>
                </div>
            </div>:"Loding..."
        )
    }
}
// let  = (props)=>{
//     let { id } = useParams();
//     console.log("id : "+id);
//     return <Details id={id}/>;
// }

export default ProductDetails;