import { galleryItems } from "./gallery-items.js";
// Change code below this line

const imageList = document.querySelector("ul.gallery");

const imageElements = imageListMarkup(galleryItems);

imageList.innerHTML = imageElements;

imageList.addEventListener("click", openModal);

function imageListMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </li>`;
    })
    .join("");
}

function openModal(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const originalImage = event.target.dataset.source;
    const instance = basicLightbox.create(
      `<img src="${originalImage}" width="800" height="600">`
    );
    instance.show();
  }
  return;
}
