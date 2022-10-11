var page;

function loader() {
  page = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.opacity = "0";
  document.getElementById("under-loader").style.opacity = "0";
  document.getElementById("loader").style.transition = "1s";
  document.getElementById("under-loader").style.transition = "1s";
  document.getElementById("home").style.display = "block";
}