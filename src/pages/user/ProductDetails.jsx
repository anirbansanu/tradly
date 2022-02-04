import React, { Component } from 'react';
import ProductDetailsCompo from '../../components/user/product/ProductDetailsCompo';
import user from '../../services/userServices';
import HashLoader from "react-spinners/HashLoader";
import Header from '../../components/user/header/Header';
import Menu from '../../components/user/sidebar/Menu';


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
            const res = await user.product(this.props.match.params.id);
            const actualData = await res.data;
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
            
            <>
                <Header/>
                <Menu/>
            <div className='content-wrapper'>
            {this.state.loaded?<ProductDetailsCompo info = {this.state.info[0]}/>:
                <div className='d-flex justify-content-center align-center' style={{height:'70vh'}}>
                    <HashLoader color={"#222"} loading={!this.state.loaded} size={100} />
                </div>
            }
            </div>
            </>
            
        )
    }
}
// let  = (props)=>{
//     let { id } = useParams();
//     console.log("id : "+id);
//     return <Details id={id}/>;
// }

export default ProductDetails;