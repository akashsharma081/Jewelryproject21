import React from 'react'

export default function Home() {
    return (
<>
<div class="paira-container">
   <header class="header-fixed">
       <section class="header-top">
            <div>
                <div class="logo-text">
                    <a href="index.html">
                        <img src="images/logo.png" class="img-responsive"  alt="" />
                    </a>
                </div>
                <div class="menu-wrap">
                    <a href="#" data-target="#menu-popup" data-toggle="modal" class="popup-menu">
                        <img src="images/open.png" alt="" class="open-icon" />
                        <img src="images/close.png" alt="" class="close-icon" />
                    </a>
                </div>
                <div class="cart">
                    <div class="dropdown cart-menu-body paira-cart-menu-body">
                        <a href="cart.html" class="padding-bottom-10"><img src="images/cart.png" alt="" class="img-responsive center-block" /> <span class="paira-cart-item-count">2</span></a>
                    </div>
                </div>
            </div>
        </section>
    </header>
   <main class="home-page">
        <section class="main-slider overflow-h position-r border-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div id="main-slider" class="carousel slide main-slider overflow-h" data-ride="carousel">
                        <div class="col-md-6 col-sm-12 col-xs-12 position-r padding-clear">
                   
                            <div class="carousel-inner text-uppercase" role="listbox">
                                <div class="item active">
                                    <img src="images/slider-1.jpg" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="images/slider-2.jpg" alt=""/>
                                </div>
                                <div class="item">
                                    <img src="images/slider-3.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-caption text-center">
                            <div class="home-slider-fix">
                                <h1>Mat Jewellery</h1>
                                <p>We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby. Give Your Site A Beautiful Template Design To Gather More Visitors.</p>
                                <a href="collection.html">Shop Now</a>
                            </div>
                        </div>
                        <div class="main-slider-btn-fix">
                            <div class="control-slider">
                                <a class="" href="#main-slider" role="button" data-slide="prev">
                                    <span class="arrow-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="" href="#main-slider" role="button" data-slide="next">
                                    <span class="arrow-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                            <ol class="carousel-indicators">
                                <li data-target="#main-slider" data-slide-to="0" class="active"></li>
                                <li data-target="#main-slider" data-slide-to="1"></li>
                                <li data-target="#main-slider" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="top-seller text-center">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-none mobile-border-bottom">
                        <div class="paira-product product">
                            <a href="product.html">
                                <img src="images/product/product-1.jpg" class="img-responsive center-block paira-product-image full-width inactive-product" alt="" />
                                <img src="images/product/product-2.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                            </a>
                            <div class="product-sale"><span>sale</span></div>
                            <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 10</a></h2>
                                <h1 class="display-inline-b font-weight-700"><span class="money">$70.00</span></h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 padding-clear ">
                       <div class="paira-product product border-left">
                            <a href="product.html">
                                <img src="images/product/product-2.jpg" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />

                                <img src="images/product/product-3.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                            </a>
                            <div class="product-stock-out"><span>sold</span></div>
                            <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 3</a></h2>
                                <h1 class="display-inline-b font-weight-700"><span class="money">$480.00</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="parallax parallax-height border-bottom" style="background: url(images/parallax.jpg) no-repeat fixed;">
            <div class="position-r paral">
                <div class="overly"></div>
                <div class="parallax-text">
                    <div>
                        <a href="collection.html">shop now</a>
                    </div>
                </div>
            </div>
        </section>
       <section class="border-bottom">
            <div class="container-fluid">
                <div class="row">
                   <div class="recent-product col-md-6 col-sm-6 col-xs-12 padding-clear">
                        <div id="recent-slider" class="carousel slide" data-ride="carousel">
                           <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                   <div class="paira-product product">
                                        <a href="product.html">
                                            <img src="images/product/product-3.jpg" class="img-responsive center-block paira-product-image full-width inactive-product" alt="" />
                                            <img src="images/product/product-4.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="product-sale"><span>Sale</span></div>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 5</a></h2>
                                            <h1 class="display-inline-b margin-right-10 font-weight-700"><del><span class="money">$200.00</span></del></h1>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$50.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                   <div class="paira-product product">
                                        <a href="product.html">
                                            <img src="images/product/product-4.jpg" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/product/product-5.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 6</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$100.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="paira-product product">
                                        <a href="product.html">
                                            <img src="images/product/product-5.jpg" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/product/product-10.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 7</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$120.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="paira-product product">
                                        <a href="product.html">
                                            <img src="images/product/product-10.jpg" alt="" class="img-responsive center-block paira-product-image full-width inactive-product" />
                                            <img src="images/product/product-7.jpg" alt="" class="img-responsive center-block paira-product-image full-width product-active" />
                                        </a>
                                        <div class="margin-left-10 margin-right-10 product-title-price text-left">
                                            <h2 class="margin-top-10 text-capitalize font-weight-400"><a href="product.html" class="paira-product-title">Free demo product name 8</a></h2>
                                            <h1 class="display-inline-b font-weight-700"><span class="money">$410.00</span></h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="control-fix hidden-xs">
                                <a class="left carousel-control" href="#recent-slider" role="button" data-slide="prev">
                                    <span class="arrow-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#recent-slider" role="button" data-slide="next">
                                    <span class="arrow-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                   <div class="collection-list col-md-6 col-sm-6 col-xs-12 padding-clear border-left">
                        <div class="collection-item img overflow-h position-r">
                            <a href="collection.html" class="collection-img">
                                <img src="images/collection/collection.jpg" alt="gem free demo collection 1" class="img-responsive" />
                            </a>
                            <div class="collection-inner text-center">
                                <a class="btn btn-default btn-lg" href="collection.html">Shop The Collection</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="video border-bottom position-r">
            <img src="images/video.jpg" class="img-responsive" alt="" />
            <a href="#" class="video-pop" data-target="#video-pops" data-toggle="modal"><i class="fa fa-play-circle-o" aria-hidden="true"></i><span>Play</span></a>
        </section>
       <section class="recent-blog border-bottom">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 col-sm-6 col-xs-12 padding-clear ">
                        <div class="blog-hover position-r overflow-h img">
                            <div class="featured-image">
                                <a href="article.html"><img src="images/article/article-5.jpg" alt="" class="img-responsive center-block" /></a>
                            </div>
                            <div class="blog_info">
                                <h1 class="margin-clear">09</h1>
                                <p class="margin-clear">Nov 2018</p>
                            </div>
                            <div class="full-width text-center read-more">
                                <a href="article.html" class="btn btn-default btn-lg text-uppercase ">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-12 padding-clear border-left ">
                        <div class="blog-hover position-r overflow-h img">
                            <div class="featured-image">
                                <a href="article.html"><img src="images/article/article-3.jpg" alt="" class="img-responsive center-block" /></a>
                            </div>
                            <div class="blog_info">
                                <h1 class="margin-clear">09</h1>
                                <p class="margin-clear">Nov 2018</p>
                            </div>
                            <div class="full-width text-center read-more">
                                <a href="article.html" class="btn btn-default btn-lg text-uppercase ">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="newsletter-wrap text-center paira-gap-1 paira-gap-2 border-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="newsletter-inner center-block">
                            <h1>save 20% for all</h1>
                            <p>We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby to help you with any questions or issues.</p>
                            <form class="newsletter margin-top-20 center-block" action="http://eepurl.com/b-0yt9" method="post" target="_blank" novalidate="" name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form">
                                <input type="email" class="form-control text-center" name="newsletter-email" id="newsletter-email" placeholder="Email Address" required/>
                                <button type="submit" class="btn btn-default btn-lg margin-top-20">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="banner-gallery">
            <div class="container-fluid">
                <div class="row">
                    <div class="banner-slider col-md-6 col-sm-6 col-xs-12 padding-clear overflow-h">
                        <div id="banner-slider" class="carousel slide" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="item active">
                                    <a href="#" target="_blank"><img src="images/home-banner-slider-1.jpg" alt="" class="img-responsive center-block" /></a>
                                    <div class="banner-content">
                                        <div>
                                            <h2 class="collection-btn-fix  font-weight-700"><a href="collection.html">New Collection</a></h2>
                                            <p>up to 50% discount for all product</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <a href="#" target="_blank"><img src="images/home-banner-slider-2.jpg" alt="" class="img-responsive center-block"/></a>
                                    <div class="banner-content">
                                        <div>
                                            <h2 class="collection-btn-fix font-weight-700"><a href="collection.html">Winter Collection</a></h2>
                                            <p>up to 50% discount for all product</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           <div class="control-fix">
                                <a class="left" href="#banner-slider" role="button" data-slide="prev">
                                    <span class="arrow-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right" href="#banner-slider" role="button" data-slide="next">
                                    <span class="arrow-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="gallery col-md-6 col-sm-6 col-xs-12 padding-clear">
                        <div class=" col-md-6 col-sm-6 col-xs-12 padding-clear">
                            <div class="gallery-inner">
                                <a href="#" class="gallery-img"><img src="images/photo-gallery-1.jpg" class="img-responsive center-block" alt=""/></a>
                                <a href="#" class="gallery-link"><i class="fa fa-link fa-2x"></i></a>
                            </div>
                            <div class="gallery-inner">
                                <a href="#" class="gallery-img"><img src="images/photo-gallery-2.jpg" class="img-responsive center-block" alt=""/></a>
                                <a href="#" class="gallery-link"><i class="fa fa-link fa-2x"></i></a>
                            </div>
                        </div>
                        <div class=" col-md-6 col-sm-6 col-xs-12 padding-clear">
                            <div class="gallery-inner">
                                <a href="#" class="gallery-img"><img src="images/photo-gallery-3.jpg" class="img-responsive center-block" alt=""/></a>
                                <a href="#" class="gallery-link"><i class="fa fa-link fa-2x"></i></a>
                            </div>
                            <div class="gallery-inner">
                                <a href="#" class="gallery-img"><img src="images/photo-gallery-4.jpg" class="img-responsive center-block" alt=""/></a>
                                <a href="#" class="gallery-link"><i class="fa fa-link fa-2x"></i></a>
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
                            <li class="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li class="">
                                <a href="collection.html">shop</a>
                            </li>
                            <li class="">
                                <a href="about-us.html">about us</a>
                            </li>
                            <li class="">
                                <a href="blog.html">blog</a>
                            </li>
                            <li class="">
                                <a href="contact-us.html">contact us</a>
                            </li>
                            <li class="">
                                <a href="video.html">video</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <ul class="list-unstyled margin-top-30 nav-fix margin-bottom-0">
                            <li>
                                <a href="login.html">Login</a>
                            </li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="search.html">Search</a></li>
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
                        <p class="margin-top-40 margin-clear text-center">&copy; <a href="#" target="_blank">ThemeTidy</a>. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="modal fade video-pops" id="video-pops" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-body padding-clear">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <img src="images/close-white.png" alt="" class="img-responsive" />
                </button>
                <iframe width="100" height="450" class="padding-clear embed-responsive-item" src="https://www.youtube.com/embed/6uHTHC64G48" allowfullscreen></iframe>
            </div>
        </div>
    </div>
</div> 
</>
    )
}
