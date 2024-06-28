let buttonContact = document.querySelector(".buttonContact")
// let buttonGame = document.querySelector(".buttonGame")
let buttonProjects = document.querySelector(".buttonProjects")
let buttonResume = document.querySelector(".buttonResume")
let nameHome = document.querySelector(".navName")

// Navbar Buttons
buttonResume.addEventListener("click", function(){
    window.location = "../resume/resume.html";
});
// buttonGame.addEventListener("click", function(){
//     window.location = "../chrome-dinosaur-game/clonedgame.html";
// });

buttonContact.addEventListener("click", function(){
    window.location = "../contact/contact.html";
});

buttonProjects.addEventListener("click", function(){
    window.location = "../projects/projects.html";
});
nameHome.addEventListener("click", function(){
    window.location = "../index/index.html";
})
