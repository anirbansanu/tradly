import React, { Component } from 'react';
import Card from '../../Card';
import prod1 from '../../../img/prod-1.jpg';
import prod2 from '../../../img/prod-2.jpg';
import prod3 from '../../../img/prod-3.jpg';
import prod4 from '../../../img/prod-4.jpg';
import Avatar from '../../Avatar';
import InfoBox from '../../InfoBox';
import Callout from '../../Callout';

export default class ProductDetailsCompo extends Component {
    render() {
        // const {name,description,brand_name,price,purchasing_date,date,views,f_name} = this.props.info;
        return (
            <div className='mt-4'>
            
                <section className="content ">

                    
                   
                        <Card title="Product" expand="1" collapse={1}>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h3 className="d-inline-block d-sm-none">{this.props.info.name}</h3>
                                    <div className="col-12">
                                    <img src={prod1} className="product-image" alt="Product "/>
                                    </div>
                                    <div className="col-12 product-image-thumbs">
                                        <div className="product-image-thumb active"><img src={prod1} alt="Product"/></div>
                                        <div className="product-image-thumb" ><img src={prod1} alt="Product "/></div>
                                        <div className="product-image-thumb" ><img src={prod2} alt="Product "/></div>
                                        <div className="product-image-thumb" ><img src={prod3} alt="Product "/></div>
                                        <div className="product-image-thumb" ><img src={prod4} alt="Product "/></div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    
                                    <Callout color="primary">
                                        <h2 className="my-3">₹ {this.props.info.price}</h2>
                                        <hr />
                                        <h5>{this.props.info.name}</h5>
                                        <div className='row m-0'>
                                            <div className="col-12 col-sm-6 pl-0">
                                                <InfoBox title="Views" text={this.props.info.views} icon="far fa-eye" iconBoxColor="info"/>
                                            </div>
                                            <div className="col-12 col-sm-6">
                                                <InfoBox title="Offers" text={this.props.info.views} icon="fas fa-comments-dollar" iconBoxColor="danger"/>
                                            </div>
                                        </div>
                                        
                                    </Callout>                          
                                    <Callout color="primary">
                                        <h4 className="my-3"><b>Seller</b></h4>
                                        <hr/>
                                        <Avatar seller={this.props.info.f_name}/>
                                        <div className="btn btn-outline-primary btn-lg btn-flat mt-5 w-100">
                                            <i className="fas fa-cart-plus fa-lg mr-2"></i>
                                                <b>Chat With Seller</b>
                                        </div>
                                    </Callout>
                                    

                                    <div className="mt-4 product-share">
                                        <a href="/" className="text-gray">
                                            <i className="fab fa-facebook-square fa-2x"></i>
                                        </a>
                                        <a href="/" className="text-gray">
                                            <i className="fab fa-twitter-square fa-2x"></i>
                                        </a>
                                        <a href="/" className="text-gray">
                                            <i className="fas fa-envelope-square fa-2x"></i>
                                        </a>
                                        <a href="/" className="text-gray">
                                            <i className="fas fa-rss-square fa-2x"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </Card>
                        <Card title="Details" expand="1" collapse={1}>
                            <div className="row mt-4">
                                <nav className="w-100">
                                    <div className="nav nav-tabs" id="product-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Description</a>
                                    <a className="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Comments</a>
                                    <a className="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Rating</a>
                                    </div>
                                </nav>
                                <div className="tab-content p-3" id="nav-tabContent">
                                    <div className="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> 
                                        {this.props.info.description}
                                    </div>
                                    <div className="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> Vivamus rhoncus nisl sed venenatis luctus. Sed condimentum risus ut tortor feugiat laoreet. Suspendisse potenti. Donec et finibus sem, ut commodo lectus. Cras eget neque dignissim, placerat orci interdum, venenatis odio. Nulla turpis elit, consequat eu eros ac, consectetur fringilla urna. Duis gravida ex pulvinar mauris ornare, eget porttitor enim vulputate. Mauris hendrerit, massa nec aliquam cursus, ex elit euismod lorem, vehicula rhoncus nisl dui sit amet eros. Nulla turpis lorem, dignissim a sapien eget, ultrices venenatis dolor. Curabitur vel turpis at magna elementum hendrerit vel id dui. Curabitur a ex ullamcorper, ornare velit vel, tincidunt ipsum. </div>
                                    <div className="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> Cras ut ipsum ornare, aliquam ipsum non, posuere elit. In hac habitasse platea dictumst. Aenean elementum leo augue, id fermentum risus efficitur vel. Nulla iaculis malesuada scelerisque. Praesent vel ipsum felis. Ut molestie, purus aliquam placerat sollicitudin, mi ligula euismod neque, non bibendum nibh neque et erat. Etiam dignissim aliquam ligula, aliquet feugiat nibh rhoncus ut. Aliquam efficitur lacinia lacinia. Morbi ac molestie lectus, vitae hendrerit nisl. Nullam metus odio, malesuada in vehicula at, consectetur nec justo. Quisque suscipit odio velit, at accumsan urna vestibulum a. Proin dictum, urna ut varius consectetur, sapien justo porta lectus, at mollis nisi orci et nulla. Donec pellentesque tortor vel nisl commodo ullamcorper. Donec varius massa at semper posuere. Integer finibus orci vitae vehicula placerat. </div>
                                </div>
                            </div>
                        </Card>
                </section>
            </div>
        )
    }
}
