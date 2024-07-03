let butLinkedin = document.querySelector("#LinkedinButton")
let butGithub = document.querySelector("#githubButton")
let butEmail = document.querySelector("#emailButton")
let clipboard = document.querySelector('.clipboardMsg')

butLinkedin.addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/kris-lau-542680261/")
});
butGithub.addEventListener("click", function(){
    window.open("https://github.com/KrisLau101")
});
butEmail.addEventListener("click", function(){
    navigator.clipboard.writeText("school.krislau2008@gmail.com");
    alert("Copied to Clipboard!")
})
//Fix Later

// Credits for Contact form: https://github.com/levinunnink/html-form-to-google-sheet?tab=readme-ov-file //

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
        method: 'POST',
        body: data
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            alert('Form submitted successfully!');
            form.reset()
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('Form submission failed.');
        });
});