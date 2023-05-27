var register_form = document.getElementById("register_form");
var login_form = document.getElementById("login_form");

var registered = document.getElementById("registered").addEventListener("click", ()=>{
    register_form.style.display  ="none";
    login_form.style.display = "contents";
});

var register = document.getElementById("register").addEventListener("click",()=>{
    register_form.style.display  ="contents";
    login_form.style.display = "none";
});