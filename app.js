var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = circle.style.transform;
// console.log(rotateValue);
var rotateSum;

upBtn.onclick = () => {
  // 時計回りに90度回転させる。
  rotateSum = rotateValue + "rotate(-90deg)";
  circle.style.transform = rotateSum;
  rotateValue = rotateSum;
  console.log(rotateValue);
};

downBtn.onclick=()=>{
    //反時計回りに90度回転させる。
    rotateSum =rotateValue+"rotate(90deg)";
    circle.style.transform=rotateSum;
    rotateValue = rotateSum;
    console.log(rotateValue);
}