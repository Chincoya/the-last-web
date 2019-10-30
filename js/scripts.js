window.addEventListener("scroll", makeSticky);

function makeSticky() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    document.getElementById('main-header').className = "main-header sticky";
    document.getElementById('main-header').style.height = "4.8rem";
    document.getElementById('black-nav').style.display = "none"
  } else {
    document.getElementById('main-header').className = "main-header";
    document.getElementById('main-header').style.height = "";
    document.getElementById('black-nav').style.display = "";
  }
}
