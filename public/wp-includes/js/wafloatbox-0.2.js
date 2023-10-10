/* MIT License */
/* Copyright (c) 2019 Maykheld (http://www.maykheld.com) */
(function ($) {
    "use strict";
    $.fn.WAFloatBox = function () {
        var a = $(this)
        a.prepend(`
        <div class="myk-btn">
            <img src="wp-content/images/wa-icon.png" class="myk-wa-icon">
        </div>
        <div class="myk-panel" style="z-index: 9999;position:fixed"></div>
        `)


        var b = $(".myk-panel")
        b.append(`
        <div class="myk-panelhead">
            <span class="myk-close">x</span>
                <img src="wp-content/images/wa-icon.png" class="myk-wa-icon" width="30px">
            <h5 class="myk-paneltitle">Questions? </h5>
        </div>
        <div class="myk-panelbody"></div>
        `)

        $('.myk-item').each(function(){
        //this wrapped in jQuery will give us the current .letter-q div
        $('.myk-panelbody').append(`
        <a target='_blank' href="https://wa.me/${$(this).data('wanumber')}?text=I'm%20inquiring%20about%20the%20apartment%20listing" class="myk-list">
            <img src="${$(this).data('waava')}" class="myk-ava">
            <div class="myk-number">
                <p class="myk-who"><b>${$(this).data('wadivision')}</b></p>
                <p class="myk-name">${$(this).data('waname')}</p>
            </div>
        </a>
        `)


    });

    // trigger 
    $(".myk-btn").click(function(){
    $(".myk-panel").toggleClass("myk-show");
    });
    $(".myk-close").click(function(){
    $(".myk-panel").toggleClass("myk-show");
    });

    }
})(jQuery);

