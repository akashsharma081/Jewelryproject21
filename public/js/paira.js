/**
 * Author -> Ennop
 * Email -> support@themetidy.com
 * Version -> 1.0
 */
 import $ from 'jquery'; 
/*******************************************************************************************
 * IIFE - Immediately Invoked Function Expression
 * The global jQuery object (window.jQuery, window, document) is passed as a parameter
 *******************************************************************************************/
(function($, window, document) {
    /*******************************************************************************
     * Listen For The JQuery Ready Event On The Document
     *******************************************************************************/
    $(function() {
        paira.initDomReady()
    });
    /*******************************************************************************
     * Listen When The Document Full Load
     *******************************************************************************/
    $(window).load(function() {
        paira.initWindowReady();
    });
    var paira = {
        /***************************************************************************************
         * Init Dom Ready Function
         ***************************************************************************************/
        initDomReady: function() {
            this.initDomLoadClass();
        },
        /***************************************************************************************
         * Init Dom Ready Function
         ***************************************************************************************/
        initWindowReady: function() {
            this.initWindowLoadClass();
            this.initToolTip();
            this.initIE10ViewPortHack();
        },
        /*******************************************************************************
         * Tool Tips
         *******************************************************************************/
        initToolTip: function() {
            var $tooltip = $('[data-toggle="tooltip"]');
            if($tooltip.length > 0) {
                $tooltip.tooltip();
            }
        },
        /*******************************************************************************
         * IE10 viewport hack for Surface/desktop Windows 8 bug
         *******************************************************************************/
        initIE10ViewPortHack: function() {
            'use strict';
            if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
                var msViewportStyle = document.createElement('style');
                msViewportStyle.appendChild(
                    document.createTextNode(
                        '@-ms-viewport{width:auto!important}'
                    )
                );
                document.querySelector('head').appendChild(msViewportStyle)
            }
        },
        /*******************************************************************************
         * Custom Window Load class
         *******************************************************************************/
        initWindowLoadClass: function() {
            var $parallax = $('.parallax');
            /*******************************************************************************
             * Image Parallax
             *******************************************************************************/
            if ($parallax.length > 0) {
                $parallax.parallax("50%", 0.3);
            }
        },
        /*******************************************************************************
         * Custom Dom Load Class
         *******************************************************************************/
        initDomLoadClass: function() {
            var $document = $(document);
            /***************************************************************************************
             * Mega Menu
             ***************************************************************************************/
            $document.on('click', '.paira-mega-menu .paira-dropdown-menu', function(e) {
                e.stopPropagation();
            });
            $document.on('click', '.paira-mega-menu .paira-angle-down', function(e) {
                e.preventDefault();
                $(this).parents('.paira-dropdown').find('.paira-dropdown-menu').toggleClass('active');
            });
            $document.on('click', '.menu-wrap a', function() {
                $( ".menu-wrap" ).toggleClass( "menu-icon" );
            });
            $document.on('click', '.menu-wrap a', function() {
                $( "main" ).toggleClass( "push-left" );
            });
            $document.on("click", ".paira-quantity-group .up-down-q", function() {
                var t = $(this).attr("data-direction"),
                    n = $(this).parent().children('input[type="text"]'),
                    i = parseInt(n.val());
                if ("up" == t){
                    i++;
                    n.val(i);
                } else if ("down" == t) {
                    if (1 === i) return;
                    i--;
                    n.val(i);
                }
            });
        }
    };
}(window.jQuery, window, document));
/**********************************************************************************************
 * The global jQuery object (window.jQuery, window, document) is passed as a parameter
 **********************************************************************************************/