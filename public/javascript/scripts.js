$(document).ready(function() {

    var mobile = function() {
        var ws = document.body.clientWidth;
        
        if(ws <= 800) {
            $("#logo-brand").removeClass("ml-3");
        }
        else if(ws > 800) {
            $("#logo-brand").addClass("ml-3");
        };

    };

    var navigation = function() {
        var nv = $("#navbar").clientHeight;
        
        document.anchors
    }

    $(window).resize(function(){
        mobile();
    });

    mobile();
    AOS.init();

});