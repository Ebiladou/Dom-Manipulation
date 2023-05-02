const wrapper = document.getElementById("container");
let tableHeader = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const table = document.createElement("table");
//wrapper.appendChild(table);
const row = document.createElement("tr");
table.appendChild(row);
for (let j = 0; j < 7; j++) {
  const Header = document.createElement("th");
  Header.textContent = tableHeader[j];
  row.appendChild(Header);
}

for (let i = 0; i < 6; i++) {
  const dataRow = document.createElement("tr");
  for (let k = 0; k < tableHeader.length; k++) {
    const cell = document.createElement("td");
    dataRow.appendChild(cell);
  }
  table.appendChild(dataRow);
}

document.body.appendChild(table);