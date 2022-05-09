const buttonClick = document.querySelectorAll(".btn");
const buttonSubmit = document.getElementById("myButton");
const thankYou = document.querySelector('.container')
const ratingScore = document.querySelector('.experance')
const span = document.querySelector('span')

 buttonSubmit.addEventListener("click", changeSubmit)

for (var i = 0; i < buttonClick.length; i++) {
  const buttons = buttonClick[i].addEventListener("click", function (e) {
    this.classList.toggle("btnClicked");
    const rating = e.target.textContent
    span.textContent = rating
  });
}

function changeSubmit() {
    thankYou.classList.remove("hidden");
    ratingScore.classList.add("hidden")

}


