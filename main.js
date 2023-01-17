//№1

const email_input = document.querySelector(".email_input");
const email_check = document.querySelector(".email_check");
const email_result = document.querySelector(".email_result");

const regExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
email_check.addEventListener("click", () => {
    if (regExp.test(email_input.value)){
        email_result.innerHTML = "Адрес верно введен";
        email_result.style.color = "Green"
    }else {
        email_result.innerHTML = "Адрес не верно введен";
        email_result.style.color = "red";
    }
});

//№2

let pos = 0;
function recursBlock (){
    pos ++;
    if (pos > 400) return;
    document.querySelector(".block").style.left = pos + "px"
    anim();
}
function anim() {
    setTimeout(recursBlock, 100);
}
anim();

