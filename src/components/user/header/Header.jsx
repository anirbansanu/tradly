import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userPic from '../../../img/user1-128x128.jpg';

export default class Header extends Component {
    render() {
        return (
           <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light ">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="/"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/" className="nav-link">Contact</a>
      </li>
    </ul>
    
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* { Search form } */}
      <li className="nav-item">
        <a className="nav-link" data-widget="navbar-search" href="/" role="button">
          <i className="fas fa-search" />
        </a>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      {/* /. End Of Search Form */}
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" aria-expanded="false">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src={userPic} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src={userPic} alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src={userPic} alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="/">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Notifications</span>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="/" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      {/* User Dropdown Menu */}
      <li className="nav-item dropdown">
        {/* <a className="nav-link" data-toggle="dropdown" href="/">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a> */}
        <div className="user-panel d-flex" data-toggle="dropdown" >
          <div className="image">
            <img src={userPic} className="img-circle " alt="User Profile Pic"/>
          </div>
          <div className="info">
            <Link className="d-block">Alexander Pierce</Link>
          </div>
        </div>
        
        
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header bg-gradient-primary bold">Profile</span>
          <div className="dropdown-divider" />
          <Link to="/profile" className="dropdown-item">
            <i className="fas fa-user mr-2" /> View
            
          </Link>
          <div className="dropdown-divider" />
          <Link to="/log_out" className="dropdown-item">
            <i class="fas fa-sign-out-alt mr-2"/>Log Out
            <span className="float-right text-muted text-sm">2 days</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/terms" className="dropdown-item dropdown-footer">Terms and conditions</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="fullscreen" role="button">
          <i className="fas fa-expand-arrows-alt"></i>
        </Link>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="/">
          <i className="fas fa-th-large" />
        </a>
      </li> */}
    </ul>
  </nav>
</div>

        )
    }
}
