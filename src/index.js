const loginBtn = document.getElementById("loginBtn");
const loginWindow = document.getElementById("loginWindow");
const signupBtn = document.getElementById("signupBtn");
const signupWindow = document.getElementById("signupWindow");
const closeBtn = document.getElementById("xBtn");
const closeBtn2 = document.getElementById("xBtn2");

loginBtn.addEventListener('click', start);
closeBtn.addEventListener('click', stop );


function start(){
    loginWindow.style.display= "flex";    
}


function stop(){
    loginWindow.style.display= "none";
}




signupBtn.addEventListener('click', xy);
closeBtn2.addEventListener('click', yx );

function xy(){
    signupWindow.style.display= "flex";
}

function yx(){
    signupWindow.style.display= "none";
}