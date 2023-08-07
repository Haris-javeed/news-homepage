const navBar=document.getElementsByTagName("nav")[0];
const menuButton=document.getElementById("menu-button");
const menuCloseButton=document.getElementById("menu-close-button");


menuButton.addEventListener("click",function(){
    menuButton.classList.add("menu-hide");
    navBar.classList.add("open");
  });
menuCloseButton.addEventListener("click",function(){
    menuButton.classList.remove("menu-hide");
    navBar.classList.remove("open");
});