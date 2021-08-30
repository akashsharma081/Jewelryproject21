import React from 'react'
import {BrowserRouter as Router,Link , NaviLink , Switch , Route} from 'react-router-dom';
export default function Collection() {
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
    <main class="collection-page">
        <section class="collection-content paira-gap-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="paira-collection-content">
                            <div class="row border-bottom text-capitalize">
                                <div class="col-md-12 col-sm-4 col-xs-12 padding-clear text-center">
                                    <h1 class="page-header">New Collections</h1>
                                </div>
                                <div class="col-md-4 col-sm-4 col-xs-6 collection-padding-fix pull-left">
                                    <div class="form-group text-center margin-clear">
                                        <label class="margin-right-10 margin-clear"><b>Sort by:</b> </label>
                                        <select class="sort-by paira-sort-by text-capitalize">
                                            <option value="#">Featured</option>
                                            <option value="#">Best Selling</option>
                                            <option value="#">Alphabetically, A-Z</option>
                                            <option value="#">Alphabetically, Z-A</option>
                                            <option value="#">Price, low to high</option>
                                            <option value="#">Price, high to low</option>
                                            <option value="#">Date, new to old</option>
                                            <option value="#">Date, old to new</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4 col-md-offset-4 col-sm-4 col-xs-6 collection-padding-fix pull-right">
                                    <div class="form-group text-center margin-clear">
                                        <label class="margin-right-10 margin-clear"><b>Categories:</b> </label>
                                        <select class="sort-by paira-filter-category text-capitalize">
                                            <option value="#">New collection</option>
                                            <option value="#">Latest collection</option>
                                            <option value="#">Hot collection</option>
                                            <option value="#">Winter collection</option>
                                            <option value="#">Summer collection</option>
                                            <option value="#">Top Collection</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row paira-grid-view">
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom border-none">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5370.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/IMG_5310.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="product-sale"><span>Sale</span></div>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 1</a></h2>
                                            <h1 class="display-inline-b margin-right-10 font-weight-700"><del><span class="money">$300.00</span></del></h1>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$150.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom ">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5442.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />

                                            <img src="images/IMG_5394.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 10</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$70.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom border-none">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5324.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />

                                            <img src="images/IMG_5366.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 2</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$310.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom ">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5435.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />

                                            <img src="images/IMG_5399.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 3</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$480.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom border-none">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5436.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/IMG_5396.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 4</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$195.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom ">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5370.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/IMG_5429.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="product-sale"><span>Sale</span></div>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 5</a></h2>
                                            <h1 class="display-inline-b margin-right-10 font-weight-700"><del><span class="money">$200.00</span></del></h1>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$50.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom border-none">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5435.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/IMG_5399.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 6</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$100.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-bottom ">
                                    <div class="paira-product product border-left">
                                        <a href="product.html">
                                            <img src="images/IMG_5311.JPG" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />

                                            <img src="images/IMG_5437.JPG" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 7</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$120.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row paira-gap-3 text-center">
                                <div class="col-md-12 col-sm-12 col-xs-12">
                                    <ul class="list-inline pagination margin-clear">
                                        <li class="disabled"><a><i class="fa fa-angle-left"></i></a></li>
                                        <li class="active font-bold"><span>1</span></li>
                                        <li><a href="#"><span>2</span></a></li>
                                        <li><a href="#" class="prev-page"><i class=" fa fa-angle-right"></i></a></li>
                                    </ul>
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
