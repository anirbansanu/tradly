import React from 'react';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: ''
    }
  }
  handleSubmit =(e)=>{
    e.preventDefault();
   console.log("SignIn")
  }
  handleEmailChange =(e) =>{
    // console.log(e.target.value)
    this.setState({email : e.target.value});
  }
  handlePasswordChange =(e) =>{
    // console.log(e.target.value)
    this.setState({password : e.target.value});
  }
  handleCheck =() =>{
    console.log("Remember_me")
  }
    render() {
        return (
          <center>
            <div className="login-box pt-5">
                      {/* <!-- /.login-logo --> */}
                      <div className="card card-outline card-primary">
                        <div className="card-header text-center">
                          <a href="../../index2.html" className="h1"><b>Admin</b>LTE</a>
                        </div>
                        <div className="card-body">
                          <p className="login-box-msg">Sign in to start your session</p>

                          <form action="../../index3.html" method="post">
                            <div className="input-group mb-3">
                              <input type="email" className="form-control" placeholder="Email" onChange={this.handleEmailChange} value={this.state.email}/>
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fas fa-envelope"></span>
                                </div>
                              </div>
                            </div>
                            <div className="input-group mb-3">
                              <input type="password" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} value={this.state.password}/>
                              <div className="input-group-append">
                                <div className="input-group-text">
                                  <span className="fas fa-lock"></span>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-8">
                                <div className="icheck-primary">
                                  <input type="checkbox" id="remember" onClick={this.handleCheck}/>
                                  <label htmlFor="remember">
                                    Remember Me
                                  </label>
                                </div>
                              </div>
                              {/* <!-- /.col --> */}
                              <div className="col-4">
                                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign In</button>
                              </div>
                              {/* <!-- /.col --> */}
                            </div>
                          </form>

                          <div className="social-auth-links text-center mt-2 mb-3">
                            <a href="#i" className="btn btn-block btn-primary">
                              <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
                            </a>
                            <a href="#i" className="btn btn-block btn-danger">
                              <i className="fab fa-google-plus mr-2"></i> Sign in using Google+
                            </a>
                          </div>
                          {/* <!-- /.social-auth-links --> */}

                          <p className="mb-1">
                            <a href="forgot-password.html">I forgot my password</a>
                          </p>
                          <p className="mb-0">
                            <a href="register.html" className="text-center">Register a new membership</a>
                          </p>
                        </div>
                        {/* <!-- /.card-body --> */}
                      </div>
                      {/* <!-- /.card --> */}
                    </div>
                    </center>
        )
    }
}
export default Login;