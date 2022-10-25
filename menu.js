let  selectField = document.getElementById("selectField");
let  selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById('list');
let arrowIcon = document.getElementById('arrowIcon');

selectField.onclick = function() {
    list.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotatea");
}

for(option of options) {
    option.onclick = function() {
        selectText.innerHTML = this.textContent;
    }
}