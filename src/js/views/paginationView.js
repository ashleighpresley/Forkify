import View from './View';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    const currentPage = this._data.page;
    //     <!-- <button class="btn--inline pagination__btn--prev">
    //     <svg class="search__icon">
    //       <use href="src/img/icons.svg#icon-arrow-left"></use>
    //     </svg>
    //     <span>Page 1</span>
    //   </button>
    //   <button class="btn--inline pagination__btn--next">
    //     <span>Page 3</span>
    //     <svg class="search__icon">
    //       <use href="src/img/icons.svg#icon-arrow-right"></use>
    //     </svg>
    //   </button> -->
    //First page, of multiple pages
    if (currentPage === 1 && numPages > 1) {
      return `
        <button class="btn--inline pagination__btn--next">
            <span>Page ${currentPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
      </button>`;
    }
    //Last page, of multiple pages
    if (currentPage === numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
    }
    //Middle page
    if (currentPage < numPages) {
      return `
      <button class="btn--inline pagination__btn--next">
      <span>Page ${currentPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
</button>
        <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currentPage - 1}</span>
        </button>`;
    }
    //First page, and there are NO other pages
    return ``;
  }
}

export default new PaginationView();
