import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
export default function Cart() {
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
    <main class="cart-page">
        <section class="cart-content input-cart-box">
            <div class="container-fluid">
                <div class="row">
                    <div class="border-bottom overflow-h text-capitalize">
                        <div class="col-md-12 col-xs-12 col-sm-4 text-center">
                            <h1 class="page-header">Shopping Cart</h1>
                        </div>
                        <div class="col-md-4 col-xs-6 col-sm-4 text-center padding-fix-3">
                            <p class="margin-clear"><span class="paira-cart-item-count"><b>2 item in the bag</b></span></p>
                        </div>
                        <div class="col-md-4 col-md-offset-4 col-xs-6 col-sm-4 text-center padding-fix-3">
                            <p class="margin-clear"><a href="collection.html" class="border-a"><b>Continue shopping</b></a></p>
                        </div>
                    </div>
                    <form action="cart.html">
                        <div class="col-md-12 col-sm-12 col-xs-12 padding-clear">
                            <div class="cart-item-list">
                                <ul class="list-unstyled paira-cart-page-list overflow-h margin-clear">
                                    <li class="border-bottom overflow-h padding-fix-2">
                                        <div class="col-md-9 col-sm-8 col-xs-12 padding-clear">
                                            <a href="product.html" class="pull-left margin-right-10 cart-left">
                                                <img class="img-responsive center-block" src="images/product/product-11.jpg" alt="Free demo product name 1 - cotton" />
                                            </a>
                                            <div class="cart-title-price">
                                                <h4 class="text-capitalize margin-top-15"><a href="product.html" class="margin-top-10">Silver Plated Mandala Necklaces Women</a></h4>
                                                <h6>Small / Diamond / Nekles</h6>
                                                <h3 class="margin-top-20 font-weight-700 margin-bottom-10"><span class="money">$150.00</span></h3>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-sm-2 col-xs-6 text-right">
                                            <input type="number" size="4" name="updates[]" min="0" value="1" class="form-control display-inline-b margin-top-20" />
                                        </div>
                                        <div class="col-md-1 col-sm-2 col-xs-6 text-right">
                                            <a href="#" class="center-block  margin-top-25"><img src="images/close.png" alt="" /></a>
                                        </div>
                                    </li>
                                    <li class="border-bottom overflow-h padding-fix-2">
                                        <div class="col-md-9 col-sm-8 col-xs-12 padding-clear">
                                            <a href="product.html" class="pull-left margin-right-10 cart-left">
                                                <img class="img-responsive center-block" src="images/product/product-12.jpg" alt="Free demo product name 1 - cotton" />
                                            </a>
                                            <div class="cart-title-price">
                                                <h4 class="text-capitalize margin-top-15"><a href="product.html" class="margin-top-10">Diamond Necklaces For Women</a></h4>
                                                <h6>Small / Diamond / Nekles</h6>
                                                <h3 class="margin-top-20 font-weight-700 margin-bottom-10"><span class="money">$170.00</span></h3>
                                            </div>
                                        </div>
                                        <div class="col-md-2 col-sm-2 col-xs-6 text-right">
                                            <input type="number" size="4" name="updates[]" min="0" value="1" class="form-control display-inline-b margin-top-20" />
                                        </div>
                                        <div class="col-md-1 col-sm-2 col-xs-6 text-right">
                                            <a href="#" class="center-block  margin-top-25"><img src="images/close.png" alt="" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <aside class="">
                            <div class="col-md-6 col-sm-6 col-xs-12 padding-fix-2 margin-top-40">
                                <textarea id="note" name="note" rows="6" class="margin-top-10 margin-bottom-10 form-control" placeholder="Special instructions..."></textarea>
                            </div>
                            <figure class="col-md-6 col-sm-6 col-xs-12 padding-fix-2 text-right margin-top-40 padding-left-0">
                                <div class="cart-sub-total paira-cart-sub-total">
                                    <h2 class="margin-clear margin-bottom-5 font-weight-700"><samp class="font-weight-300">Total: </samp><span class="money">$320.00</span></h2>
                                    <p class="margin-bottom-30">Shipping & Texts Calculated at checkout</p>
                                    <button type="submit" id="update" name="checkout" class="btn btn-primary btn-lg margin-right-10 margin-bottom-60">Update Cart</button>
                                    <button type="submit" id="checkout" name="checkout" class="btn btn-default btn-lg text-uppercase margin-bottom-60"><i class="fa fa-lock" aria-hidden="true"></i> Checkout</button>
                                </div>
                            </figure>
                        </aside>
                    </form>
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
