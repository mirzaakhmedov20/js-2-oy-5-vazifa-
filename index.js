import { validate } from "./function.js";

const button = document.getElementById("button");
const name = document.querySelector("#name");
const price = document.querySelector("#price");
const category = document.querySelector("#category");
const tbody = document.querySelector("#tbody");
const form = document.querySelector("#form");



function createRow(phone) {
    return `
    <tr>
    <td>1.</td>
    <td>${phone.name}</td>
    <td>${phone.price}</td>
    <td>${phone.category}</td>
    <td>
        <span class="text-primary" style="cursor: pointer;">update</span>
        <span class="text-danger" style="cursor: pointer;">delete</span>
    </td>
</tr>`;
}


button && button.addEventListener("click", function (event) {
    event.preventDefault();
    if (validate(name, price, category)) {
      let phone = {
        id: Date.now(),
        name: name.value,
        price: price.value,
        category: category.value
      }
      let data = getData();
      data.push(phone);
      localStorage.setItem('phones', JSON.stringify(data));

      let tr = createRow(phone);
      tbody.innerHTML += tr;
      form.reset();
    }else{
        console.log("Validatsiyadan o'tmadi");
    }
  });
