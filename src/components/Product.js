import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
export default function Product() {
    return (
<>
<div class="paira-container">
            <header class="header-fixed">
                                    <section class="header-top">
                                        <div>
                                            <div class="logo-text">
                                                <Link to="/">
                                                    <img src="images/logo.png" class="img-responsive"  alt="" />
                                                </Link>
                                            </div>
                                            <div class="menu-wrap">
                                                <a href="#" data-target="#menu-popup" data-toggle="modal" class="popup-menu">
                                                    <img src="images/open.png" alt="" class="open-icon" />
                                                    <img src="images/close.png" alt="" class="close-icon" />
                                                </a>
                                            </div>
                                            <div class="cart">
                                                <div class="dropdown cart-menu-body paira-cart-menu-body">
                                                    <Link to="/Cart" class="padding-bottom-10"><img src="images/cart.png" alt="" class="img-responsive center-block" /> <span class="paira-cart-item-count">2</span></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                </header>
    <main class="product-page">
        <section class="single-product">
            <div class="container-fluid">
                <div class="row">
                    <h1 class="page-header text-center paira-product-title">Silver plated mandala necklaces women</h1>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="row paira-product border-bottom">
                            <div class="col-md-6 col-sm-12 col-xs-12 border-right padding-clear">
                                <div class="single-variants-product">
                                    <div class="single-product-image-list paira-single-product-image">
                                        <div id="product-slider" class="carousel slide" data-ride="carousel">
                                            <div class="carousel-inner" role="listbox">
                                                <div class="item active">
                                                    <img src="images/product/product-1.jpg" alt="" class="img-responsive paira-product-image" />
                                                </div>
                                                <div class="item">
                                                    <img src="images/product/product-2.jpg" alt="" class="img-responsive paira-product-image" />
                                                </div>
                                                <div class="item">
                                                    <img src="images/product/product-3.jpg" alt="" class="img-responsive paira-product-image" />
                                                </div>
                                            </div>
                                            <div class="product-slider-fix">
                                                <a class="" href="#product-slider" role="button" data-slide="prev">
                                                    <span class="arrow-left" aria-hidden="true"></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                                <a class="pull-right" href="#product-slider" role="button" data-slide="next">
                                                    <span class="arrow-right" aria-hidden="true"></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12 product-padding">
                                <h3 class="margin-clear product-rating margin-bottom-10 text-capitalize">
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                                    <i class="fa fa-star-o" aria-hidden="true"></i>
                                </h3>
                                <h3 class="margin-bottom-20 paira-price-preview">
                                    <del class="margin-right-10"><span class="money">$300.00</span></del>
                                    <span class="paira-default-price"><span class="money">$150.00</span></span>
                                </h3>
                                <p>Why choose ThemeTidy We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby to help you with any questions or issues. We have a great...</p>
                                <div class="single-product-details paira-single-product-details margin-top-25">
                                    <p><label><b>Vendor :</b></label> ThemeTidy</p>
                                    <p class="margin-bottom-20"><label><b>Type :</b></label> Free Themes</p>
                                </div>
                                <div class="option-switch-dropdown">
                                    <div class="select clearfix">
                                        <div class="selector-wrapper">
                                            <label for="product-select-option-0">Size</label>
                                            <select class="single-option-selector" data-option="option1" id="product-select-option-0">
                                                <option value="s">s</option>
                                                <option value="m">m</option>
                                                <option value="l">l</option>
                                                <option value="xl">xl</option>
                                            </select>
                                        </div>
                                        <div class="selector-wrapper">
                                            <label for="product-select-option-1">Color</label>
                                            <select class="single-option-selector" data-option="option2" id="product-select-option-1">
                                                <option value="green">green</option>
                                                <option value="blue">blue</option>
                                                <option value="grey">grey</option>
                                                <option value="yellow">yellow</option>
                                                <option value="black">black</option>
                                            </select>
                                        </div>
                                        <div class="selector-wrapper">
                                            <label for="product-select-option-2">Material</label>
                                            <select class="single-option-selector" data-option="option3" id="product-select-option-2">
                                                <option value="flax">flax</option>
                                                <option value="wool">wool</option>
                                                <option value="ramie">ramie</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="full-width overflow-h border-bottom">
                                    <div class="paira-quantity-group product-quantity-group">
                                        <label>Quantity</label>
                                        <input type="text" value="1" class="paira-single-quantity text-center" placeholder="1"/>
                                        <span class="up-down-q up" data-direction="up"><i class="fa fa-angle-up"></i></span>
                                        <span class="up-down-q down" data-direction="down"><i class="fa fa-angle-down"></i></span>
                                    </div>
                                </div>
                                <div class="single-product-buttons">
                                    <a href="cart.html" class="btn btn-default btn-block btn-lg margin-top-30 margin-right-10"><i class="fa fa-shopping-cart"></i> Add To Cart</a>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <ul class="nav nav-tabs single-product-tabs text-center border-bottom  padding-top-20 padding-bottom-20 text-capitalize">
                                <li class="active col-md-6 col-sm-6 col-xs-12 padding-clear"><a href="#description" data-toggle="tab"><span>Description</span></a></li>
                                <li class="col-md-6 col-sm-6 col-xs-12 padding-clear"><a href="#size-chart" data-toggle="tab"><span>Size Chart</span></a></li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active paira-gap-3 paira-gap-4" id="description">
                                    <h4>Why choose <a href="https://www.themetidy.com/">ThemeTidy</a>
                                    </h4>
                                    <p>We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby to help you with any questions or issues. We have a great team to build your business.</p>
                                    <p> </p>
                                    <h4><span>Latest &amp; most popular <a href="https://www.themetidy.com/">Free Shopify Themes</a></span></h4>
                                    <p>The best reviewed and most popular <a href="https://www.themetidy.com/">Free Shopify Themes</a> ever. Our best selling <a href="https://www.themetidy.com/">Free Shopify Themes</a>. Ready To Take Your <a href="https://www.themetidy.com/">Free Shopify Themes</a> Next Level? Give Your Site A Beautiful Template Design To Gather More Visitors. Check <a href="https://www.themetidy.com/">ThemeTidy</a> awesome <a href="https://www.themetidy.com/">Free Shopify Themes</a> Collections.</p>
                                    <p> </p>
                                    <h4><span><a href="https://www.themetidy.com/">Paira Shopify</a> theme Framework</span></h4>
                                    <p>Paira Is A Modern, User-Friendly, Highly Customizable And Easy To Integrate Solution To Build Your Next Shopify Website Based On Your Idea. Paira Is A Highly Functional And Advance Theme Option <a href="https://www.themetidy.com/">Free Paira Shopify Framework</a>. Why Paira Is The Best &amp; Most Popular <a href="https://www.themetidy.com/">Free Paira Shopify Framework</a> Because <a href="https://www.themetidy.com/">Free Paira Shopify Framework</a> Have Most Advance Feature List, Coding Simplicity, Unique Option, Easy To Integrate Any Design, Simple And Advance Framework Architecture Design. After Lot Of Research, <a href="https://www.themetidy.com/">ThemeTidy</a> Team Finally Release <a href="https://www.themetidy.com/">Free Paira Shopify Framework</a>.</p>
                                    <p> </p>
                                    <h4><span><a href="https://www.themetidy.com/">ThemeTidy</a> customer services</span></h4>
                                    <p><span>*** <a href="https://www.themetidy.com/">ThemeTidy</a> installation services &amp; setup</span></p>
                                    <p><span>*** <a href="https://www.themetidy.com/">ThemeTidy</a> design services</span></p>
                                    <p><span>*** <a href="https://www.themetidy.com/">ThemeTidy</a> development services</span></p>
                                    <p><span>*** <a href="https://www.themetidy.com/">ThemeTidy</a> 24/7 customer support</span></p>
                                </div>
                                <div class="tab-pane paira-gap-3 paira-gap-4" id="size-chart">
                                    <img src="images/size-chart.jpg" class="img-responsive" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</div>
<div class="modal left menu fade menu-popup" data-backdrop="static" id="menu-popup" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <h3>Menu</h3>
                                    <ul class="list-unstyled nav-fix margin-top-30 margin-bottom-0">
                                        <li class="">
                                         <Link to="/" >Home</Link>
                                        </li>
                                        <li class="">
                                        <Link to="/Collection">Shop</Link>
                                     </li>
                                        <li class="active">
                                         <Link to="/About">About</Link>
                                           </li>
                                        <li class="">
                                          <Link to="/Blog">blog</Link>
                                        </li>
                                        <li class="">
                                         <Link to="/Contact">Contact us</Link>
                                        </li>
                                        <li class="">
                                          <Link to="/Video"></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <ul class="list-unstyled margin-top-30 nav-fix margin-bottom-0">
                                        <li>
                                          <Link to="/Login" >Login</Link>
                                        </li>
                                        <li><Link to="/Register">Register</Link></li>
                                        <li><Link to="/Search">Search</Link></li>
                                    </ul>
                                    <ul class="list-inline margin-top-30 margin-bottom-0">
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Facebook">
                                            <a href="https://www.facebook.com/themetidy" target="_blank">
                                                <i class="fa fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Twitter">
                                            <a href="https://twitter.com/themetidy" target="_blank">
                                                <i class="fa fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Google Plus">
                                            <a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank">
                                                <i class="fa fa-google-plus"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Rss">
                                            <a href="#" target="_blank">
                                                <i class="fa fa-rss"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Pinterest">
                                            <a href="https://pinterest.com/themetidy" target="_blank">
                                                <i class="fa fa-pinterest"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Instagram">
                                            <a href="https://instagram.com/themetidy" target="_blank">
                                                <i class="fa fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                                            <a href="https://www.linkedin.com/company/themetidy" target="_blank">
                                                <i class="fa fa-linkedin"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Vimeo">
                                            <a href="#" target="_blank">
                                                <i class="fa fa-vimeo-square"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Youtube">
                                            <a href="https://www.youtube.com/user/themetidy" target="_blank">
                                                <i class="fa fa-youtube-play"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Flickr">
                                            <a href="https://www.flickr.com/photos/themetidy" target="_blank">
                                                <i class="fa fa-flickr"></i>
                                            </a>
                                        </li>
                                        <li class="margin-top-10" data-toggle="tooltip" data-placement="top" title="Contact Us">
                                            <a href="mailto:support@themetidy.com" target="_blank"><i class="fa fa-envelope-o"></i></a>
                                        </li>
                                    </ul>
                                    <ul class="list-inline margin-top-40 margin-bottom-0">
                                        <li><i class="fa fa-cc-mastercard fa-2x" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-cc-paypal fa-2x" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-cc-stripe fa-2x" aria-hidden="true"></i></li>
                                        <li><i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i></li>
                                    </ul>
                                    <p class="pull-left margin-top-40 margin-clear">&copy; <a href="#" target="_blank">ThemeTidy</a>. All Rights Reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        
</>
    )
}
