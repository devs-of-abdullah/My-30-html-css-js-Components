const btn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

btn.addEventListener("click", () => {

  sidebar.classList.toggle("active");

  if(sidebar.classList.contains("active")){
  btn.style.color = "white";
  btn.textContent = "x";}
  else{
    btn.style.color = "#222"
    btn.textContent = "☰";
  }



});




