gsap.registerPlugin('ScrollTrigger');

gsap.to(".am", { 
    x: 50, 
    opacity: 1,
    duration: 1.5, 
});

gsap.to(".welcome", { 
    x: -50, 
    opacity: 1,
    duration: 1.5, 
});

gsap.to(".nava", { 
    y: 30, 
    opacity: 1,
    duration: 2, 
});

gsap.to(".me", { 
    x: -50, 
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".me",
        start: "top center",  
    }
});

gsap.to(".about", { 
    x: 50, 
    opacity: 1,
    duration: 1, 
    scrollTrigger: {
        trigger: ".about",
        start: "top center", 
    }
});


document.querySelectorAll('.proj-top').forEach(projTop => {
    gsap.to(projTop, {
        x: -50, 
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projTop,
            start: "top 80%",  
        }
    })
})

document.querySelectorAll('.proj-bottom').forEach(projBot => {
    gsap.to(projBot, { 
        x: 50, 
        opacity: 1,
        duration: 1, 
        scrollTrigger: {
            trigger: projBot,
            start: "top 80%",  
        }
    })
})
