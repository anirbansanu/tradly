import React, { Component } from 'react';
import Card from '../../components/Card';
import FileUpload from '../../components/FileUpload';
import Select from 'react-select';
import ContentHeader from '../../components/ContentHeader';
import user from '../../services/userServices';
import DatePicker from "react-datepicker";
import Header from '../../components/user/header/Header';
import Menu from '../../components/user/sidebar/Menu';
import "react-datepicker/dist/react-datepicker.css";


// const options = [
//     { value: 'Car', label: 'Car' },
//     { value: 'Bike', label: 'Bike' },
//     { value: 'Mobile', label: 'Mobile' }
//   ]

export default class Sell extends Component {
    constructor(props){
        super(props);
        this.state={
            name: '',
            brand_name: '',
            description:'',
            file:'',
            purchase_date:'',
            price:'',
            seller_id:'',
            category_id:'',
            cats_list: []
        }
    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        
    };
    handleDateChange=(date)=>{
        this.setState({ purchase_date: date });
    }
    getCats= async (prevProps, nextProps)=>{
        try{
            const res = await user.cats();
            const actualData = await res.data;
            //console.log(actualData);
            let data = [];
            data=actualData.map((item)=>{
                return { value: item.id.toString(),label: item.cat_name.toString()};
                
            });

            if(prevProps !== this.props){
                this.setState({
                    cats_list:data,
                });
            }
            console.log(data);
    
        }
        catch(err){
            console.log(err);
        }
        
    }
    async componentDidMount(){
        await this.getCats();
    }
    render() {
        return (
            <>
            <Header/>
            <Menu/>
                <div className="content-wrapper ">
                    {/* <!-- Content Header (Page header) --> */}
                    
                    <ContentHeader title="Post Your Add" url={["Home","Product"]}/>

                    {/* <!-- Main content --> */}
                    <section className="content mb-4">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Card title="Product" expand="1" collapse={1}>
                                    <div className="form-group">
                                    <label htmlFor="category">Product Category</label>
                                        <Select options={this.state.cats_list} name="category_id" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Purchase Date</label>
                                        <DatePicker dateFormat="dd/MM/yy" selected={this.state.purchase_date} onChange={(date)=>this.handleDateChange(date)}/>
                                        {/* <div className="input-group date" id="reservationdate" data-target-input="nearest">
                                            <input type="text" className="form-control datetimepicker-input" data-target="#reservationdate"/>
                                            <div className="input-group-append" data-target="#reservationdate" data-toggle="datetimepicker">
                                                <div className="input-group-text"><i className="fa fa-calendar"></i></div>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Product Name</label>
                                        <input type="text" id="inputName" name="name" value={this.state.name} onChange={this.handleChange} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="brandName">Brand Name</label>
                                        <input type="text" id="brandName" name="brand_name" value={this.state.brand_name} onChange={this.handleChange} className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas ">₹</i></span>
                                            </div>
                                            <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleChange} className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </Card>
                            {/* <!-- /.card --> */}
                            </div>
                            <div className="col-12 col-md-6">
                            <Card title="Product Images" expand="1" collapse={1}>
                                <div className="form-group">
                                    <label htmlFor="inputDescription">Product Description</label>
                                    <textarea id="inputDescription" name="description" value={this.state.description} onChange={this.handleChange} className="form-control" rows="4"></textarea>
                                </div>
                                
                                <FileUpload/>
                                {/* <!-- /.card-body --> */}
                            </Card>
                            {/* <!-- /.card --> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button className="btn btn-secondary">Cancel</button>
                                <input type="submit" value="Post" name="submit" className="btn bg-gradient-primary float-right"/>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </>
        )
    }
}
