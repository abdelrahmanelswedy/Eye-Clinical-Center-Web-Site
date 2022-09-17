// Start Spinner
let loader = document.querySelector(".spinner");
function loadingfunc() {
  loader.style = "display:none";
}
window.onload = loadingfunc;
setInterval(loadingfunc, 1000);
// End Spinner
