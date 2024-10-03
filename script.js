let sidebar=document.getElementById('sidebar');
let but=document.getElementById('toggle');
let contents=document.getElementById('info_text');
let activetab=document.getElementById('Home');
function openside(){
    if (sidebar.style.width !== "0px") {
        contents.style.visibility="hidden";
        sidebar.style.width = "0px";
        but.style.marginLeft = "0px";
    }else{
        sidebar.style.width = "300px";
        but.style.marginLeft = "300px";
        contents.style.visibility="visible";
    }
}
let isAnimating = false;
function opentab(tabName) {
    if (isAnimating) return;
    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }
    isAnimating = true;
    document.getElementById(tabName).style.display = "block";
    setTimeout(() => {isAnimating = false;}, 500);
}


function animateText(elementId,speed) {
    let element = document.getElementById(elementId);
    let text = element.innerHTML;
    let index = 0;
    function showNextLetter() {
        if (index < text.length) {
            element.innerHTML = text.substring(0, index + 1) + "_";
            index++;
            setTimeout(showNextLetter, speed*10);
        } else {
            element.innerHTML = text;
            
        }
        
    }
    showNextLetter();
}
document.addEventListener("DOMContentLoaded", function() {
    activetab.active=true;
    activetab.style.display="block";
    animateText("hometerminal",5);
});