let sun = document.getElementById("sun");
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
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

document.addEventListener("mousemove", function (event) {
  sun.style.left = event.clientX - 40 + "px";
});
