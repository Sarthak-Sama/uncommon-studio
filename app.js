// ------------- Loading Animation --------------------
tl = gsap.timeline();

tl.from("#page1 video", {
    opacity: 0,
    duration: 1,
    delay: 1
})

tl.from("#page1 svg", {
    y: "400",
    duration: .4,
    ease: "easeOut"
})

tl.from(".line span",{
    y: "100",
    duration:.6,
    ease: "easeOut",
    stagger:.1
})

tl.from("#page1 a", {
    opacity: 0,
    duration: .4,
    ease: "easeOut"
}, "featuredProject")
tl.from("#page1 a h3",{
    opacity:0,
    y: "10",
    duration:.6,
    ease: "easeOut"
},"featuredProject" )
tl.from("#page1 a h2",{
    opacity:0,
    y: "25",
    duration:.7,
    ease: "easeOut"
}, "featuredProject")



tl.from("nav #left-part", {
    x: "-100",
    opacity: 0,
    duration: .5,
    ease: "easeOut"
}, "navParts")
tl.from("nav #right-part", {
    x: "100",
    opacity: 0,
    duration: .5,
    ease: "easeOut"
}, "navParts")

tl.from("#page1 h4",{
    opacity:0,
    duration:.35,
    ease: "easeOut"
})

tl.to("body",{
  overflowY: "auto"
})
// ------------------ Animating Nav Bar --------------------------------
let navMenuOpen = false;
document.querySelector("#menu")
.addEventListener("click", () => {
    navMenuOpen = !navMenuOpen;
    gsap.to("#menu #item-text-wrapper", {
        y: navMenuOpen ? "-50%" : "0",
        duration: 0.3,
        ease: "easeInOut",
    });
    
    tl = gsap.timeline()
    tl.to("#menu .right",{
        scale: 0,
        duration: 0.2,
        ease: "easeInOut"
    })
    document.querySelector("#menu .right").innerHTML = navMenuOpen ? `<i class="ri-close-line"></i>` : `<h3>•</h3>`
    tl.to("#menu .right", {
        scale: 1,
        duration: 0.2,
        ease: "easeInOut"
    })

    document.querySelectorAll("#center-nav a").forEach((item, index) => {
        gsap.to(item, {
            x: navMenuOpen ? `${-110*index}%` : "0"
            
        })
    });

});



// Nav items micro interactions

document.querySelectorAll("nav .nav-item").forEach(item => {
    item.addEventListener("mouseenter", () => {
        gsap.to(item.querySelector(".left #item-text-wrapper"), {
            y: "-50%",
            duration: .3,
            ease: "easeInOut"
        });
    });
    item.addEventListener("mouseleave", () => {
        gsap.to(item.querySelector(".left #item-text-wrapper"), {
            y: "0",
            duration: .3,
            ease: "easeInOut"
        });
    });
});



// ------------------ Page 1 (Landing Page) Scroll Animations--------------//

gsap.to("#page2", {
  clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
  duration: 20,
  scrollTrigger: {
    trigger: "page1",
    scroller: "body",
    start: "top 0",
    end: "top -50%",
    scrub: 1.5,

  }
})

gsap.to("#page1", {
  display: "none",
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:true
  }
})

gsap.to("#page1 a, #page1 #heading",{
  y: "-900",
  ease: "easeOut",
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:1.5
  }
})

gsap.to("#page1 #footer-svg", {
  y: "900",
  ease: "easeOut",
  stagger: 1,
  scrollTrigger: {
    trigger: "page2",
    scroller:"body",
    scrub:1.5
  }
})




// -------------------------- Page 2 -------------------------- //


// ---- Top Nav Appearing when we reach page 2 --- //

gsap.from("#top-nav", {
  // y: "-100%",
  opacity: 0,
  duration: .2,
  ease: "easeOut",
  scrollTrigger: {
    trigger: "page2",
    scrub: true,
  }
})


// ---- Cursor ----------- //

const cursor = document.querySelector('#cursor');
const projectDivs = document.querySelectorAll('.img-holder');
const detailText = document.querySelector(".detail-text")

let leftDetTextList = [
  "Sustainable Salons",
  "Peter Jackson",
  "Roblox"
]
let rightDetTextList = [
  "UI/UX/DESIGN DIRECTION/COMPONENTS LIBRARY",
  "UI/DESIGN DIRECTION/COMPONENTS LIBRARY",
  "UI/DESIGN DIRECTION/COMPONENTS LIBRARY"
]

// Function to show the custom cursor
function showCursor(event) {
  gsap.to(cursor, {
    scale:1,
    autoAlpha: 1, // autoAlpha combines opacity and visibility
    display: 'block',
    x: event.clientX,
    y: event.clientY,
    duration: 0.45,
    ease: "easeInOut"
  });
}

// Function to hide the custom cursor
function hideCursor() {
  gsap.to(cursor, {
    scale:0,
    autoAlpha: .5,
    display: 'none',
    duration: 0.45,
    ease: "easeInOut",
  });
}

// Function to move the custom cursor
function moveCursor(event) {
  gsap.to(cursor, {
    x: event.clientX,
    y: event.clientY,
    duration: .4
  });
}
// Function to increase the size of the custom cursor
function clickCursor(event){
    tl = gsap.timeline()
    tl.to(cursor, {scale:1.25, duration:.3, ease:"easeIn"})
    .to(cursor, {scale:1, duration:.3, ease:"easeOut" })
}


// Function to move detail text with the custom cursor

function moveText(event) {
    gsap.to(detailText, {
      y: event.clientY,
      duration: 0.1
    });
  }


function changeText(index){
  detailText.innerHTML = `
            <h3 class="left-text">${leftDetTextList[index]}</h3>
            <h3 class="right-text">
              ${rightDetTextList[index]}
            </h3>
  `
}

// Functions to show and hide the detail text
function showText() {
    gsap.to(detailText, {
        autoAlpha: 1,
        duration: 0.3
    });
  
}  
function hideText() {
    gsap.to(detailText, {
        autoAlpha: 0,
        duration: 0.3
    });
  
}  



// Event listeners

projectDivs.forEach((item, index)=>{
  item.addEventListener('mouseenter',(event)=>{
    changeText(index);
    showText();
    showCursor(event);
})

item.addEventListener('mouseleave', () => {
  hideCursor();
  hideText();

});

item.addEventListener('click', clickCursor);


document.querySelector("#page2")
.addEventListener('mousemove', (event) => {
  moveCursor(event);
  moveText(event);
});
})



//  ----- Images Scrolling ------ //


const timel = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0",
    end: "+=600%",
    scrub: 2,
    pin: true,
  }
});

timel
  .fromTo("#img1", 
    { y: 800, scale: 0.3}, 
    { y: 0, scale: 1, duration: 1 },
    "first1"
  )
  .to("#img1", 
    { y: -800, scale: 0.3, duration: 1},
    "first2"
  )
  .fromTo("#img1 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "first1"
  )
  .to("#img1 img",
    {scale:3.2,  duration: 1},
    "first2"
  )

  .addLabel("second1", "-=1") /// -=1 Helps in overlaping  with the end of the previous animation
  .fromTo("#img2", 
    { y: 800, scale: 0.3 }, 
    { y: 0, scale: 1, duration: 1},
    "second1"

  )
  .to("#img2", 
    { y: -800, scale: 0.3, duration: 1 },
    "second2"
  )
  .fromTo("#img2 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "second1"
  )
  .to("#img2 img",
    {scale:3.2,  duration: 1},
    "second2"
  )

  .addLabel("third1", "-=1")// -=1 Helps in overlaping  with the end of the previous animation
  .fromTo("#img3", 
    { y: 800, scale: 0.3 }, 
    { y: 0, scale: 1, duration: 1 },
    "third1"
  )

  .fromTo("#img3 img",
    {scale:3.2},
    {scale:1,  duration: 1},
    "third1"
  )

// -------- Footer-btn animation ------ //

document.querySelectorAll(".footer-btn").forEach((elem, index)=>{
elem.addEventListener("mouseenter", () => {
  gsap.to(`#footer-btn${index+1} #icon-bg`,{
    height: "80px",
    width: "200px",
  });

  gsap.to(`#footer-btn${index+1} #text h3`,{
    y: "-100%",
  })

  gsap.to(`#footer-btn${index+1} #icon i`,{
    x: "100%",
    duration: .2
  })
});
elem.addEventListener("mouseleave", () => {
  gsap.to(`#footer-btn${index+1} #icon-bg`,{
    height: "1rem",
    width: "1rem",
  });

  gsap.to(`#footer-btn${index+1} #text h3`,{
    y: "0",

  })

  gsap.to(`#footer-btn${index+1} #icon i`,{
    x: "0%",
    duration: .2,
    ease: "easeInOut"
  })
  
})
});


// Changing the Color Tone as soon as we reach "#services" div 

// Animation for background color change
gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start: "top -630%", 
    end: "top -630%",
    onEnter: () => gsap.to("#page2,#page3, body", {backgroundColor: "#EDEAED", duration: .3, ease: "easeInOut"}),
    onLeaveBack: () => gsap.to("#page2,#page3, body", {backgroundColor: "", duration: .3, ease: "easeInOut"})
  }
});

// Animation for text color change
gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start: "top -630%",
    end: "top -630%",
    onEnter: () => gsap.to("#page3 h1, #page3 h2, #page3 p", {color: "black", duration: .3, ease: "easeInOut"}),
    onLeaveBack: () => gsap.to("#page3 h1, #page3 h2, #page3 p", {color: "", duration: .3, ease: "easeInOut"})
  }
});

// Animation for filter invert
gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start: "top -630%",
    end: "top -630%",
    onEnter: () => gsap.to(".footer-btn, #center-nav", {filter: "invert(1)", duration: .3, ease: "easeInOut"}),
    onLeaveBack: () => gsap.to(".footer-btn, #center-nav", {filter: "invert(0)", duration: .3, ease: "easeInOut"})
  }
});
gsap.timeline({
  scrollTrigger: {
    trigger: "#services",
    scroller: "body",
    start: "top -883%",
    end: "top -883%",
    onEnter: () => gsap.to("#center-nav", {filter: "invert(0)", duration: .3, ease: "easeInOut"}),
    onLeaveBack: () => gsap.to("#center-nav", {filter: "invert(1)", duration: .3, ease: "easeInOut"})
  }
});



// Hover Texts Column animation 

// Images List 

const imgList = [
  "/mediaAssets/media05.jpeg",
  "/mediaAssets/media06.jpeg",
  "/mediaAssets/media07.jpeg",
  "/mediaAssets/media08.jpeg",
  "/mediaAssets/media09.jpeg",
]

const fgImg = document.querySelector("#fg_img");
const bgImg = document.querySelector("#bg_img");

document.querySelectorAll(".hover-text").forEach((elem, index)=>{  
  elem.addEventListener("mouseenter", () =>{


    // Animating Image Coloumn

    gsap.to("#img-viewer",{
      y: index * 150 || 50,
    }
    )

  
  // Changing Images : First we will transfer the img to the background-img --> then give the new img to the foreground-img and make it zoom in using gsap.from()

    
    
    bgImg.style.backgroundImage = fgImg.style.backgroundImage;

    fgImg.style.backgroundImage = `url(${imgList[index]})`;
    gsap.fromTo("#fg_img",{
      scale:0,
    },
  {
    scale:1,
    duration: .5,
    ease: "back",
  })



    // Animating Text Column 

  gsap.to(`.hover-text`, {
      height: "8rem",
      opacity: ".3",
      duration: .4,
      ease: "easeInOut"
    });
  
  gsap.to(`.hover-text h3`, {
      y: "0%",
      duration: .4,
      ease: "easeInOut"
    });
    
  gsap.to(`#hover-text${index+1}`, {
    height: "11rem",
    opacity: "1",
      duration: .4,
      ease: "easeInOut"
  })


  gsap.to(`#hover-text${index+1} h3`, {
    y: "-100%",
      duration: .4,
      ease: "easeInOut"
  });
  
});
});






// Footer Animation 

gsap.from("#right-section h3", {
  x: "800",
  ease: "easeOut",
  stagger: .1,
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    scrub: 3,
    start: "top 120%",
    end: "top 0%",
  }
});


// Handles micro interactions 

const handleList = document.querySelectorAll("#handles a")

handleList.forEach((handle, index) => {
  handle.addEventListener("mouseenter", () => {
    gsap.to("#handles a", {
      opacity: 0.3,
      duration: 0.3,
      ease: "elastic"
    });
    gsap.to(handle, {
      opacity:1,
      duration:.3,
      ease: "elastic"
    })
  });

  document.querySelector("#handles").addEventListener("mouseleave", () => {
    gsap.to("#handles a", {
      opacity: 1,
      duration: 0.3,
      ease: "elastic"
    });
  })
});





