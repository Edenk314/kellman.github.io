const chantButton = document.getElementById("chantButton");
const displayText = document.getElementById("displayText");
const customText = document.getElementById("customText");
const bgColorSelect = document.getElementById("bgColorSelect");

const chants = [
  { text: "GO", color: "#00FF66" },
  { text: "GREEN", color: "#00FF66" },
  { text: "GO", color: "#FFFFFF" },
  { text: "WHITE", color: "#FFFFFF" }
];

let index = 0;


function getContrastColor(hex) {
  if (!hex) return "#FFFFFF";
  if (hex.startsWith("rgb")) {

    const nums = hex.match(/\d+/g).map(Number);
    const brightness = (nums[0]*299 + nums[1]*587 + nums[2]*114)/1000;
    return brightness > 155 ? "#000000" : "#FFFFFF";
  }
  hex = hex.replace("#",""); 
  const r = parseInt(hex.substr(0,2),16);
  const g = parseInt(hex.substr(2,2),16);
  const b = parseInt(hex.substr(4,2),16);
  const brightness = (r*299 + g*587 + b*114)/1000;
  return brightness > 155 ? "#000000" : "#FFFFFF";
}


function showText(text, color) {
  displayText.textContent = text;
  displayText.style.color = color;

  displayText.classList.remove("show");
  void displayText.offsetWidth;
  displayText.classList.add("show");
}


chantButton.addEventListener("click", () => {
  const userText = customText.value.trim();
  if (userText) {
    showText(userText, getContrastColor(document.body.style.backgroundColor));
    customText.value = "";
    return;
  }
  const current = chants[index];
  showText(current.text, current.color);
  index = (index + 1) % chants.length;
});


bgColorSelect.addEventListener("change", (e) => {
  const color = e.target.value || "#333";
  document.body.style.backgroundColor = color;
});
