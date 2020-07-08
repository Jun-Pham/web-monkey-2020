const listMonkeyNavItem = document.querySelectorAll(".monkey-nav-item");
for (i = 0; i < listMonkeyNavItem.length; i++) {
  listMonkeyNavItem[i].addEventListener("click", onToggleDropdown);
}
function onToggleDropdown(e) {
  e.stopPropagation();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    for (i = 0; i < listMonkeyNavItem.length; i++) {
      listMonkeyNavItem[i].classList.remove("active");
    }
    this.classList.add("active");
  }
}

function onCloseDropdown() {
  const elmMonkeyNavItem = document.getElementsByClassName("monkey-nav-item");
  for (let i = 0; i < elmMonkeyNavItem.length; i++) {
    if (elmMonkeyNavItem[i].classList.contains("active")) {
      elmMonkeyNavItem[i].classList.remove("active");
    }
  }
}

window.onclick = (event) => {
  if (!event.target.matches(".nav-link")) {
    onCloseDropdown(); 
  }
};

const listLanguage = document.querySelectorAll(".item-language");
const eleIdLang = document.getElementById("icon-lang");
for (i = 0; i < listLanguage.length; i++) {
  listLanguage[i].addEventListener("click", onChangeLanguage);
}
function onChangeLanguage(e) {
  e.stopPropagation();
  const urlImage = this.children[0].children[0].getAttribute("src");
  eleIdLang.src = urlImage;
  onCloseDropdown();
}


const listContents = document.querySelectorAll(".content-item");
function onShowDropdown(){
  const elmDropdown = document.getElementById('content-dropdown-menu')
  elmDropdown.classList.toggle('active')
}
for(i=0; i<listContents.length; i++){
  listContents[i].addEventListener("click", (e) =>{
    e.stopPropagation();
  });
}
$ ('.toggler-icon').click (function () {
  $ ('.toggler-icon').toggleClass ('active');
  $ ('.monkey-collapse').toggleClass ('active');
})