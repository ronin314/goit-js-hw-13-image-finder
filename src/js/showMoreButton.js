import refs from './refs';
import updateMarkup from './templating';
import apiService from './apiService';

refs.showMoreButton.addEventListener('click', event => {
  apiService.requestImg().then(hits => {
    updateMarkup(hits);
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
});
