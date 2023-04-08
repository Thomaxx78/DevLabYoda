const animateBtn = document.getElementById("animate-btn");

function random(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Create a timeline for the random animation
  const randomTimeline = gsap.timeline({ repeat: -1, yoyo: true });
  
  // Create a single tween that animates all elements at the same time
  randomTimeline.to([".a", ".b", ".c", ".d", ".e", ".f", ".g", ".h", ".i", ".j", ".k", ".l", ".m", ".n", ".o", ".p", ".q", ".r", ".s", ".t", ".u", ".v", ".w", ".x", ".y", ".z", ".aa", ".ab", ".ac", ".ad", ".ae", ".af", ".ag", ".ah", ".ai", ".aj", ".ak", ".al", ".am", ".an", ".ao", ".ap", ".aq", ".ar"], { 
    duration: 6, 
    x: () => random(window.innerWidth,0) 
  });

animateBtn.onclick = () => {
    randomTimeline.pause();


    gsap.to(".a", {duration: 2, x: 200});
    gsap.to(".b", {duration: 2, x: 200});
    gsap.to(".c", {duration: 1, x: 200});
    gsap.to(".d", {duration: 3, x: 200});
    gsap.to(".e", {duration: 4, x: 200});

    gsap.to(".f", {duration: 2, x: 50});
    gsap.to(".g", {duration: 2, x: 50});
    gsap.to(".h", {duration: 1, x: 50});
    gsap.to(".i", {duration: 3, x: 50});
    gsap.to(".j", {duration: 4, x: 50});
    gsap.to(".k", {duration: 4, x: 50});
    gsap.to(".l", {duration: 4, x: 50});
    gsap.to(".m", {duration: 4, x: 50});
    gsap.to(".n", {duration: 4, x: 50});
    gsap.to(".o", {duration: 4, x: 50});
    gsap.to(".p", {duration: 4, x: 50});

    gsap.to(".q", {duration: 2, x: 150});
    gsap.to(".r", {duration: 2, x: 150});
    gsap.to(".s", {duration: 1, x: 150});
    gsap.to(".t", {duration: 3, x: 150});
    gsap.to(".u", {duration: 4, x: 150});
    gsap.to(".v", {duration: 4, x: 150});
    gsap.to(".w", {duration: 4, x: 150});

    gsap.to(".x", {duration: 2, x: 200});
    gsap.to(".y", {duration: 2, x: 200});
    gsap.to(".z", {duration: 1, x: 200});
    gsap.to(".aa", {duration: 3, x: 200});
    gsap.to(".ab", {duration: 4, x: 200});

    gsap.to(".ac", {duration: 2, x: 100});
    gsap.to(".ad", {duration: 2, x: 100});
    gsap.to(".ae", {duration: 1, x: 100});
    gsap.to(".af", {duration: 3, x: 100});
    gsap.to(".ag", {duration: 4, x: 100});
    gsap.to(".ah", {duration: 4, x: 100});
    gsap.to(".ai", {duration: 4, x: 100});
    gsap.to(".aj", {duration: 4, x: 100});
    gsap.to(".ak", {duration: 4, x: 100});

    gsap.to(".al", {duration: 2, x: 200});
    gsap.to(".am", {duration: 2, x: 200});
    gsap.to(".an", {duration: 1, x: 200});
    gsap.to(".ao", {duration: 3, x: 200});
    gsap.to(".ap", {duration: 4, x: 200});
    gsap.to(".aq", {duration: 4, x: 200});
    gsap.to(".ar", {duration: 4, x: 200});

    gsap.to(".as", {duration: 2, x: 200});
    gsap.to(".at", {duration: 2, x: 200});
    gsap.to(".au", {duration: 1, x: 200});
    gsap.to(".av", {duration: 3, x: 200});
    gsap.to(".aw", {duration: 4, x: 200});
    gsap.to(".ax", {duration: 4, x: 200});
    gsap.to(".ay", {duration: 4, x: 200});
};
