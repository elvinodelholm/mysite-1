function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleTextVisibility() {
  const imgElements = document.querySelectorAll(
    ".image, .index-image, .trigger, .index-image-tall, .vimeo-image, .image-tall, .sleeve-extratall"
  );
  const textElements = document.querySelectorAll(".stacked span");

  imgElements.forEach((img, index) => {
    if (isInViewport(img)) {
      textElements.forEach((text) => {
        text.style.display = "none";
      });
      textElements[index].style.display = "block";
    }
  });
}

setInterval(toggleTextVisibility, 500);

window.addEventListener("DOMContentLoaded", () => {
  toggleTextVisibility();

  window.addEventListener("scroll", toggleTextVisibility);
  window.addEventListener("resize", toggleTextVisibility);
  window.addEventListener("orientationchange", toggleTextVisibility);
  window.addEventListener("touchmove", toggleTextVisibility);
});

// Get today's date
const today = new Date();

// Format the date as YY.MM.DD
const formattedDate = `${today.getFullYear().toString().slice(-2)}.${
  today.getMonth() + 1
}.${today.getDate()}`;

// Display the formatted date
const dateDisplay = document.getElementById("dateDisplay");
dateDisplay.innerText = formattedDate;


function changeText() {
  const mailText = document.getElementById("mail-text");
  mailText.innerHTML =
    mailText.innerHTML === "elvin.odelholm@gmail.com"
      ? "Mail"
      : "elvin.odelholm@gmail.com";
}

