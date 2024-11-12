// Toggle dropdown menu
function toggleMenu() {
  const dropdown = document.getElementById("list-items");
  dropdown.style.display =
    dropdown.style.display === "block" ? "none" : "block";
}

// Close dropdown menu
function closeMenu() {
  document.getElementById("list-items").style.display = "none";
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.getElementById("list-items");
  const button = document.querySelector(".dropdown-btn");
  if (
    dropdown.style.display === "block" &&
    !dropdown.contains(event.target) &&
    !button.contains(event.target)
  ) {
    closeMenu();
  }
});

// Perform word search
function basicSearch() {
  const searchInput = document.forms.basicForm.searchterms.value.trim();
  if (searchInput) {
    window.open(
      `https://incubator.wikimedia.org/wiki/Wt/sat/${encodeURIComponent(
        searchInput
      )}`,
      "_blank"
    );
  } else {
    alert("ᱫᱟᱭᱟ ᱠᱟᱛᱮ ᱢᱤᱫᱴᱟᱹᱝ ᱟᱹᱲᱟᱹ ᱚᱞ ᱢᱮ ᱥᱮᱸᱫᱽᱨᱟ ᱞᱟᱹᱜᱤᱫ ᱾");
  }
  return false;
}

// Load datalist options
function loadDatalist() {
  fetch("ᱥᱟᱱᱛᱟᱲᱤ.txt")
    .then((response) => response.text())
    .then((data) => {
      const options = data
        .split("\n")
        .map((word) => `<option value="${word.trim()}"></option>`)
        .join("");
      document.getElementById("santaliwt").innerHTML = options;
    })
    .catch((error) => console.error("Failed to load datalist:", error));
}

document.addEventListener("DOMContentLoaded", loadDatalist);

// Toggle Mobile Menu
function toggleMobileMenu() {
  const navbar = document.querySelector(".navbar nav");
  navbar.classList.toggle("active");
}

// Toggle Dropdown Menu
function toggleDropdown(event) {
  event.preventDefault(); // Prevent default link behavior
  const dropdownMenu = document.getElementById("list-items");
  if (dropdownMenu.style.display === "block") {
    dropdownMenu.style.display = "none";
  } else {
    dropdownMenu.style.display = "block";
  }
}

// Close Dropdown on Outside Click
document.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("list-items");
  const dropdownButton = document.querySelector(".dropdown-btn");

  if (
    dropdownMenu.style.display === "block" &&
    !dropdownMenu.contains(event.target) &&
    !dropdownButton.contains(event.target)
  ) {
    dropdownMenu.style.display = "none";
  }
});
