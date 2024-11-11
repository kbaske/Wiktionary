// Automatically fill the First Character
function updateFirstCharacter() {
  const word = document.getElementById("Sword").value;
  document.getElementById("firstC").value = word ? word[0] : "";
}

function writeCode() {
  const Sword = document.getElementById("Sword").value,
    Smeaning = document.getElementById("Smeaning").value,
    Saudio = document.getElementById("Saudio").value,
    proipa = document.getElementById("proipa").value,
    english = document.getElementById("english").value,
    odia = document.getElementById("odia").value,
    hindi = document.getElementById("hindi").value,
    bangla = document.getElementById("bangla").value,
    assamese = document.getElementById("assamese").value,
    firstC = document.getElementById("firstC").value;

  // Output format
  const outputValue =
    "== ᱥᱟᱱᱛᱟᱲᱤ ==\n" +
    "=== ᱢᱮᱱᱮᱛ ===\n" +
    Smeaning +
    "\n" +
    "=== ᱥᱟᱰᱮ ===\n" +
    Saudio +
    "\n" +
    "=== ᱩᱪᱨᱟᱹᱲ ===\n{{Wt/sat/ᱩᱪᱨᱟᱹᱲ|" +
    proipa +
    "}}\n" +
    "== English ==\n" +
    Sword +
    "}}\n* " +
    english +
    "\n" +
    "== ଓଡ଼ିଆ ==\n* " +
    odia +
    "\n" +
    "== हिंदी ==\n* " +
    hindi +
    "\n" +
    "== বাংলা ==\n* " +
    bangla +
    "\n" +
    "== অসমীয়া ==\n* " +
    assamese +
    "\n" +
    "== ᱥᱟᱹᱠᱷᱭᱟᱹᱛ ==\n" +
    "* Campbell, A.; Macphail, R.M. (1984). Campbell's English-Santali Dictionary. Eastern Books. ISBN 978-0-8364-1137-9.\n" +
    "* Campbell, A. (1899). A Santali-English dictionary. Santal Mission Press.\n" +
    "* Mrs. Maina Tudu (Hansdah). (2016) SANTALI DICTIONARY, Olchiki-Olchiki-English script. ISBN 978-93-5267-534-0 \n" +
    "* P.O. BODDING. SANTALI DICTIONARY (1929) \n" +
    "[[Category:Wt/sat/" +
    firstC +
    "]]\n";

  document.getElementById("outputForm").value = outputValue;
}

function copy() {
  const textarea = document.getElementById("outputForm");
  textarea.select();
  document.execCommand("copy");
}

// Function to create a toast message
function showToast(message) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;

  // Append toast to the container
  toastContainer.appendChild(toast);

  // Remove toast after animation
  setTimeout(() => {
    toast.remove();
  }, 3500); // Duration matches fade-out timing
}

// Event listeners for button actions
document.getElementById("createButton").addEventListener("click", function () {
  showToast("Form created successfully!");
});

document.getElementById("copyButton").addEventListener("click", function () {
  showToast("Content copied to clipboard!");
});

document.getElementById("resetButton").addEventListener("click", function () {
  showToast("Form has been reset.");
});

// Redirect Url function
function redirectToWebsite() {
  // Redirect Url
  const baseUrl = "https://incubator.wikimedia.org/w/index.php?title=Wt/sat/";
  const Sword = document.getElementById("Sword").value;
  const editUrl = "&action=edit";
  const redirectUrl = baseUrl + encodeURIComponent(Sword) + editUrl;
  window.open(redirectUrl, "_blank");
}

// Event listener button added using Copy & Redirect functions
document.getElementById("copyRedirect").onclick = function () {
  copy();
  redirectToWebsite();
};
