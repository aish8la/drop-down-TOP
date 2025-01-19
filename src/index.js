import "./style.css";

function DropdownMenu() {
  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("dropdown-btn")) {
      e.target.closest(".dropdown").classList.toggle("expand");
    }
  
    const expandedDropdowns = document.querySelectorAll(".expand");
  
    expandedDropdowns.forEach((element) => {
      if (element !== e.target.closest(".expand")) {
        element.classList.remove("expand");
      }
    });
  });
}

export { DropdownMenu };

