const listMonkeyNavItem = document.querySelectorAll(".monkey-nav-item");
for (let i = 0; i < listMonkeyNavItem.length; i++) {
  listMonkeyNavItem[i].addEventListener("click", function(e){
    e.stopPropagation();
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      for (let i = 0; i < listMonkeyNavItem.length; i++) {
        listMonkeyNavItem[i].classList.remove("active");
      }
      this.classList.add("active");
    }
  });
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
for (let i = 0; i < listLanguage.length; i++) {
  listLanguage[i].addEventListener("click", function(e){
    e.stopPropagation();
    const urlImage = this.children[0].children[0].getAttribute("src");
    eleIdLang.src = urlImage;
    onCloseDropdown();
  });
}


$(".toggler-icon").click(function () {
  $(".toggler-icon").toggleClass("active");
  $(".monkey-collapse").toggleClass("active");
});

function onShowDropdown() {
  const elmDropdown = document.getElementById("content-dropdown-menu");
  elmDropdown.classList.toggle("active");
}

const listContents = document.querySelectorAll(".content-item");
for (let i = 0; i < listContents.length; i++) {
  listContents[i].addEventListener("click", function(e){
    e.stopPropagation();
    e.preventDefault();
    const innerText = this.innerText;
    const elmInputSupportContent = document.getElementById(
      "support-content"
    );
    elmInputSupportContent.value = innerText;
    onShowDropdown()
  }) 
}
