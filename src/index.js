import "./style.css";

document.addEventListener("click", e => {
    if (e.target.classList.contains("dropdown-btn")) {
        e.target.closest(".dropdown").classList.toggle("expand");
    }
});
