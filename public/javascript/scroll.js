$(function() {
    var controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%"
        }
    });

    var slides = document.querySelectorAll("section.grid-container");

    for(var i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
        })
        .setPin(slides[i], {pushFollowers: false})
        .addTo(controller);
    }
});