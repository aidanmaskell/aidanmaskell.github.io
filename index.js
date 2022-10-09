gsap.registerPlugin('ScrollTrigger');

gsap.to(".am", { // selector text, Array, or object
    x: 50, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1.5, // seconds
});

gsap.to(".welcome", { // selector text, Array, or object
    x: -50, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1.5, // seconds
});

gsap.to(".nava", { // selector text, Array, or object
    y: 30, // any properties (not limited to CSS)
    opacity: 1,
    duration: 2, // seconds
});

gsap.to(".me", { // selector text, Array, or object
    x: -50, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".me",
        start: "top center",  // [trigger] [scroller] positions
    }
});

gsap.to(".about", { // selector text, Array, or object
    x: 50, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".about",
        start: "top center",  // [trigger] [scroller] positions
    }
});


document.querySelectorAll('.proj-top').forEach(projTop => {
    gsap.to(projTop, { // selector text, Array, or object
        x: -50, // any properties (not limited to CSS)
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projTop,
            start: "top 80%",  // [trigger] [scroller] positions
        }
    })
})

document.querySelectorAll('.proj-bottom').forEach(projBot => {
    gsap.to(projBot, { // selector text, Array, or object
        x: 50, // any properties (not limited to CSS)
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projBot,
            start: "top 80%",  // [trigger] [scroller] positions
        }
    })
})
