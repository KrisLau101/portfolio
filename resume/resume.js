let downloadBut = document.querySelector("#downloadBut");
let enlargeBut = document.querySelector("#enlargeBut");
let resumeContainer = document.querySelector(".resumeContainer")

let myResume;

downloadBut.addEventListener("click", function(){
    window.open("../assets/KrisResumeNew.pdf")
})

enlargeBut.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(resumeContainer);
    let currentWidth = computedStyle.width;
    let currentWidthPercentage = parseFloat(currentWidth) / window.innerWidth * 100;
    let newWidth = currentWidthPercentage + 10; // Increase by 10%
    
    resumeContainer.style.width = newWidth + "%";
    console.log(`New width: ${newWidth}%`);
});