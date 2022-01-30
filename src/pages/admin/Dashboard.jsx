import React, { Component } from 'react';
import Chartswithtabs from '../../components/Chartswithtabs/Chartswithtabs';
import ContentHeader from '../../components/ContentHeader';
// import Directchat from "../../components/Directchat/Directchat";
import Todo from "../../components/Todo/Todo";
import Map from "../../components/Map/Map";
// import Calendar from "../../components/Calendar/Calendar";
import Salesgraph from "../../components/Salesgraph/Salesgraph";
import SmallBox from "../../components/SmallBox/SmallBox";

export default class Dashboard extends Component {
  render() {
    return (
        <div className="content-wrapper app-color">
        {/* Content Header (Page header) */}
        <ContentHeader title="Dashboard" url={["Home","Dashboard"]}/>
        {/* /.content-header */}
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            {/* Small boxes (Stat box) */}
            <div className="row  m-0 ">
              <div className="col-lg-3 col-6">
                {/* small box */}
                  <SmallBox
                      count="150"
                      title="Users"
                      type="info"
                      icon="ion-android-people"
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <SmallBox
                      count="53"
                      sup="%"
                      title="Day Adds"
                      type="success"
                      iconCompo={<i class="fas fa-box-open"></i>}
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                
                <SmallBox
                      count="45"
                      title="Categories"
                      type="warning"
                      iconCompo={<i class="fas fa-th-list"></i>}
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
              <div className="col-lg-3 col-6">
                {/* small box */}
                <SmallBox
                      count="66"
                      title="Reports"
                      type="danger"
                      iconCompo={<i class="fas fa-bug"></i>}
                      navigateTo="/"
                      info="More Info"
                  />
              </div>
              {/* ./col */}
            </div>
            {/* /.row */}
            {/* Main row */}
            <div className="row  m-0 ">
              {/* Left col */}
              <section className="col-lg-7 connectedSortable">
                
                {/* Custom tabs (Charts with tabs)*/}
                  <Chartswithtabs/>
                {/* /.Custom tabs (Charts with tabs) */}

                {/* DIRECT CHAT */}
                  {/* <Directchat/> */}
                {/*/.direct-chat */}
                {/* Map card */}
                  <Map/>
                {/* /.Map */}
                
              </section>
              {/* /.Left col */}
              {/* right col (We are only adding the ID to make the widgets sortable)*/}
              <section className="col-lg-5 connectedSortable">
                
                {/* TO DO List */}
                  <Todo/>
                {/* /.TO DO List */}
                {/* solid sales graph */}
                  <Salesgraph/>
                {/* /.sales graph */}

                {/* Calendar */}
                  {/* <Calendar/> */}
                {/* /.Calendar */}

              </section>
              {/* right col */}
            </div>
            {/* /.row (main row) */}
          </div>{/* /.container-fluid */}
          
        </section>
        {/* /.content */}
      </div>
    );
  }
}
