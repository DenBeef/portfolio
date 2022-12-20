
function mouseOver(elem) {
    var e = elem.id;
    if (e == "css-icon" || e == "html-icon" || e == "js-icon" || e == "ps-icon" || e == "py-icon" || e == "git-icon") {
        document.querySelector("#" + CSS.escape(e)).classList.add("animate__animated", "animate__tada");
        setTimeout(() => {  
            document.querySelector('#' + CSS.escape(e)).classList.remove("animate__animated", "animate__tada")
        }, 1000);   
    } 
  }




