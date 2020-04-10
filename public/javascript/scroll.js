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

// import "gsap"

// $(function() {
//     // init
//     var controller = new ScrollMagic.Controller();

//     // define movement of panels
//     var wipeAnimation = new TimelineMax()
//         .fromTo("section.grid-container.strategy-page", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
//         .fromTo("section.grid-container.innovation-page",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
//         .fromTo("section.grid-container.exection-page", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

//     // create scene to pin and link animation
//     new ScrollMagic.Scene({
//             triggerElement: "#pinContainer",
//             triggerHook: "onLeave",
//             duration: "300%"
//         })
//         .setPin("#pinContainer")
//         .setTween(wipeAnimation)
//         .addTo(controller);

// });