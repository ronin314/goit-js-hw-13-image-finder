import refs from './refs';
import updateMarkup from './templating';
import apiService from './apiService';

refs.searchFormRef.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value;
  refs.galleryRef.innerHTML = '';
  apiService.resetPage();

  if (apiService.query === '') {
    refs.galleryRef.innerHTML = '';
    refs.showMoreButton.classList.add('is-hidden');
    return;
  }

  apiService.requestImg().then(hits => {
    updateMarkup(hits);
    refs.showMoreButton.classList.remove('is-hidden');
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });

  form.reset();
});
