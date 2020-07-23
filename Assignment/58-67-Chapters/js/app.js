function alert_(){
    let main_content = document.getElementById('main-content').childNodes;
    let getClassRender = document.getElementsByClassName("render");
    getClassRender.innerHTML;
    // let para = document.createElement("p");
    let para = document.getElementById("para");
    para.innerText = getClassRender.item;
    document.getElementById("first-name").value = "Ahsan";
    document.getElementById("last-name").value = "Shahid";
    document.getElementById("email").value = "ahsan@gmail.com";

    document.getElementById("form-content").nodeType;
    let child_ = document.getElementById("last-name").nodeType;

    console.log(document.getElementById('main-content').firstChild);
    console.log(document.getElementById('main-content').lastChild);
    console.log(document.getElementById('last-name').previousSibling);
    console.log(document.getElementById('last-name').nextSibling);
    console.log(document.getElementById('email').parentNode);
    console.log(document.getElementById('email').nodeType);

}

