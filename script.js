


document.querySelector(".navigation").addEventListener("click", (event) => {
    document.querySelector(".navigation").querySelectorAll('a').forEach(e => e.classList.remove('active'));
    event.target.classList.add("active");
});

//
//

const sliderBackground = document.querySelector(".slider");
const slideContainer = document.querySelector(".image-container");
const arrow = document.querySelectorAll(".arrow");

const slides = {
  0: [`<img class="image-1" src="assets/img/ver-iphone.png">`,
    `<img class="image-2" src="assets/img/gor-iphone.png">`],
  1: [`<img width="517" height="513" src="assets/img/iphones.png" alt="iPhone Vertical">`]
};

const slideColor = {
  0: "bg-red",
  1: "bg-blue",
  "default": "bg-red"
}

let currentSlide = 0;
arrow.forEach( each => each.addEventListener("click", event => {
  ( event.target.classList.contains("left") ) ? currentSlide-- : currentSlide++;

  if (currentSlide == Object.keys(slides).length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = Object.keys(slides).length-1;
  }

  sliderBackground.classList.value = "slider home";

  if(slideColor.hasOwnProperty(currentSlide)) {
    sliderBackground.classList.add(slideColor[currentSlide]);
  } else {
    sliderBackground.classList.add( slideColor["default"] );
  }
  slideContainer.innerHTML = "";
  slides[currentSlide].forEach( img => slideContainer.innerHTML += `\n${img}`);
}));

const tags = document.querySelector(".portfolio__navigation");
const portfolio = document.querySelector(".portfolio__images");


tags.addEventListener("click", (event) => {
 
  if( !event.target.classList.contains("selected") ) {
    let portfolioPictures = [...portfolio.querySelectorAll(".images__items")];
    portfolioPictures.unshift(portfolioPictures.pop());
    portfolioPictures.forEach( pic => portfolio.append(pic) );
  }
  tags.querySelectorAll("a").forEach(e => e.classList.remove('selected'));
  event.target.classList.add("selected");
});

let switchNow = true;
portfolio.addEventListener("click", (event) => {
  if ( event.target.classList.contains("bordered") ) {
    switchNow = false;
  }

  portfolio.querySelectorAll("img").forEach(pic => pic.classList.remove("bordered"));
  
  if (switchNow) {
    event.target.classList.add("bordered");
  }

  switchNow = true;
});

