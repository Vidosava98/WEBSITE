document.getElementById("tab-1").addEventListener("click", function() {
    showContent(1);
});

document.getElementById("tab-2").addEventListener("click", function() {
    showContent(2);
});

function showContent(tabNumber) {

    const allPages = document.querySelectorAll(".content-tab");
    allPages.forEach(function(page) {
       page.style.display = "none";
    });

    const activeTab = document.getElementById("content-" + tabNumber);
    activeTab.style.display = "block";

    const allButtons = document.querySelectorAll(".tab");
    allButtons.forEach(function(button) {
        button.classList.remove("active");
    });

    document.getElementById("tab-" + tabNumber).classList.add("active");
}

showContent(1);
