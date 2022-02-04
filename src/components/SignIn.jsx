import React from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import Form from "./common/form";
import user from '../services/userServices';
import { Link } from "react-router-dom";

export default class SignIn extends Form {
    state = {
        data: { email: "", password: "" },
        errors: {}
    };
    
    schema = {
        email: Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).label("Email"),
        password: Joi.string()
          .required()
          .label("Password")
    };
    
    doSubmit = async() => {
        try{
            const res= await user.login({email: this.state.data.email,password: this.state.data.password});
        //   localStorage.setItem('token', jwt);
            console.log(res.data);
            if(res.data.length===1){
                toast.success(`WelCome ${res.data[0].f_name}`);
                this.props.history.push('/');
            }
            else{
                toast.error("email or password not matched");
            }
            // this.props.history.push('/');
        //   window.location='/';
        }catch(e){
            console.log(e.response.data);
            if(e.response.data && e.response.status===404){
                toast.error(e.response.data);
            }
        }
    
    };
    render() {
        return (
            <div className="d-flex justify-content-center align-center">
                <div className="login-box pt-5">
                    {/* <!-- /.login-logo --> */}
                    <div className="card card-outline card-primary">
                    <div className="card-header text-center">
                        <Link to="/home" className="h1"><b>Tradly</b>App</Link>
                    </div>
                    <div className="card-body">
                        <p className="login-box-msg">Sign in to start your session</p>

                        <form onSubmit={this.handleSubmit}>
                            {this.renderInputAppendGroup("email", "Email",'email','','fas fa-envelope')}
                            {this.renderInputAppendGroup("password", "Password", "password",'','fas fa-lock')}
                            <div className="d-flex justify-content-end">
                                {this.renderButton("Login")}
                            </div>
                        </form>

                        <p className="mb-1">
                        {/* <a href="forgot-password.html">I forgot my password</a> */}
                        </p>
                        <p className="mb-0">
                            <Link to="/reg" className="text-center">Register a new membership</Link>
                        </p>
                    </div>
                    {/* <!-- /.card-body --> */}
                    </div>
                    {/* <!-- /.card --> */}
                </div>
            </div>
            
        );
    }
}
