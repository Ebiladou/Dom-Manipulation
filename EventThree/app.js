const buttonBar = document.querySelector(".button-bar");

//function bgChange(e) {
//   if (e.target.tagName === 'BUTTON') {
//  const color = e.target.dataset.color;
//  e.target.style.backgroundColor = color;
//}
//}

//buttonBar.addEventListener("click", bgChange);

buttonBar.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const color = event.target.dataset.color;
    buttonBar.style.backgroundColor = color;
  }
});
