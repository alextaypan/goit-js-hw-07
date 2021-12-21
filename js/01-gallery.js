import { galleryItems } from "./gallery-items.js";
// Change code below this line

/* <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div> */

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
    <a
      class="gallery__link"
      href="${original}"
    >
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
    </div> `;
  })
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);

let instance = null;
galleryRef.addEventListener("click", onOpenModal);
function onOpenModal(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  const dataSrc = event.target.dataset.source;
  console.log(dataSrc);
  instance = basicLightbox.create(
    `<img src="${dataSrc}" width="800" height="600">`
  );
  instance.show();
  document.addEventListener("keydown", onCloseModal);
}

function onCloseModal(event) {
  if (event.code === "Escape") instance.close();
  document.removeEventListener("keydown", onCloseModal);
}
