$(document).ready(function () {
  $(".gallery").mauGallery({
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 3,
    },
    lightBox: true,
    lightboxId: "myAwesomeLightbox",
    showTags: true,
    tagsPosition: "top",
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const img = document.querySelector("img.lazyload");
  img.src = img.getAttribute("data-src");
  img.classList.remove("lazyload");
});
