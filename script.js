// TIMER
function updateTimer() {
  future = Date.parse("jul 2, 2024 01:30:00");
  now = new Date();
  diff = future - now;

  days = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours = Math.floor(diff / (1000 * 60 * 60));
  mins = Math.floor(diff / (1000 * 60));
  secs = Math.floor(diff / 1000);

  d = days;
  h = hours - days * 24;
  m = mins - hours * 60;
  s = secs - mins * 60;

  document.getElementById("timer").innerHTML =
    "<div>" +
    "<span>Dias</span>" +
    d +
    "</div>" +
    "<div>" +
    "<span>Horas</span>" +
    "<p>:</p>" +
    h +
    "</div>" +
    "<div>" +
    "<span>Minutos</span>" +
    "<p>:</p>" +
    m +
    "</div>" +
    "<div>" +
    "<span>Segundos</span>" +
    "<p>:</p>" +
    s +
    "</div>";
}
setInterval("updateTimer()", 1000);

// MODAL
const modal = document.getElementById("modal-background");
const openModalButton = document.getElementById("open-modal");
const cancelModalButton = document.getElementById("cancel-button");
const sendFormButton = document.getElementById("send-button");
const sendMessage = document.getElementById("send-message");
const info = document.getElementById("info");
const illustrationMain = document.getElementById("illustration-main");

const timeOut = 3000;
const removeSendMessage = () => sendMessage.classList.add("invisible");

openModalButton.onclick = () => {
  modal.classList.remove("invisible");
  info.classList.add("opacityOn");
  illustrationMain.classList.add("opacityOn");
};

cancelModalButton.onclick = () => {
  modal.classList.add("invisible");
  info.classList.remove("opacityOn");
  illustrationMain.classList.remove("opacityOn");
};

sendFormButton.onclick = () => {
  modal.classList.add("invisible");
  sendMessage.classList.remove("invisible");
  setTimeout(removeSendMessage, timeOut);
  info.classList.remove("opacityOn");
  illustrationMain.classList.remove("opacityOn");
};
