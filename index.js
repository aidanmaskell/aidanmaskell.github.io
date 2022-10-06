gsap.registerPlugin('ScrollTrigger');

gsap.to(".am", { // selector text, Array, or object
    x: 200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1.5, // seconds
});

gsap.to(".welcome", { // selector text, Array, or object
    x: -200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1.5, // seconds
});

gsap.to(".nava", { // selector text, Array, or object
    y: 30, // any properties (not limited to CSS)
    opacity: 1,
    duration: 2, // seconds
});

gsap.to(".me", { // selector text, Array, or object
    x: -200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".me"
    }
});

gsap.to(".about", { // selector text, Array, or object
    x: 200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".about"
    }
});


document.querySelectorAll('.proj-top').forEach(projTop => {
    gsap.to(projTop, { // selector text, Array, or object
        x: -100, // any properties (not limited to CSS)
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projTop
        }
    })
})

document.querySelectorAll('.proj-bottom').forEach(projBot => {
    gsap.to(projBot, { // selector text, Array, or object
        x: 100, // any properties (not limited to CSS)
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projBot
        }
    })
})
