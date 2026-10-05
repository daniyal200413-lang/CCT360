let sun = document.getElementById("sun");
let btn = document.getElementById("btn");
let buildings = document.getElementsByClassName("building");

btn.addEventListener("click", function() {
  if (btn.innerHTML == "Night Mode") {
    document.body.style.backgroundColor = "midnightblue";
    sun.style.backgroundColor = "white";
    btn.innerHTML = "Day Mode";
  } else {
    document.body.style.backgroundColor = "steelblue";
    sun.style.backgroundColor = "gold";
    btn.innerHTML = "Night Mode";
  }
});

document.addEventListener("mousemove", function(event) {
  sun.style.left = event.clientX - 40 + "px";
});

document.addEventListener("keydown", function(event) {
  if (event.key == "l" || event.key == "L") {
    if (buildings[0].style.backgroundColor == "yellow") {
      buildings[0].style.backgroundColor = "dimgray";
      buildings[1].style.backgroundColor = "dimgray";
      buildings[2].style.backgroundColor = "dimgray";
    } else {
      buildings[0].style.backgroundColor = "yellow";
      buildings[1].style.backgroundColor = "yellow";
      buildings[2].style.backgroundColor = "yellow";
    }
  }
});

window.addEventListener("resize", function() {
  document.getElementById("size").innerHTML = "Window size: " + window.innerWidth + " x " + window.innerHeight;
});