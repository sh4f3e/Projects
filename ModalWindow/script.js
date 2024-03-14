"use strict";
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const btnOpenModal = document.querySelectorAll(".show-modal");
const closemodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openmodal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const overlaymodal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openmodal);
  closeModal.addEventListener("click", closemodal);
  overlay.addEventListener("click", overlaymodal);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closemodal();
    }
  });
}
