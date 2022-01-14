import React, { Component } from 'react';

import NavBar from './NavBar';

export default class Header extends Component {
    render() {
        return (
            <div className='container-fluid p-0'>
                <NavBar/>
               
            </div>
        )
    }
}
