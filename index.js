// NavBar //
let buttonContact = document.querySelector(".buttonContact")
let buttonProjects = document.querySelector(".buttonProjects")
let buttonResume = document.querySelector(".buttonResume")
let nameHome = document.querySelector(".navName")

// Navbar Buttons
buttonResume.addEventListener("click", function(){
    window.location = "resume/resume.html";
});
// buttonGame.addEventListener("click", function(){
//     window.location = "../chrome-dinosaur-game/clonedgame.html";
// });
buttonContact.addEventListener("click", function(){
    window.location = "contact/contact.html";
});
buttonProjects.addEventListener("click", function(){
    window.location = "projects/projects.html";
});
nameHome.addEventListener("click", function(){
    window.location = "index.html";
})
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
        weatherButton.innerHTML = "Change to Sun 🔆"
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
let allIntr;
let intrCompsci = document.querySelector("#intrCompsci")
let intrGov = document.querySelector("#intrGov")
let intrBio = document.querySelector("#intrBio")
let intrBusiness= document.querySelector("#intrBusiness")
let intr;

allIntr = [intrCompsci, intrGov, intrBio, intrBusiness]
let isPaused = false

// Initializing Functions //

allIntr.forEach((intr) =>{
    console.log(intr)
    // el.style.animation = "intrMoveLeft linear infinite"
});

allIntr.forEach(el =>{
    el.addEventListener("mouseneter", function(){
        isPaused=true;
    })
    el.addEventListener("mouseleave", function(){
        isPaused=false;
    })
})


function carousellSpin(){
    if(allIntr[-1].style.left >= "500px" && isPaused === false){
        let poppedBox = allIntr[-1];
        console.log(poppedBox)
        allIntr.pop(poppedBox);
        allIntr.unshift(poppedBox);
        poppedBox = "";
    }
    else{
        return
    }

    
}

carousellSpin()


