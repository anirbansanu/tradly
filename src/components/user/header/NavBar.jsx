import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
export default class NavBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-dark bg-primary">
                    <h5 className="navbar-brand display-1 font-weight-bold m-0 p-3">Tradly</h5>
                    
                    <div className="form-group col-md-2 p-2 m-0">
                        <select id="inputState" className="form-control">
                            <option defaultValue={''}>State</option>
                            <option value="">...</option>
                        </select>
                    </div>    
                    <div className="form-group col-md-2 p-2 m-0">
                        <select id="inputState" className="form-control">
                            <option defaultValue={''}>City</option>
                            <option value="">...</option>
                        </select>
                    </div>     
                    <form className='col-md-4'>
                        <div className="form-group m-0">
                            <div className="input-group">
                                <input type="text" className="form-control border-0" placeholder="Type Here To Search" aria-label="Search" aria-describedby="Search"/>
                                <div className="input-group-append">
                                    <span className="btn btn-light border-0 p-0 pl-1 pr-1 text-primary"><SearchIcon fontSize="large"/></span>
                                </div>
                            </div>
                        </div>
                    </form>
                    <ul className="navbar-nav ml-md-auto d-inline-block ">
                        <li className="nav-item d-inline-block">
                            <a href="\" className="nav-link p-1 " activeclassname="text-white" aria-current="page" to="/my-web" ><b>Log in</b></a>
                        </li>  
                        <li className="nav-item d-inline-block">
                            <a href="\" className="nav-link p-1" activeclassname="text-white" aria-current="page" to="/my-web" ><b>Log in</b></a>
                        </li> 
                    </ul>
                    
                </nav>
        )
    }
}
