// NavBar //

let buttonContact = document.querySelector(".buttonContact")
let buttonProjects = document.querySelector(".buttonProjects")
let buttonResume = document.querySelector(".buttonResume")
let nameHome = document.querySelector(".navName")
let buttonCitations = document.querySelector(".buttonCitations")
let butChinese =document.querySelector(".butChinese")

// Navbar Buttons
buttonResume.addEventListener("click", function(){
    window.location = "resume/resume.html";
});
buttonContact.addEventListener("click", function(){
    window.location = "contact/contact.html";
});
buttonProjects.addEventListener("click", function(){
    window.location = "projects/projects.html";
});
nameHome.addEventListener("click", function(){
    window.location = "index.html";
})
buttonCitations.addEventListener("click", function(){
    window.location = "citations/citations.html";
})
butChinese.addEventListener("click", function(){
    window.location = "chineseVersion/index.html";
});
// Typing Effect //

const words = ["Computer Science", "A.I.", "Medicine", "Entrepreneurship", "Government", "Education"];
let i = 0;
let timer;

function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('word').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        };
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
};

function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('word').innerHTML = word.join("");
        }
        else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            };
            typingEffect();
            return false;
        };
        timer = setTimeout(loopDeleting, 80);
    };
    loopDeleting();
};

typingEffect();

// Profile Pic Spin //

let profilePic = document.querySelector(".profilePic");
profilePic.addEventListener("click", function(){
    profilePic.classList.toggle("flipped");
})
profilePic.addEventListener("mouseenter", function(){
    profilePic.classList.toggle("flipped");
})



// Weather stuff
let weatherBox = document.querySelector(".weatherBox");
let weatherButton = document.querySelector(".weatherButton");
let rain = document.querySelector(".rain");

weatherButton.addEventListener("click", function(){ 
    if(weatherBox.style.display != "none"){
        weatherBox.style.display = "none";
        weatherButton.innerHTML = "Change to Rain 🌧"
    }
    else if(weatherBox.style.display = "none"){
        weatherBox.style.display = "block";
        weatherButton.innerHTML = "Change to Sunny 🔆"
    }
    else{
        console.log("dont work")
    }
});

let bubbleButton = document.getElementById("bubbleIO")
bubbleButton.addEventListener("click", function(){
    window.open("https://bubble.io/about")
});



// Caoursel! //

// Calling terms 
let intr;
let intrBox = document.querySelector(".intrBox")
let intrOnscreenBox = document.querySelector(".intrOnscreen")
let intrHidden = document.querySelector(".hiddenInterests")
let intrCompsci = document.querySelector("#intrCompsci")
let intrGov = document.querySelector("#intrGov")
let intrBio = document.querySelector("#intrBio")
let intrBusiness= document.querySelector("#intrBusiness")
let intrOther = document.querySelector("#intrOther")
let intrVolunteer = document.querySelector("#intrVolunteer")

let intrOnscreen = [intrCompsci, intrBusiness, intrGov, intrBio];
let intrOffscreen = [intrVolunteer, intrOther];

let isPaused = false

// function to see if blocks are paused

// Making some functions //
// Get left position function
function getLeftPosition (intr){
    return intr.getBoundingClientRect().left
}
//  moveLeft function //
function moveRight(intr){
    let left = parseInt(intr.style.left);
    intr.style.left = (left + 5) + 'px';
}
// Initalize postiions function

function InitialPosition() {
    intrOnscreen.forEach((intr, index) => {
        intr.style.position = 'absolute';
        intr.style.left = (index * 350) + 'px'; 
});
}
// Set up positions so that all screens would fit
InitialPosition()

// Mouse Hover
function boxHovered(intrList) {
    intrList.forEach((intr) => {
        intr.style.transition= 'all 0.3s ease-in-out';
        intr.addEventListener("mouseenter", function() {
            isPaused = true;
            this.classList.add('expanded');
            intrList.forEach(item => {
                if (item !== this) {
                    item.classList.add('shrunk');
                }
            });
        });
        // Click function so that it works on mobile as well
        intr.addEventListener("click", function() {
            isPaused = true;
            this.classList.add('expanded');
            intrList.forEach(item => {
                if (item !== this) {
                    item.classList.add('shrunk');
                }
            });
        });
        intr.addEventListener("mouseleave", function() {
            isPaused = false;
            this.classList.remove('expanded');
            intrList.forEach(item => {
                if (item !== this) {
                    item.classList.remove('shrunk');
                }
            });
        });
    });
}
boxHovered(intrOnscreen)
boxHovered(intrOffscreen)
// function for the spin //

let poppedBox;
let newBox;
let lastBox;
let firstBox;
console.log(window.innerWidth)

function carousellSpin() {
    // If it isn't paused
    if (!isPaused) {
        intrOnscreen.forEach(intr => {
            moveRight(intr);
        });
        lastBox = intrOnscreen[intrOnscreen.length-1]
        firstBox = intrOnscreen[0]
        // When the box leaves the screen
        if (getLeftPosition(firstBox) >= (window.innerWidth*0.08)){
            // Remove Last Box from offscreen
            let newBox = intrOffscreen.pop();
            // Add offscreen Box to Onscreen
            if (newBox) {
                newBox.style.transition = "none";
                setTimeout(()=>{
                    transition = "all 0.3s ease-in-out"
                }, 100)
                intrOnscreen.unshift(newBox);
                newBox.style.left = '-450px';
                newBox.style.display = "block";
                newBox.classList.add("intr")
                intrOnscreenBox.insertBefore(newBox, intrOnscreenBox.firstChild);
            }
        }
        if (getLeftPosition(lastBox) >= window.innerWidth) {
            // Remove Last Box from Onscreen 
            let poppedBox = intrOnscreen.pop();
            intrOnscreenBox.removeChild(poppedBox)
            // Add that Box to offscreen
            intrOffscreen.unshift(poppedBox);
            console.log(poppedBox);
        }
    }
    setTimeout(carousellSpin, 50);
}
carousellSpin()



// Image Carousel from: https://www.w3schools.com/howto/howto_js_slideshow.asp

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function openCSS(){
    window.open('https://developer.mozilla.org/en-US/docs/Web/CSS')
}
function openJS(){
    window.open('https://developer.mozilla.org/en-US/docs/Web/JavaScript')
}
function openHTML(){
    window.open('https://developer.mozilla.org/en-US/docs/Web/HTML')
}

