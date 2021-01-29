import refs from './refs';

refs.showMoreButton.addEventListener('click', event => {
  event.preventDefault();

  requestImg(inputValue, page).then(hits => {
    updateMarkup(hits);
    page += 1;
  });
});
