const accordionButton = document.querySelectorAll(".accordion-btn");

accordionButton.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.toggle("active");
    const accordionDesc = this.nextElementSibling;
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    if (accordionDesc.style.maxHeight) {
      accordionDesc.style.maxHeight = null;
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      accordionDesc.style.maxHeight = accordionDesc.scrollHeight + "px";
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
