/**
 * HOMER - Responsive Admin Theme
 * version 1.8
 *
 */
jQuery.noConflict()
jQuery(function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Handle minimalize sidebar menu
    jQuery('.hide-menu').click(function(event){
        event.preventDefault();
        if (jQuery(window).width() < 769) {
            jQuery("body").toggleClass("show-sidebar");
        } else {
            jQuery("body").toggleClass("hide-sidebar");
        }
    });

    // Initialize metsiMenu plugin to sidebar menu
    jQuery('#side-menu').metisMenu();

    // Initialize iCheck plugin
    jQuery('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });

    // Initialize animate panel function
    jQuery('.animate-panel').animatePanel();

    // Function for collapse hpanel
    jQuery('.showhide').click(function (event) {
        event.preventDefault();
        var hpanel = jQuery(this).closest('div.hpanel');
        var icon = jQuery(this).find('i:first');
        var body = hpanel.find('div.panel-body');
        var footer = hpanel.find('div.panel-footer');
        body.slideToggle(300);
        footer.slideToggle(200);

        // Toggle icon from up to down
        icon.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
        hpanel.toggleClass('').toggleClass('panel-collapse');
        setTimeout(function () {
            hpanel.resize();
            hpanel.find('[id^=map-]').resize();
        }, 50);
    });

    // Function for close hpanel
    jQuery('.closebox').click(function (event) {
        event.preventDefault();
        var hpanel = jQuery(this).closest('div.hpanel');
        hpanel.remove();
    });

    // Fullscreen for fullscreen hpanel
    jQuery('.fullscreen').click(function() {
        var hpanel = jQuery(this).closest('div.hpanel');
        var icon = jQuery(this).find('i:first');
        jQuery('body').toggleClass('fullscreen-panel-mode');
        icon.toggleClass('fa-expand').toggleClass('fa-compress');
        hpanel.toggleClass('fullscreen');
        setTimeout(function() {
            jQuery(window).trigger('resize');
        }, 100);
    });

    // Open close right sidebar
    jQuery('.right-sidebar-toggle').click(function () {
        jQuery('#right-sidebar').toggleClass('sidebar-open');
    });

    // Function for small header
    jQuery('.small-header-action').click(function(event){
        event.preventDefault();
        var icon = jQuery(this).find('i:first');
        var breadcrumb  = jQuery(this).parent().find('#hbreadcrumb');
        jQuery(this).parent().parent().parent().toggleClass('small-header');
        breadcrumb.toggleClass('m-t-lg');
        icon.toggleClass('fa-arrow-up').toggleClass('fa-arrow-down');
    });

    // Set minimal height of #wrapper to fit the window
    setTimeout(function () {
        fixWrapperHeight();
    });

    // Sparkline bar chart data and options used under Profile image on left navigation panel
    jQuery("#sparkline1").sparkline([5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 11, 4], {
        type: 'bar',
        barWidth: 7,
        height: '30px',
        barColor: '#62cb31',
        negBarColor: '#53ac2a'
    });

    // Initialize tooltips
    jQuery('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]"
    });

    // Initialize popover
    jQuery("[data-toggle=popover]").popover();

    // Move modal to body
    // Fix Bootstrap backdrop issu with animation.css
    jQuery('.modal').appendTo("body")

});

jQuery(window).bind("load", function () {
    // Remove splash screen after load
    jQuery('.splash').css('display', 'none')
});

jQuery(window).bind("resize click", function () {

    // Add special class to minimalize page elements when screen is less than 768px
    setBodySmall();

    // Waint until metsiMenu, collapse and other effect finish and set wrapper height
    setTimeout(function () {
        fixWrapperHeight();
    }, 300);
});

function fixWrapperHeight() {

    // Get and set current height
    var headerH = 62;
    var navigationH = jQuery("#navigation").height();
    var contentH = jQuery(".content").height();

    // Set new height when contnet height is less then navigation
    if (contentH < navigationH) {
        jQuery("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when contnet height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < jQuery(window).height()) {
        jQuery("#wrapper").css("min-height", jQuery(window).height() - headerH  + 'px');
    }

    // Set new height when contnet is higher then navigation but less then window
    if (contentH > navigationH && contentH < jQuery(window).height()) {
        jQuery("#wrapper").css("min-height", jQuery(window).height() - headerH + 'px');
    }
}


function setBodySmall() {
    if (jQuery(this).width() < 769) {
        jQuery('body').addClass('page-small');
    } else {
        jQuery('body').removeClass('page-small');
        jQuery('body').removeClass('show-sidebar');
    }
}

// Animate panel function
jQuery.fn['animatePanel'] = function() {

    var element = jQuery(this);
    var effect = jQuery(this).data('effect');
    var delay = jQuery(this).data('delay');
    var child = jQuery(this).data('child');

    // Set default values for attrs
    if(!effect) { effect = 'zoomIn'}
    if(!delay) { delay = 0.06 } else { delay = delay / 10 }
    if(!child) { child = '.row > div'} else {child = "." + child}

    //Set defaul values for start animation and delay
    var startAnimation = 0;
    var start = Math.abs(delay) + startAnimation;

    // Get all visible element and set opacity to 0
    var panel = element.find(child);
    panel.addClass('opacity-0');

    // Get all elements and add effect class
    panel = element.find(child);
    panel.addClass('stagger').addClass('animated-panel').addClass(effect);

    var panelsCount = panel.length + 10;
    var animateTime = (panelsCount * delay * 10000) / 10;

    // Add delay for each child elements
    panel.each(function (i, elm) {
        start += delay;
        var rounded = Math.round(start * 10) / 10;
        jQuery(elm).css('animation-delay', rounded + 's');
        // Remove opacity 0 after finish
        jQuery(elm).removeClass('opacity-0');
    });

    // Clear animation after finish
    setTimeout(function(){
        jQuery('.stagger').css('animation', '');
        jQuery('.stagger').removeClass(effect).removeClass('animated-panel').removeClass('stagger');
    }, animateTime)

};