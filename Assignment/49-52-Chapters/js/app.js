function form_submit(){
    let username = document.getElementById("username").value;
    let ph_no = document.getElementById("ph_no").value;
    let email = document.getElementById("email").value;
    // let info = document.getElementById("info");
    // info.value = username;
    // alert("Username: "+username+"\nPhone# "+ph_no+"\nEmail: "+email)

    

    let information = document.getElementById("info");
    information.innerHTML += username+"<br>";
    information.innerHTML += ph_no+"<br>";
    information.innerHTML += email;

    document.getElementById("username").value = "";    
    document.getElementById("ph_no").value = "";
    document.getElementById("email").value = "";
}

function read_more(){
    let text = document.getElementById("content");
    text.innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio non est odio porro soluta exercitationem labore ducimus impedit id rem voluptatem blanditiis voluptas iure a vitae neque sunt rerum atque autem quaerat, explicabo tempore? Minima amet, expedita hic consequuntur dolore consequatur necessitatibus dicta commodi minus quam quod perspiciatis nemo architecto, vitae magnam nostrum eum dolorem! Vero sit necessitatibus consequatur incidunt, voluptate hic! Ab, minima sed tenetur ipsa quaerat, suscipit natus necessitatibus cum ad repudiandae iusto autem! Dolore tenetur reiciendis consectetur, magni rem animi cumque quidem nulla dicta? Ea illo dolore fugit architecto, saepe aperiam temporibus vel dicta error, sapiente odit voluptates eligendi itaque harum consectetur ratione illum nihil, ut recusandae voluptate quae vitae neque? Officia, qui saepe ab repellat nobis laboriosam rem dolores nam unde culpa assumenda quia cumque facere nostrum odio natus id quibusdam, placeat quaerat cum? Officia, veniam? Reiciendis illum delectus reprehenderit iure ea voluptas labore asperiores perspiciatis quo et voluptatibus quod laboriosam cupiditate quis sint vel temporibus quidem, placeat corrupti atque. Ipsa cumque nobis nisi non voluptatibus facilis iusto quos, nemo quod enim corrupti qui, deleniti exercitationem ex similique voluptatum. Tempora blanditiis expedita sed maxime veritatis? Error quibusdam velit, sit quasi ad culpa saepe reiciendis harum tempore.";
    document.getElementById("readmore").remove();
}

function deletekro(e){
    // console.log(e.parentNode.parentNode)
    let p_value = e.parentNode.parentNode.firstChild.nextSibling.innerHTML;
    var targetNode = e.parentNode.parentNode;
    targetNode.remove();
}
function editkro1(){
    var firstName = document.getElementById("firstName");
    let firstEducation = document.getElementById("firstEducation");
    let editfirstName = document.getElementById("editfirstName");
    let editfirstEducation = document.getElementById("editfirstEducation");
    let updatefirst = document.getElementById("updatefirst");
    editfirstName.value = firstName.innerHTML;
    editfirstEducation.value = firstEducation.innerHTML;
    editfirstName.style.display = "inline";
    editfirstEducation.style.display = "inline";
    updatefirst.style.display = "inline";
    console.log(firstName.innerHTML);
    console.log(firstEducation.innerHTML);
}

function editkro2(){
    let secondName = document.getElementById("secondName");
    let secondEducation = document.getElementById("secondEducation");
    console.log(secondName.innerHTML);
    console.log(secondEducation.innerHTML);
}

function updatefirst(){
    var firstName = document.getElementById("firstName");
    let firstEducation = document.getElementById("firstEducation");
    let editfirstName = document.getElementById("editfirstName");
    let editfirstEducation = document.getElementById("editfirstEducation");
    let updatefirst = document.getElementById("updatefirst");
    firstName.innerHTML = editfirstName.value;
    firstEducation.innerHTML = editfirstEducation.value;1
    editfirstName.style.display = "none";
    editfirstEducation.style.display = "none";
    updatefirst.style.display = "none";
}   