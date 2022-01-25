import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import FileUpload from '../../components/FileUpload';
import Select from 'react-select';

const options = [
    { value: 'Car', label: 'Car' },
    { value: 'Bike', label: 'Bike' },
    { value: 'Mobile', label: 'Mobile' }
  ]

export default class Sell extends Component {
    render() {
        return (
            <div className='content-wrapper'>
                <div className="content-wrapper m-0 w-100 p-4">
                    {/* <!-- Content Header (Page header) --> */}
                    <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                        <div className="col-12 col-md-6">
                            <h1>POST YOUR AD</h1>
                        </div>
                        <div className="col-12 col-md-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                                <li className="breadcrumb-item active">Product</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    {/* <!-- /.container-fluid --> */}
                    </section>

                    {/* <!-- Main content --> */}
                    <section className="content">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <Card title="Product" expand="1" collapse={1}>
                                    <div className="form-group">
                                    <label htmlFor="category">Product Category</label>
                                        <Select options={options}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputName">Product Name</label>
                                        <input type="text" id="inputName" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas ">₹</i></span>
                                            </div>
                                            <input type="text" id="price" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Product Description</label>
                                        <textarea id="inputDescription" className="form-control" rows="4"></textarea>
                                    </div>
                                    
                                    
                                </Card>
                            {/* <!-- /.card --> */}
                            </div>
                            <div className="col-12 col-md-6">
                            <Card title="Product Images" expand="1" collapse={1}>
                                <div className="form-group">
                                    <label htmlFor="brandName">Brand Name</label>
                                    <input type="text" id="brandName" className="form-control"/>
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
                                <input type="submit" value="Create new Porject" className="btn btn-success float-right"/>
                            </div>
                        </div>
                    </section>
                    {/* <!-- /.content --> */}
                </div>
            </div>
        )
    }
}
