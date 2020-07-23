function alert_(){
    alert("You click the link");
}

function getAlert(){
    alert("Thanks for purchasing")
}

function increase(){
    let counterValue = document.getElementById("counter").innerHTML;
    counterValue++
    document.getElementById("counter").innerHTML = counterValue;
    console.log(counterValue)
}

function decrease(){
    let counterValue = document.getElementById("counter").innerHTML;
    --counterValue;
    document.getElementById("counter").innerHTML = counterValue;
    console.log(counterValue)
}

function secondImage(){
    document.getElementById("myImg").src = "image/4.PNG";
}

function firstImage(){
    document.getElementById("myImg").src = "image/2.PNG";
}