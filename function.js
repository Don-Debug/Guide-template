const pageContent = document.getElementById("full-content");
const btn = document.getElementById("show");

function clicked() {
    if (pageContent.classList.contains("show")) {
        pageContent.classList.remove("show");
        btn.innerHTML = "Show more";
    } else {
        pageContent.classList.add("show");
        btn.innerHTML = "Show less";
    }
};

btn.addEventListener("click", clicked);
