import React, { Component } from 'react';
import ChatBox from '../../components/chat/ChatBox';
import Header from '../../components/user/header/Header';
import Menu from '../../components/user/sidebar/Menu';


export default class Queries extends Component {
  render() {
    return(
      <>
      <Header/>
            <Menu/>
      <div className='content-wrapper p-md-4 pt-2 app-color'>
                
        {/* <!-- U can Paste Here Content Header (Page header) --> */}
        <section className="content">
          <ChatBox title="Product Title" maximize={true} contacts={true}/>
        </section>
      </div>
      </>
    );
  }
}
