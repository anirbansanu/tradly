import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './filter.css';
import Select from 'react-select';
const options = [
    { value: 'Car', label: 'Car' },
    { value: 'Bike', label: 'Bike' },
    { value: 'Mobile', label: 'Mobile' }
  ]

export default class FilterBox extends Component {
  constructor(props){
    super(props);
    this.state={
      slide: false,
    }
  }
  onSlide=()=>{
    this.setState(prevState => ({
      slide: !prevState.slide
    }));
  }
  render() {
    return (
      <>
        <Link className={`btn bg-secondary filter-btn `} onClick={this.onSlide}>
            {this.props.icon?this.props.icon:<i class="fas fa-chevron-left"></i> }
        </Link>
        <div className={`filter-box ${this.state.slide?"filter-slider-open":"filter-slider-close"}`}>
        {/* <!-- Control sidebar content goes here --> */}
            
            <div className="p-3 filter-content">
              {/* <span className="p-3 filter-box-btn">
                <span className={`btn-dark border-0 px-3 py-4`} onClick={this.onSlide} role="button">
                  <i className="fas fa-chevron-right"></i>
                </span>
              </span> */}
              <font className="text-secondary bold h5">
                <i className="fas fa-filter mr-2"></i>
                Filter
              </font>
              <span type="button" onClick={this.onSlide} class="btn btn-tool float-right f-xlrg border-0 pt-1" ><i class="fas fa-times"></i></span>
              <hr className="mb-2"/>
              
              <div className='mt-2'>
                <div className="form-group m-0">
                  <div className="input-group input-group-lg">
                      <input type="search" className="form-control form-control-lg" placeholder="Type your keywords here" />
                      <div className="input-group-append">
                          <button type="submit" className="btn btn-lg btn-default">
                              <i className="fa fa-search"></i>
                          </button>
                      </div>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <Select options={options} />
              </div>
              <div className='mt-2'>
                <Select options={options} />
              </div>
            </div>
        </div>
        </>
    );
  }
}
