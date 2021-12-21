import { galleryItems } from "./gallery-items.js";
// Change code below this line

/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a> */

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"/>
    </a>`;
  })
  .join("");
galleryRef.insertAdjacentHTML("afterbegin", galleryMarkup);
