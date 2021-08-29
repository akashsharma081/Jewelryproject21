import React from 'react'

export default function Home() {
    return (
<>
<div>
  <div className="paira-container">
    <header className="header-fixed">
      <section className="header-top">
        <div>
          <div className="logo-text">
            <a href="index.html">
              <img src="images/logo.png" className="img-responsive" alt />
            </a>
          </div>
          <div className="menu-wrap">
            <a href="#" data-target="#menu-popup" data-toggle="modal" className="popup-menu">
              <img src="images/open.png" alt className="open-icon" />
              <img src="images/close.png" alt className="close-icon" />
            </a>
          </div>
          <div className="cart">
            <div className="dropdown cart-menu-body paira-cart-menu-body">
              <a href="cart.html" className="padding-bottom-10"><img src="images/cart.png" alt className="img-responsive center-block" /> <span className="paira-cart-item-count">2</span></a>
            </div>
          </div>
        </div>
      </section>
    </header>
    <main className="home-page">
      <section className="main-slider overflow-h position-r border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div id="main-slider" className="carousel slide main-slider overflow-h" data-ride="carousel">
              <div className="col-md-6 col-sm-12 col-xs-12 position-r padding-clear">
                <div className="carousel-inner text-uppercase" role="listbox">
                  <div className="item active">
                    <img src="images/slider-1.jpg" alt />
                  </div>
                  <div className="item">
                    <img src="images/slider-2.jpg" alt />
                  </div>
                  <div className="item">
                    <img src="images/slider-3.jpg" alt />
                  </div>
                </div>
              </div>
              <div className="carousel-caption text-center">
                <div className="home-slider-fix">
                  <h1>Mat Jewellery</h1>
                  <p>We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby. Give Your Site A Beautiful Template Design To Gather More Visitors.</p>
                  <a href="collection.html">Shop Now</a>
                </div>
              </div>
              <div className="main-slider-btn-fix">
                <div className="control-slider">
                  <a className href="#main-slider" role="button" data-slide="prev">
                    <span className="arrow-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className href="#main-slider" role="button" data-slide="next">
                    <span className="arrow-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
                <ol className="carousel-indicators">
                  <li data-target="#main-slider" data-slide-to={0} className="active" />
                  <li data-target="#main-slider" data-slide-to={1} />
                  <li data-target="#main-slider" data-slide-to={2} />
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="top-seller text-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 padding-clear border-none mobile-border-bottom">
              <div className="paira-product product">
                <a href="product.html">
                  <img src="images/product/product-1.jpg" className="img-responsive center-block paira-product-image full-width inactive-product" alt />
                  <img src="images/product/product-2.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                </a>
                <div className="product-sale"><span>sale</span></div>
                <div className="margin-left-10 margin-right-10 product-title-price text-left">
                  <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 10</a></h2>
                  <h1 className="display-inline-b font-weight-700"><span className="money">$70.00</span></h1>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 padding-clear ">
              <div className="paira-product product border-left">
                <a href="product.html">
                  <img src="images/product/product-2.jpg" alt className="img-responsive center-block paira-product-image full-width inactive-product" />
                  <img src="images/product/product-3.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                </a>
                <div className="product-stock-out"><span>sold</span></div>
                <div className="margin-left-10 margin-right-10 product-title-price text-left">
                  <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 3</a></h2>
                  <h1 className="display-inline-b font-weight-700"><span className="money">$480.00</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="parallax parallax-height border-bottom" style={{background: 'url(images/parallax.jpg) no-repeat fixed'}}>
        <div className="position-r paral">
          <div className="overly" />
          <div className="parallax-text">
            <div>
              <a href="collection.html">shop now</a>
            </div>
          </div>
        </div>
      </section>
      <section className="border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="recent-product col-md-6 col-sm-6 col-xs-12 padding-clear">
              <div id="recent-slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <div className="paira-product product">
                      <a href="product.html">
                        <img src="images/product/product-3.jpg" className="img-responsive center-block paira-product-image full-width inactive-product" alt />
                        <img src="images/product/product-4.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                      </a>
                      <div className="product-sale"><span>Sale</span></div>
                      <div className="margin-left-10 margin-right-10 product-title-price text-left">
                        <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 5</a></h2>
                        <h1 className="display-inline-b margin-right-10 font-weight-700"><del><span className="money">$200.00</span></del></h1>
                        <h1 className="display-inline-b font-weight-700"><span className="money">$50.00</span></h1>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paira-product product">
                      <a href="product.html">
                        <img src="images/product/product-4.jpg" alt className="img-responsive center-block paira-product-image full-width inactive-product" />
                        <img src="images/product/product-5.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                      </a>
                      <div className="margin-left-10 margin-right-10 product-title-price text-left">
                        <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 6</a></h2>
                        <h1 className="display-inline-b font-weight-700"><span className="money">$100.00</span></h1>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paira-product product">
                      <a href="product.html">
                        <img src="images/product/product-5.jpg" alt className="img-responsive center-block paira-product-image full-width inactive-product" />
                        <img src="images/product/product-10.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                      </a>
                      <div className="margin-left-10 margin-right-10 product-title-price text-left">
                        <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 7</a></h2>
                        <h1 className="display-inline-b font-weight-700"><span className="money">$120.00</span></h1>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="paira-product product">
                      <a href="product.html">
                        <img src="images/product/product-10.jpg" alt className="img-responsive center-block paira-product-image full-width inactive-product" />
                        <img src="images/product/product-7.jpg" alt className="img-responsive center-block paira-product-image full-width product-active" />
                      </a>
                      <div className="margin-left-10 margin-right-10 product-title-price text-left">
                        <h2 className="margin-top-10 text-capitalize font-weight-400"><a href="product.html" className="paira-product-title">Free demo product name 8</a></h2>
                        <h1 className="display-inline-b font-weight-700"><span className="money">$410.00</span></h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-fix hidden-xs">
                  <a className="left carousel-control" href="#recent-slider" role="button" data-slide="prev">
                    <span className="arrow-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right carousel-control" href="#recent-slider" role="button" data-slide="next">
                    <span className="arrow-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="collection-list col-md-6 col-sm-6 col-xs-12 padding-clear border-left">
              <div className="collection-item img overflow-h position-r">
                <a href="collection.html" className="collection-img">
                  <img src="images/collection/collection.jpg" alt="gem free demo collection 1" className="img-responsive" />
                </a>
                <div className="collection-inner text-center">
                  <a className="btn btn-default btn-lg" href="collection.html">Shop The Collection</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="video border-bottom position-r">
        <img src="images/video.jpg" className="img-responsive" alt />
        <a href="#" className="video-pop" data-target="#video-pops" data-toggle="modal"><i className="fa fa-play-circle-o" aria-hidden="true" /><span>Play</span></a>
      </section>
      <section className="recent-blog border-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12 padding-clear ">
              <div className="blog-hover position-r overflow-h img">
                <div className="featured-image">
                  <a href="article.html"><img src="images/article/article-5.jpg" alt className="img-responsive center-block" /></a>
                </div>
                <div className="blog_info">
                  <h1 className="margin-clear">09</h1>
                  <p className="margin-clear">Nov 2018</p>
                </div>
                <div className="full-width text-center read-more">
                  <a href="article.html" className="btn btn-default btn-lg text-uppercase ">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12 padding-clear border-left ">
              <div className="blog-hover position-r overflow-h img">
                <div className="featured-image">
                  <a href="article.html"><img src="images/article/article-3.jpg" alt className="img-responsive center-block" /></a>
                </div>
                <div className="blog_info">
                  <h1 className="margin-clear">09</h1>
                  <p className="margin-clear">Nov 2018</p>
                </div>
                <div className="full-width text-center read-more">
                  <a href="article.html" className="btn btn-default btn-lg text-uppercase ">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="newsletter-wrap text-center paira-gap-1 paira-gap-2 border-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter-inner center-block">
                <h1>save 20% for all</h1>
                <p>We just don't build your website we build your business. We Building Your Business with Strong Branding. Our helpful support team is always on standby to help you with any questions or issues.</p>
                <form className="newsletter margin-top-20 center-block" action="http://eepurl.com/b-0yt9" method="post" target="_blank" noValidate name="mc-embedded-subscribe-form" id="mc-embedded-subscribe-form">
                  <input type="email" className="form-control text-center" name="newsletter-email" id="newsletter-email" placeholder="Email Address" required />
                  <button type="submit" className="btn btn-default btn-lg margin-top-20">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="banner-gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="banner-slider col-md-6 col-sm-6 col-xs-12 padding-clear overflow-h">
              <div id="banner-slider" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <a href="#" target="_blank"><img src="images/home-banner-slider-1.jpg" alt className="img-responsive center-block" /></a>
                    <div className="banner-content">
                      <div>
                        <h2 className="collection-btn-fix  font-weight-700"><a href="collection.html">New Collection</a></h2>
                        <p>up to 50% discount for all product</p>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <a href="#" target="_blank"><img src="images/home-banner-slider-2.jpg" alt className="img-responsive center-block" /></a>
                    <div className="banner-content">
                      <div>
                        <h2 className="collection-btn-fix font-weight-700"><a href="collection.html">Winter Collection</a></h2>
                        <p>up to 50% discount for all product</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="control-fix">
                  <a className="left" href="#banner-slider" role="button" data-slide="prev">
                    <span className="arrow-left" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="right" href="#banner-slider" role="button" data-slide="next">
                    <span className="arrow-right" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="gallery col-md-6 col-sm-6 col-xs-12 padding-clear">
              <div className=" col-md-6 col-sm-6 col-xs-12 padding-clear">
                <div className="gallery-inner">
                  <a href="#" className="gallery-img"><img src="images/photo-gallery-1.jpg" className="img-responsive center-block" alt /></a>
                  <a href="#" className="gallery-link"><i className="fa fa-link fa-2x" /></a>
                </div>
                <div className="gallery-inner">
                  <a href="#" className="gallery-img"><img src="images/photo-gallery-2.jpg" className="img-responsive center-block" alt /></a>
                  <a href="#" className="gallery-link"><i className="fa fa-link fa-2x" /></a>
                </div>
              </div>
              <div className=" col-md-6 col-sm-6 col-xs-12 padding-clear">
                <div className="gallery-inner">
                  <a href="#" className="gallery-img"><img src="images/photo-gallery-3.jpg" className="img-responsive center-block" alt /></a>
                  <a href="#" className="gallery-link"><i className="fa fa-link fa-2x" /></a>
                </div>
                <div className="gallery-inner">
                  <a href="#" className="gallery-img"><img src="images/photo-gallery-4.jpg" className="img-responsive center-block" alt /></a>
                  <a href="#" className="gallery-link"><i className="fa fa-link fa-2x" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  <div className="modal left menu fade menu-popup" data-backdrop="static" id="menu-popup" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-body">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <h3>Menu</h3>
              <ul className="list-unstyled nav-fix margin-top-30 margin-bottom-0">
                <li className="active">
                  <a href="index.html">Home</a>
                </li>
                <li className>
                  <a href="collection.html">shop</a>
                </li>
                <li className>
                  <a href="about-us.html">about us</a>
                </li>
                <li className>
                  <a href="blog.html">blog</a>
                </li>
                <li className>
                  <a href="contact-us.html">contact us</a>
                </li>
                <li className>
                  <a href="video.html">video</a>
                </li>
              </ul>
            </div>
            <div className="col-md-12 col-sm-12 col-xs-12">
              <ul className="list-unstyled margin-top-30 nav-fix margin-bottom-0">
                <li>
                  <a href="login.html">Login</a>
                </li>
                <li><a href="register.html">Register</a></li>
                <li><a href="search.html">Search</a></li>
              </ul>
              <ul className="list-inline margin-top-30 margin-bottom-0">
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Facebook">
                  <a href="https://www.facebook.com/themetidy" target="_blank">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Twitter">
                  <a href="https://twitter.com/themetidy" target="_blank">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Google Plus">
                  <a href="https://plus.google.com/+Themetidy-Official-Page" target="_blank">
                    <i className="fa fa-google-plus" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Rss">
                  <a href="#" target="_blank">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Pinterest">
                  <a href="https://pinterest.com/themetidy" target="_blank">
                    <i className="fa fa-pinterest" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Instagram">
                  <a href="https://instagram.com/themetidy" target="_blank">
                    <i className="fa fa-instagram" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="LinkedIn">
                  <a href="https://www.linkedin.com/company/themetidy" target="_blank">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Vimeo">
                  <a href="#" target="_blank">
                    <i className="fa fa-vimeo-square" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Youtube">
                  <a href="https://www.youtube.com/user/themetidy" target="_blank">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Flickr">
                  <a href="https://www.flickr.com/photos/themetidy" target="_blank">
                    <i className="fa fa-flickr" />
                  </a>
                </li>
                <li className="margin-top-10" data-toggle="tooltip" data-placement="top" title="Contact Us">
                  <a href="mailto:support@themetidy.com" target="_blank"><i className="fa fa-envelope-o" /></a>
                </li>
              </ul>
              <ul className="list-inline margin-top-40 margin-bottom-0">
                <li><i className="fa fa-cc-mastercard fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-cc-paypal fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-cc-stripe fa-2x" aria-hidden="true" /></li>
                <li><i className="fa fa-cc-visa fa-2x" aria-hidden="true" /></li>
              </ul>
              <p className="margin-top-40 margin-clear text-center">© <a href="#" target="_blank">ThemeTidy</a>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade video-pops" id="video-pops" tabIndex={-1} role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-lg">
      <div className="modal-content">
        <div className="modal-body padding-clear">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <img src="images/close-white.png" alt className="img-responsive" />
          </button>
          <iframe width={100} height={450} className="padding-clear embed-responsive-item" src="https://www.youtube.com/embed/6uHTHC64G48" allowFullScreen />
        </div>
      </div>
    </div>
  </div>
</div>

</>
    )
}
