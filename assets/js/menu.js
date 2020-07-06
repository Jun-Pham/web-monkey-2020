// const dataId = []
// onHoverDropdown = (id)=> {
//   dataId.push(id)
//   const newData = [...new Set(dataId)]
//   const eleId = document.getElementById(id);
//   const eleClass = document.querySelectorAll(".monkey-nav-item");
//   for (let i = 0; i < eleClass.length; i++) {
//     eleClass[i].classList.remove("active");
//   }
//   for(let i=0; i<= newData.length;i++){
//     if(newData[i] === id){
//       eleId.classList.toggle("active");
//     }
//   }
// }

// window.onmouseout = function(event) {
//   if (!event.target.matches('.dropdown-menu')) {
//     var dropdowns = document.getElementsByClassName("monkey-nav-item");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('active')) {
//         openDropdown.classList.remove('active');
//       }
//     }
//   }
// }

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


