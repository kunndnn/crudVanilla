// const buttons = document.querySelectorAll(".add");
// function getInputValue() {
//   return document.getElementsByName("input");
// }
// // Add a click event listener to each element
// buttons.forEach((button) => {
//   button.addEventListener("click", function () {
//     let input = getInputValue();
//     let inputValue = input[0].value;
//     if (inputValue) {
//       const tbody = document.querySelector(".tbody");

//       const newRow = document.createElement("tr");

//       const data = document.createElement("td");
//       data.textContent = inputValue;
//       data.classList.add("data");
//       const actions = document.createElement("td");

//       const edit = document.createElement("button");
//       edit.textContent = "Edit";
//       edit.classList.add("edit");
//       actions.appendChild(edit);

//       const Delete = document.createElement("button");
//       Delete.textContent = "Delete";
//       Delete.classList.add("delete");
//       actions.appendChild(Delete);

//       newRow.appendChild(data);
//       newRow.appendChild(actions);

//       tbody.appendChild(newRow);
//       input[0].value = "";
//       updateElement();
//       deleteElement();
//     }
//   });
// });
// function updateElement() {
//   const edits = document.querySelectorAll(".edit");
//   edits.forEach((edit) => {
//     edit.addEventListener("click", () => {
//       let data = edit.parentElement.previousSibling;
//       let text = data.textContent.trim();
//       let inputValue = getInputValue();
//       inputValue[0].value = text;

//       let adds = document.querySelectorAll(".add");
//       console.log(adds, "the add button");

//       adds.forEach((add) => {
//         add.classList.remove("add");
//         add.classList.add("update");
//         add.textContent = "Update";

//         //////////////////////////////update
//         let updateClick = document.getElementsByClassName("update");
//         console.log(updateClick, "updateClick");
//         updateClick[0].addEventListener("click", function () {
//           console.log("update btn clicked");

//           let input = document.querySelector(".input");
//           console.log(input.value, "h inputsss");
//           add.classList.remove("update");
//           add.classList.add("add");
//           add.textContent = "Add";
//         });
//       });
//     });
//   });
// }
// function deleteElement() {
//   const deletes = document.querySelectorAll(".delete");
//   deletes.forEach((del) => {
//     del.addEventListener("click", () => {
//       del.parentNode.parentNode.remove();
//     });
//   });
// }
// let input = getInputValue();
// console.log("input", input);
// input[0].addEventListener("keyup", function (event) {
//   if (event.keyCode == 13) {
//     this.nextElementSibling.click();
//   }
// });

const buttons = document.querySelectorAll(".add");

function getInputValue() {
  return document.getElementsByName("input")[0];
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    let input = getInputValue();
    let inputValue = input.value;
    if (inputValue) {
      const tbody = document.querySelector(".tbody");
      const newRow = document.createElement("tr");
      const data = document.createElement("td");
      data.textContent = inputValue;
      data.classList.add("data");
      const actions = document.createElement("td");
      const edit = document.createElement("button");
      edit.textContent = "Edit";
      edit.classList.add("edit");
      actions.appendChild(edit);
      const del = document.createElement("button");
      del.textContent = "Delete";
      del.classList.add("delete");
      actions.appendChild(del);
      newRow.appendChild(data);
      newRow.appendChild(actions);
      tbody.appendChild(newRow);
      input.value = "";
      deleteElement(del);
      editElement(edit);
    }
  });
});


function editElement(editButton) {
  editButton.addEventListener("click", () => {
    const row = editButton.parentNode.parentNode;
    const dataCell = row.querySelector(".data");
    const inputValue = dataCell.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.value = inputValue;
    dataCell.textContent = "";
    dataCell.appendChild(input);
    editButton.textContent = "Update";
    editButton.classList.remove("edit");
    editButton.classList.add("update");
    editButton.removeEventListener("click", editElement);
    editButton.addEventListener("click", () => {
      const updatedValue = input.value;
      dataCell.textContent = updatedValue;
      editButton.textContent = "Edit";
      editButton.classList.remove("update");
      editButton.classList.add("edit");
      editButton.removeEventListener("click", updateElement);
      editButton.addEventListener("click", editElement);
    });
  });
}

function deleteElement(delButton) {
  delButton.addEventListener("click", () => {
    delButton.parentNode.parentNode.remove();
  });
}
let input = getInputValue();
input.addEventListener("keyup", function (event) {
  if (event.keyCode == 13) {
    this.nextElementSibling.click();
  }
});
