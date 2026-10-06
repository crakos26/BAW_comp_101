let secretSequence = "";
const secretCode = "yes";

document.addEventListener("keydown", (event) => {
  if (event.key.length !== 1 || event.ctrlKey || event.altKey || event.metaKey) {
    return;
  }

  secretSequence = (secretSequence + event.key.toLowerCase()).slice(-secretCode.length);

  if (secretSequence === secretCode) {
    window.location.href = "/form.html";
  }
});