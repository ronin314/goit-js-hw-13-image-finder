import refs from './refs';
import updateMarkup from './templating';
import apiService from './apiService';

refs.searchFormRef.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.galleryRef.innerHTML = '';

  apiService.resetPage();

  apiService.requestImg().then(hits => {
    updateMarkup(hits);
  });

  form.reset();
});

refs.showMoreButton.addEventListener('click', event => {
  event.preventDefault();

  apiService.requestImg().then(hits => {
    updateMarkup(hits);
  });
});
