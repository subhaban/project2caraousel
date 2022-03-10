document.addEventListener('DOMContentLoaded', init);

function init() {
  //create shortcut vars
  const back_btn = document.querySelector(".back-btn");
  const next_btn = document.querySelector(".next-btn");
  const frame = document.querySelector(".frame");
  const slides = frame.querySelectorAll("img");

  //with JS active, hide all images
  slides.forEach((slide) => {
    slide.classList.add("hide", "abs-pos");
  });
  
  // show the first slide
  slides[0].classList.remove("hide");
  
   next_btn.addEventListener("click",changeSlide);
   back_btn.addEventListener("click", changeSlide);

   caption.innerHTML = frame.firstElementChild.alt;
}



function changeSlide(e) {
  
    // stop link from trying to reload page
    e.preventDefault();
    
    //shortcut vars
    const frame = document.querySelector(".frame");
   const slides = frame.querySelectorAll("img");
    let showing = document.querySelector(".current");
    const caption = document.querySelector(".caption")
    let nextUp = "";

  
    if(e.target.className == 'next-btn') {
      nextUp = showing.nextElementSibling;
    }
  
    if(e.target.className == 'back-btn') {
      nextUp = showing.previousElementSibling;
    }
    
    // deactivate current image
    showing.classList.toggle("hide");
    showing.classList.toggle("current");
    
    //make sure next image is there
    if (!nextUp) {
      nextUp = slides[slides.length - 1];
    }
  
    if (nextUp.nodeName !== "IMG") {
      nextUp = slides[0];
    }
  
    // activate next image
    nextUp.classList.toggle("hide");
    nextUp.classList.toggle("current");

    // change caption text

    //caption.innerHTML = nextUp.alt;

  }
//
  /*function move() {
    var element = document.getElementById('mover');
    var pos = -300;
    var go = setInterval(animate, 1);
    
    function animate() {
        if (pos === 0) {
            clearInterval(go);
        } else if (pos === -150) {
            function pause() {
                pos++;
            }
            setTimeout(pause, 1000);
            
        } else {
            pos++;
            element.style.left = pos + 'px';
        }
    }
}*/
