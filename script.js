document.querySelectorAll(".techButton").forEach((button, index) => {
  button.addEventListener("click", function () {
    showIcons(index);
  });
});

let activeButton = document.querySelector(".techButton.active");
let visibleRow = document.querySelector("#techId .techFieldsRow:not(.hidden)");

function showIcons(columnIndex) {
  const buttons = document.querySelectorAll(".techButton");
  const rows = document.querySelectorAll("#techId .techFieldsRow");

  // Deactivate previously active button and row
  activeButton?.classList.remove("active");
  visibleRow?.classList.add("hidden");

  // Activate new button and row
  const newButton = buttons[columnIndex];
  const newRow = rows[columnIndex];

  newButton?.classList.add("active");
  newRow?.classList.remove("hidden");

  // Update active references
  activeButton = newButton;
  visibleRow = newRow;
}
