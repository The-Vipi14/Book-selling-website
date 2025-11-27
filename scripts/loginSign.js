const loginPageCut_btn = document.getElementById('cut-btn');
const loginPageCut = () => {
    document.getElementById('login-page').style.display = "none";
    document.querySelector('.body-proxy').classList.remove('blur-body');
    document.querySelector('body').classList.remove('no-scroll')
}
const showLoginPage = () => {
    document.getElementById('login-page').style.display = "block";
    document.querySelector('.body-proxy').classList.add('blur-body');
    document.querySelector('body').classList.add('no-scroll')

}

const loginTitle = document.querySelector(".login-title");
const signupTitle = document.querySelector(".signup-title");

const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

document.getElementById("show-signup").addEventListener("click", () => {
    loginForm.style.display = "none";
    loginTitle.style.display = "none";

    signupForm.style.display = "flex";
    signupTitle.style.display = "block";
});

document.getElementById("show-login").addEventListener("click", () => {
    signupForm.style.display = "none";
    signupTitle.style.display = "none";

    loginForm.style.display = "flex";
    loginTitle.style.display = "block";
});
