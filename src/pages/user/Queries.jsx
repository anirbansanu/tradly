import React, { Component } from 'react';
import ChatBox from '../../components/chat/ChatBox';


export default class Queries extends Component {
  render() {
    return(
      <div className='content-wrapper p-md-4 pt-2 app-color'>
                
        {/* <!-- U can Paste Here Content Header (Page header) --> */}
        <section className="content">
          <ChatBox/>
        </section>
      </div>
    );
  }
}
