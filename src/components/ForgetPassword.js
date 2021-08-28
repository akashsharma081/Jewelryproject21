import React from 'react'

export default function ForgetPassword() {
    return (
<>
    <div class="paira-container">
        <header class="header-fixed">
            <section class="header-top">
                <div>
                    <div class="logo-text">
                        <a href="index.html">
                            <img src="images/logo.png" class="img-responsive"  alt=""/>
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
        <main class="login-page">
            <section class="login-content paira-gap-2">
                <div class="container-fluid">
                    <div class="row">
                        <div id="login">
                            <h1 class="page-header text-center">Reset Password</h1>
                            <div class="col-md-12 padding-fix-2 paira-gap-3">
                                <form method="post" action="login.html" id="customer_login" accept-charset="UTF-8"><input type="hidden" value="customer_login" name="form_type" /><input type="hidden" name="utf8" value="✓" />
                                    <input type="email" value="" name="customer[email]" class="form-control margin-bottom-30" placeholder="Email" id="customer_email" />
                                    <h5 class="margin-bottom-30">We will send you an email to reset your password.</h5>
                                </form>
                                <button type="submit" class="btn btn-default btn-lg margin-right-10 margin-bottom-30 pull-left">Reset</button>
                                <a href="login.html" class="margin-top-15 pull-left color-1"><span class="under">Cancel</span> send email</a>
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
