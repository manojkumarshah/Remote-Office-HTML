// Please note, the source code should pass the W3C validation.

function toggleSearchBox() {
  var searchBox = document.querySelector(".search-box");
  searchBox.style.display =
    searchBox.style.display === "none" || searchBox.style.display === ""
      ? "block"
      : "none";
}

let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 4;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});

// Close side cart popup on click outside
jQuery().ready(function () {
  jQuery(".add-to-cart-btn").click(function () {
    jQuery(".sidecart").addClass("open");
  });

  jQuery("sidecart__close").click(function () {
    jQuery(".sidecart").removeClass("open");
  });
});
