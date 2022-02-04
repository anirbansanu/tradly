import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SignUP extends Component {
    constructor(props){
        super(props);
        this.state={
            f_name: '',
            l_name: '',
            email: '',
            password: '',
            c_password: '',
            district: '',
            state:'',
            city:'',
            country:'',
            tab: 1,
            status: false,
            error: {}
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);

    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
        
    };
    nxtTab = (nxttab) => {
        this.setState({tab: nxttab})
    }
  render() {
    return (
        <section className="content mb-4 d-flex justify-content-center align-center">
                    
            <div className="register-box pt-3 mt-4">
                <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/home" className="h1"><b>Tradly</b>App</Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Register a new membership</p>

                        <form onSubmit={this.handleSubmit} method="post">
                            <div className={`tab ${this.state.tab===1?"":'d-none'}`}>
                                <div className="input-group mb-3">
                                <input type="text" name='f_name' className="form-control" placeholder="First Name" onChange={this.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                    </div>
                                </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name='l_name' className="form-control" placeholder="Last Name" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-user"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="email" name="email" className="form-control" placeholder="Email" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                </div>
                                <div className="input-group mb-3">
                                <input type="password" name="c_password" className={`form-control ${this.state.c_password===this.state.password?'':'is-invalid'}`} placeholder="Retype password" onChange={this.handleChange}/>
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" onClick={()=>this.nxtTab(2)} className="btn btn-primary btn-sm bold" >Next</button>
                                </div>
                            </div>
                            <div className={`tab ${this.state.tab===2?"":'d-none'}`}>
                                <div className="input-group mb-3">
                                    <input type="text" name='city' className="form-control" placeholder="Your City" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-city"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name='district' className="form-control" placeholder="Your District" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-map-marked-alt"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name='state' className="form-control" placeholder="Your State" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-map-marked-alt"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-group mb-3">
                                    <input type="text" name='country' className="form-control" placeholder="Your Country" onChange={this.handleChange}/>
                                    <div className="input-group-append">
                                        <div className="input-group-text">
                                        <span className="fas fa-flag"></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <button type="button" onClick={()=>this.nxtTab(1)} className="btn btn-sm btn-outline-primary bold ">Previous</button>
                                    <button type="submit" className="btn btn-primary btn-sm bold" >Sign Up</button>
                                </div>
                            </div>
                            
                        </form>
                        <div className="d-flex justify-content-center">
                            <Link to="/login" className="p-2">I already have a membership</Link>
                        </div>
                    </div>
                {/* <!-- /.form-box --> */}
                </div>
            </div>
                        
                    
        </section>
    );
  }
}
