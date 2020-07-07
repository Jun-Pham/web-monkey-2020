const listMonkeyNavItem = document.querySelectorAll(".monkey-nav-item");

for (i = 0; i < listMonkeyNavItem.length; i++) {
  listMonkeyNavItem[i].addEventListener("click", onToggleDropdown);
}

function onToggleDropdown(e){
  e.stopPropagation();
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else if (this.parentElement.parentElement.classList.contains("active")) {
    this.classList.add("active");
  } else {
    for (i = 0; i < listMonkeyNavItem.length; i++) {
      listMonkeyNavItem[i].classList.remove("active");
    }
    this.classList.add("active");
  }
};

window.onclick = (event) => {
  if (!event.target.matches(".nav-link")) {
    const elmMonkeyNavItem = document.getElementsByClassName("monkey-nav-item");
    for (let i = 0; i < elmMonkeyNavItem.length; i++) {
      if (elmMonkeyNavItem[i].classList.contains("active")) {
        elmMonkeyNavItem[i].classList.remove("active");
      }
    }
  }
};


