import React, { Component } from 'react';
import DirectChatContacts from './DirectChatContacts';
import DirectChatMessages from './DirectChatMessages';
import SendBox from './SendBox';

export default class ChatBox extends Component {
  render() {
    return (
    <div className="card card-primary card-outline direct-chat direct-chat-primary">
        <div className="card-header">
        <h3 className="card-title">Direct Chat</h3>

        <div className="card-tools">
            <span title="3 New Messages" className="badge bg-primary">3</span>
            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus"></i>
            </button>
            <button type="button" className="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
            <i className="fas fa-comments"></i>
            </button>
            <button type="button" className="btn btn-tool" data-card-widget="remove">
            <i className="fas fa-times"></i>
            </button>
        </div>
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body" style={{display: 'block'}}>
        {/* <!-- Conversations are loaded here --> */}
        <DirectChatMessages/>
        {/* <!--/.direct-chat-messages--> */}

        {/* <!-- Contacts are loaded here --> */}
        <DirectChatContacts/>
        {/* <!-- /.direct-chat-pane --> */}
        </div>
        {/* <!-- /.card-body --> */}
        <div className="card-footer" style={{display: 'block'}}>
            <SendBox/>
        </div>
    {/* <!-- /.card-footer--> */}
    </div>
    );
  }
}
