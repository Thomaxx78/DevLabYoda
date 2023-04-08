const animateBtn = document.getElementById("animate-btn");

animateBtn.onclick = () => {
    gsap.to(".a", {duration: 2, x: 200});
    gsap.to(".b", {duration: 2, x: 201});
    gsap.to(".c", {duration: 1, x: 202});
    gsap.to(".d", {duration: 3, x: 203});
    gsap.to(".e", {duration: 4, x: 204});

    gsap.to(".f", {duration: 2, x: 50});
    gsap.to(".g", {duration: 2, x: 51});
    gsap.to(".h", {duration: 1, x: 52});
    gsap.to(".i", {duration: 3, x: 53});
    gsap.to(".j", {duration: 4, x: 54});
    gsap.to(".k", {duration: 4, x: 55});
    gsap.to(".l", {duration: 4, x: 56});
    gsap.to(".m", {duration: 4, x: 57});
    gsap.to(".n", {duration: 4, x: 58});
    gsap.to(".o", {duration: 4, x: 59});
    gsap.to(".p", {duration: 4, x: 60});

    
};
