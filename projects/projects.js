// Letting Buttons //
let projectContainer = document.querySelector(".projects")
let boomerangBut = document.getElementById("boomerangBut")
let butChooseAdv = document.getElementById("butChooseAdv")
let butWebChange =  document.getElementById("butWebForChange")
let butCollegePick = document.getElementById('butCollegePick')

let webChange = document.getElementById("websiteForChange")
let chooseAdv = document.getElementById("chooseAdventure")
let collegeSugg = document.getElementById("collegePicker")

let webChangeImg = document.getElementById("webChangeImg")
let advImg = document.getElementById("advImg")
let collegeImg = document.getElementById("collegeImg")

boomerangBut.addEventListener("click", function(){
    window.open("https://boomeranglearning.com")
});
butCollegePick.addEventListener("click", function(){
    window.open("https://krislau101.github.io/CollegeSuggestionMaker/")
});
butWebChange.addEventListener("click", function(){
    window.open("https://krislau101.github.io/website-for-change/")
});
butChooseAdv.addEventListener("click", function(){
    window.open("https://krislau101.github.io/ChooseYourAdventure/")
});

// Hovered stuff

webChange.addEventListener("mouseenter", function(){
    webChange.classList.add("projectHovered")
    webChangeImg.style.display = "block";
})
webChange.addEventListener("mouseleave", function(){
    webChange.classList.remove("projectHovered")
    webChangeImg.style.display = "none";
})
chooseAdv.addEventListener("mouseenter", function(){
    chooseAdv.classList.add("projectHovered")
    advImg.style.display = "block";
})
chooseAdv.addEventListener("mouseleave", function(){
    chooseAdv.classList.remove("projectHovered")
    advImg.style.display = "none";
})
collegeSugg.addEventListener("mouseenter", function(){
    collegeSugg.classList.add("projectHovered")
    collegeImg.style.display = "block";
})
collegeSugg.addEventListener("mouseleave", function(){
    collegeSugg.classList.remove("projectHovered")
    collegeImg.style.display = "none";
})





// Weather //

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




