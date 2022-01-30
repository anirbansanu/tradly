import React, { Component } from 'react'

export default class Categories extends Component {
    render() {
        return (
            <div className='container-fluid p-2 shadow-sm'>
                <div className="row m-0">
                    <div className="col-12 col-md-3">
                        <div className="form-group m-0">
                            <select id="inputState" className="form-control">
                                <option defaultValue={''}>Category</option>
                                <option value="Car">Car</option>
                                <option value="Bike">Bike</option>
                            </select>
                        </div>     
                    </div>
                    <div className="col-12 col-md-9">
                        <ul className="navbar-nav ml-md-auto d-inline-block ">
                            <li className="nav-item d-inline-block">
                                <div className="cat-item" activeclassname="text-white">
                                    <b>Car</b>
                                </div>
                            </li>  
                            <li className="nav-item d-inline-block">
                                <div className='cat-item'><b>Bikes</b></div>
                            </li> 
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
