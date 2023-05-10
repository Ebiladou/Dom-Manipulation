const dice = document.querySelector("img");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  let randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.setAttribute("src", `image/${randomNumber}.jpg`);
});

//animation