window.addEventListener("resize", getWindowSize);
let fun_status = null;
window.onload = function(){
    
    let contact_section = null;
    let about_me_section = null;
    let hobbies_section = null;
    let scroll_up_icon = null;
    let nav_id = null;
    
    document.getElementById('scroll-up-icon').addEventListener("click", () => {
        console.log("Clicked");
        document.getElementById('nav-id').scrollIntoView({behavior:"smooth", block:"start"});
    });
    this.document.addEventListener("DOMContentLoaded", () => {
        console.log("fun_status:" + fun_status);
        about_me_section = this.document.getElementById("about-me-section");
        hobbies_section = this.document.getElementById("hobbies-section");
        contact_section = this.document.getElementById("contact-section");
        scroll_up_icon  = this.document.getElementById("scroll-up-icon-section");
        nav_id = document.getElementById('nav-id');
        fun_status = document.getElementById("fun-section").style.visibility;
        
    });
    
}

function focusFunc(){
   let s =  document.getElementById("hobbies");
   s.focus();
}

function getWindowSize(){
    document.getElementById('resp-div-txt').innerText = window.innerWidth + 'px';
}
function goFocus(id){
    document.getElementById(id).focus();
}
function goToTop(){
    nav_id.scrollIntoView({behavior:"smooth", block:"start"});
}
function showFun(){
    document.getElementById("fun-section").style.visibility = 'visible';    
}
function hideFun(){
    document.getElementById("fun-section").style.visibility = 'hidden';    
}

function hideShowFunSection(){
    
    fun_status = document.getElementById("fun-section").style.visibility;
    
    if (fun_status == 'hidden'){
        showFun();
    }else if(fun_status == 'visible'){
        hideFun();
    }else{
        console.log('fun_status:' + fun_status);
        console.log("else:" + document.getElementById("fun-section").style.visibility);
        showFun();
    }
}