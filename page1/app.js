


const buttonClick = document.querySelectorAll('.btn')


for (var i = 0; i <buttonClick.length; i++) {

const buttons = buttonClick[i].addEventListener("click", function() {
        this.classList.toggle('btnClicked')
});

}
 