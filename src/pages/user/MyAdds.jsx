import React, { Component } from 'react';
import Add from '../../components/Add';
import ContentHeader from '../../components/ContentHeader';
import Filters from '../../components/filter/Filters';
import Header from '../../components/user/header/Header';
import Menu from '../../components/user/sidebar/Menu';

export default class MyAdds extends Component {
  render() {
    return (
        <>
            <Header/>
            <Menu/>
        <div className='content-wrapper app-color'>
            <ContentHeader title="My Adds" url={["Home","My Adds"]}/>
            <Filters/>
            <section className="content p-3">
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
                <Add date="22/04/2022" price="₹ 110000" title="this is the brand new Iphone"/>
            </section> 
        </div>
        </>
    );
  }
}
