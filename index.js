gsap.to(".am", { // selector text, Array, or object
    x: 200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, // seconds
});

gsap.to(".welcome", { // selector text, Array, or object
    x: -200, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, // seconds
});

gsap.to(".nava", { // selector text, Array, or object
    y: 50, // any properties (not limited to CSS)
    opacity: 1,
    duration: 1, // seconds
});

// gsap.to(".me", { // selector text, Array, or object
//     scrollTrigger: {
//         // x: 200, // any properties (not limited to CSS)
//         // duration: 5, // seconds
//         trigger: ".me", // selector or element
//         start: "top center",  // [trigger] [scroller] positions
//         end: "0 80%", // [trigger] [scroller] positions
//         // or relative amount: "+=500"
//     }
// });

// let tween = gsap.to(".class", {x:100}),
//     st = ScrollTrigger.create({
//         trigger: ".trigger",
//         start: "top center",
//         end: "+=500",
//         animation: tween
//       });

// gsap.to(".me.inView", { // selector text, Array, or object
//         x: 200, // any properties (not limited to CSS)
//         duration: 5, // seconds
// })
