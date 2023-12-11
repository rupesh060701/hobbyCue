

var signIn=document.querySelector(".sign_in");
var joinIn=document.querySelector(".join_in");
var signInPage=document.querySelector(".sign_in_page");
var joinInPage=document.querySelector(".join_in_page");



var crossBar=document.querySelector(".cross_bar");
var burgerBar=document.querySelector(".burger_icon")
var popUp=document.querySelector(".popup_container")

var loginContainer=document.querySelector(".login_container")


var JoinIn=()=>{
    signInPage.classList.add("hidden_section");
    joinInPage.classList.remove("hidden_section");
    joinIn.classList.add("add_underline");
    signIn.classList.remove("add_underline");
}
var SignIn=()=>{
    signInPage.classList.remove("hidden_section");
    joinInPage.classList.add("hidden_section");
    joinIn.classList.remove("add_underline");
    signIn.classList.add("add_underline");
}

var ShowPopUp=()=>{
    popUp.classList.toggle("hidden_section")
    popUp.classList.add("add_popup_top")
    loginContainer.classList.toggle("hidden_section")
}




