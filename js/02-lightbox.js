import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageList = document.querySelector("ul.gallery");

const imageElements = imageListMarkup(galleryItems);

imageList.insertAdjacentHTML("afterbegin", imageElements);

function imageListMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img
                    class="gallery__image"
                    src="${preview}"
                    alt="${description}" />
                </a>
            </li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionsDelay: 250,
});
