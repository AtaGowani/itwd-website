var now = new Date();
var releaseDate = new Date("Fri Jul 28 2017 12:45")

if (now >= releaseDate) {
  document.getElementsByClassName('typeform-share')[0].classList = "typeform-share button btn btn-primary btn-lg"
  document.getElementsByClassName('registration-time')[0].style = "display: none;"
}