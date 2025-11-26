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