export default {
  key: '20060682-79d0c33630ad61a5740754834',
  searchQuery: '',
  page: 1,
  requestImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;
    return fetch(url)
      .then(response => response.json())
      .then(({ hits }) => {
        this.page += 1;
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(newQery) {
    this.searchQuery = newQery;
  },
};
