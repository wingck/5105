
$(window).on("load", function(){
    $('.submenu').hide();
    $('.nav-menu').hide();
$('.btn-search').on("click", function(){
    $('#search-box').show();
});
$('#menu-toggle').on("click", function(){
    $('.nav-menu').toggle({ direction: "left" }, 1000);
});
$('#close').on("click", function(){
    $('.nav-menu').toggle({ direction: "right" }, 1000);
});
$('h4').on("click", function(){
    $(this).next('.submenu').slideToggle(1000);
});
});