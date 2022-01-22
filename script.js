// TIMER
function updateTimer() {
  future = Date.parse("feb 2, 2022 01:30:00");
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
    "<p>:</p>" +
    "</div>" +
    "<div>" +
    "<span>Horas</span>" +
    h +
    "<p>:</p>" +
    "</div>" +
    "<div>" +
    "<span>Minutos</span>" +
    m +
    "<p>:</p>" +
    "</div>" +
    "<div>" +
    "<span>Segundos</span>" +
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

const timeOut = 3000;
const removeSendMessage = () => sendMessage.classList.add("invisible");

openModalButton.onclick = () => {
  modal.classList.remove("invisible");
};

cancelModalButton.onclick = () => {
  modal.classList.add("invisible");
};

sendFormButton.onclick = () => {
  modal.classList.add("invisible");
  sendMessage.classList.remove("invisible");
  setTimeout(removeSendMessage, timeOut);
};
