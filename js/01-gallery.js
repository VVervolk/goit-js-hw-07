import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    item =>
      `<li class="gallery__item">
    <a class="gallery__link" href=${item.original}>
      <img
        class="gallery__image"
        src= ${item.preview}
        data-source="${item.original}"
        alt=${item.description}
      />
    </a>
  </li>`
  )
  .join('');

gallery.innerHTML = markup;

gallery.addEventListener('click', openBigImage);

function openBigImage(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== 'IMG') {
    return;
  }

  const bigImageModal = basicLightbox.create(
    `
		<img src="${evt.target.dataset.source}" >
    `
  );

  bigImageModal.show();

  if (bigImageModal.visible()) {
    document.addEventListener('keydown', evt => {
      if (evt.key === 'Escape') {
        bigImageModal.close();
      }
    });
  }
}
