import refs from './refs';
import galleryItemTpl from '../template/galleryItem.hbs';

const updateMarkup = hits => {
  const galleryMarkup = galleryItemTpl(hits);
  refs.galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);
  return;
};

export default updateMarkup;
