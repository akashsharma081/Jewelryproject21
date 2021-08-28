import React from 'react'

export default function Contact() {
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
    <main class="contact-page">
        <section class="contact-content paira-gap-2">
            <div class="container-fluid">
                <div class="row">
                    <h1 class="page-header text-center">contact us</h1>
                    <div class="contact-info">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <p>8858 DNA sansy park road baltola<br/>Tori Kaka T75<br/>Uganda</p>
                            <br/>
                            <p>F785 Tiko Pamp Pur road<br/>Tori Kaka T75<br/>Uganda</p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <p>8858 DNA sansy park road baltola<br/>Tori Kaka T75<br/>Uganda</p>
                            <br/>
                            <p>F785 Tiko Pamp Pur road<br/>Tori Kaka T75<br/>Uganda</p>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <p>8858 DNA sansy park road baltola<br/>Tori Kaka T75<br/>Uganda</p>
                            <br/>
                            <p>F785 Tiko Pamp Pur road<br/>Tori Kaka T75<br/>Uganda</p>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>Open Hour:</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>Monday To Sunday 9am - 5 pm</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>Sunday: 10am - 3pm</b>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>Email:</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>support@themetidy.com</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>support@themetidy.com</b>
                        </div>
                    </div>
                    <div class="contact-info">
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>Phone:</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>+880-0000-0000</b>
                        </div>
                        <div class="col-md-4 col-sm-4 col-xs-12">
                            <b>+880-0000-0000</b>
                        </div>
                    </div>
                    <div class="padding-fix-2 paira-gap-3 overflow-h">
                        <div class="row">
                            <form method="post" action="contact-us.html" id="contact_form" class="contact-form" accept-charset="UTF-8"><input type="hidden" value="contact" name="form_type" /><input type="hidden" name="utf8" value="✓" />
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <h4 class="margin-bottom-30 margin-clear">Drop us a line</h4>
                                    <input name="form_type" type="hidden" value="contact" />
                                    <input name="utf8" type="hidden" value="✓" />
                                    <input type="text" class="form-control margin-bottom-30" name="contact[name]" placeholder="Your Name" />
                                    <input type="email" class="form-control margin-bottom-30" name="contact[email]" placeholder="Email" />
                                    <input type="number" class="form-control margin-bottom-30" name="contact[phone]" placeholder="Phone Number" />
                                    <textarea rows="10" name="contact[body]" class="form-control margin-bottom-30" placeholder="Your Message"></textarea>
                                    <button type="submit" class="btn btn-default btn-lg">Submit Message</button>
                                </div>
                            </form>
                            <div class="col-md-6 col-sm-12 col-xs-12">
                                <h4 class="margin-bottom-30 margin-clear">Office Location</h4>
                                <img id="googleMap" src="https://maps.googleapis.com/maps/api/staticmap?center=Jhenidah,Bangladesh&zoom=14&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0xf5f5f5&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x616161&style=element:labels.text.stroke%7Ccolor:0xf5f5f5&style=feature:administrative.land_parcel%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:road%7Celement:geometry%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:road.highway%7Celement:geometry%7Ccolor:0xdadada&style=feature:road.highway%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:transit.line%7Celement:geometry%7Ccolor:0xe5e5e5&style=feature:transit.station%7Celement:geometry%7Ccolor:0xeeeeee&style=feature:water%7Celement:geometry%7Ccolor:0xc9c9c9&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&size=700x475"
                                 alt="" class="img-responsive full-width" />
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
                            <li class="active">
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
