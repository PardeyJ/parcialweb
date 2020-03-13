var angleInput = document.getElementById('angle');
var imgTag = document.querySelector("#image");

function getAngle(){
    var angle = angleInput.value;
    console.log(angle);

    imgTag.style.transform = 'rotate('+angle+'deg)';
}






