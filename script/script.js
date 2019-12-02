
$(".tab-panels .tabs li").on("click", function(){
    $(".tab-panels .tabs li").removeClass("active");
    $(this).addClass("active");

// figure out which panel to show

var showPanel = $(this).attr("rel");


// hide current panel 

$('.panel.active').slideUp(300, showNext); 
    
    
    function showNext() {
    $(this).removeClass("active");
    $("#" + showPanel).slideDown(300,function(){
        $(this).addClass("active");
    });

};


// show new panel




});