// script.js
function openModal(element) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
