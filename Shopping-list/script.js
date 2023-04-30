const input = document.querySelector("input");
const button = document.getElementById("btn");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  currentValue = input.value;
  input.value = "";
  const listItem = document.createElement("li");
  const Span = document.createElement("span");
  const btn = document.createElement("button");

  listItem.appendChild(Span);
  listItem.appendChild(btn);
  list.appendChild(listItem);
  Span.textContent = currentValue;
  btn.textContent = "Delete";
  
  //An attempt to prompt the add item button if the input field has a value. Work in progress.
  // input.addEventListener("input", function () {
  // if (input.currentValue.trim() !== "") {
  //      button.disabled = false;
  //     } else {
  //     button.disabled = true;
  //  }
  //});

  //elememt.remove does not delete specified element(s), it removes elements from the bottom of the node tree. Will fix later.
  btn.addEventListener("click", function () {
    listItem.remove();
  });

  input.focus();
});
