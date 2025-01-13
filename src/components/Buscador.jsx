

connectedCallback() {
    const siteSearch = this.querySelector('#search-article');
    siteSearch.addEventListener('input', (event) => this.search(event));

    this.renderResults('')
  }

  search(event) {
    event.preventDefault();
    const siteSearch = this.querySelector('#site-search');
    const term = siteSearch.value

    this.renderResults(term)
  }