let root;
let navBar;
let mainSection;
let adBar;

function init() {
  root = document.getElementById("root");
  navBar = document.createElement("div");
  navBar.classList.add("navBar");
  root.appendChild(navBar);
}

window.addEventListener("load", init);

/*
window.addEventListener("load", function(){
});
window.addEventListener("load", () => {
});
*/
