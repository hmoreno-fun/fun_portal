$(document).ready(function() {
    $('.sandwich-menu-icon').on('click', function(event) {
        $('.sandwich-menu-icon').toggleClass('open');
        $('.navigation').toggleClass('open');
    });
    
    if ($('.cms-toolbar-trigger').hasClass('cms-toolbar-trigger-expanded'))
            $('header').toggleClass('open');
    
    $('.cms-toolbar-trigger').on('click', function(event) {
        $('header').toggleClass('open');
    })
 });