let pageNumber = 0;

const pages = [
  { copy: "building things in React, Node, Javascript, HTML, CSS", background: "red", circle: "blue" },
  { copy: "currently updating her portfolio", background: "blue", circle: "orange"  },
  { copy: "probably hungry and eating ramen", background: "black", circle: "red"  },
  { copy: "thinking of <a href = 'https://twitter.com/dianekimlim'>a tweet to add</a>", background: "purple", circle: "yellow"  },
  { copy: "checking her <a href = 'https://www.linkedin.com/in/diane-kim-lim-5b9a8440/'>Linkedin profile</a>", background: "yellow", circle: "green"  }
]

const nextTag = document.querySelector("footer img.next");
const randomTag = document.querySelector("footer img.random");
const previousTag = document.querySelector("footer img.prev");
const outputTag = document.querySelector("h2");
const circleTag = document.querySelector("section div.circle");
const bodyTag = document.querySelector("body");

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy;
  circleTag.style.backgroundColor = pages[pageNumber].circle;
  bodyTag.style.backgroundColor = pages[pageNumber].background;
};

const next = function () {
  pageNumber += 1
  if (pageNumber > pages.length - 1) {
      pageNumber = 0;
  }
   updateSection();
};

const random = function () {
	pageNumber = Math.floor(Math.random() * pages.length ) ;
   updateSection();
};

const previous = function () {
  pageNumber -= 1
    if (pageNumber < 0) {
      pageNumber = pages.length - 1;
  }
   updateSection();
};

nextTag.addEventListener("click", function() {
  next();
});

randomTag.addEventListener("click", function() {
  random();
})

previousTag.addEventListener("click", function() {
  previous();
})

document.addEventListener("keyup", function(event) {
  if (event.key == "ArrowRight") {
    next();
  } else if (event.key == "ArrowLeft") {
    previous();
  } else if (event.key == "ArrowUp") {
    random();
  }
});
