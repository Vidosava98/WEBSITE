document.getElementById("tab-1").addEventListener("click", function () {
  showContent(1);
});

document.getElementById("tab-5").addEventListener("click", function () {
  showContent(5);
});
document.querySelectorAll(".techButton").forEach((button, index) => {
  button.addEventListener("click", function () {
    showIcons(index);
  });
});
function showIcons(columnIndex) {
  const rows = document.querySelectorAll("#techId .techFieldsRow");

  rows.forEach((row) => {
    row.style.display = "none";
  });

  document.querySelectorAll(".techButton").forEach((button, index) => {
    if (index != columnIndex) {
      button.style.boxShadow = "none";
      button.style.color = "#15635a";
    } else {
      button.style.boxShadow = "0 2px 0  #0C3934";
      button.style.color = "#0C3934";
    }
  });
  const targetRow = rows[columnIndex];
  if (targetRow) {
    targetRow.style.display = "flex";
  }
}

function showContent(tabNumber) {
  const allPages = document.querySelectorAll(".content-tab");
  allPages.forEach(function (page) {
    page.style.display = "none";
  });

  const activeTab = document.getElementById("content-" + tabNumber);
  activeTab.style.display = "block";

  const allButtons = document.querySelectorAll(".tab");
  allButtons.forEach(function (button) {
    button.classList.remove("active");
  });
  document.getElementById("tab-" + tabNumber).classList.add("active");
}

showContent(1);
showIcons(0);
