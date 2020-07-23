// Chapter # 52-57 Qno 1
function assignment52_57Q1(imgValue) {
    var divID = document.getElementById('openImg');
    var imgText = "<img src=" + imgValue + "></img>";
    divID.innerHTML = imgText;
}
// Chapter # 52-57 Qno 2
function assignment52_57Q2(opr) {
    var paragraph = document.getElementById('paraForZoom');
    var style = window.getComputedStyle(paragraph, null).getPropertyValue('font-size');
    var fontSize = parseFloat(style);
    if (opr === '+') {
        paragraph.style.fontSize = (fontSize + 10) + "px";
    }
    else{
        paragraph.style.fontSize = (fontSize - 10) + "px";
    }
}