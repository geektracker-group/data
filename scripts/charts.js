jQuery.noConflict()
jQuery(function () {

    /**
     * Pie charts data and options used in many views
     */

    jQuery("span.pie").peity("pie", {
        fill: ["#62cb31", "#edf0f5"]
    })

    jQuery(".line").peity("line",{
        fill: '#62cb31',
        stroke:'#edf0f5',
    })

    jQuery(".bar").peity("bar", {
        fill: ["#62cb31", "#edf0f5"]
    })

    jQuery(".bar_dashboard").peity("bar", {
        fill: ["#62cb31", "#edf0f5"],
    })
});
