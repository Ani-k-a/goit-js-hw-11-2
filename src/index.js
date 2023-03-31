import NewApiService from "./js/API_posts";
import Notiflix from "notiflix";
import { imageCard } from "./js/imageCard";


const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');

const newApiService = new NewApiService();


const appendArticlesMarkup = (arr) => {
    const markup = arr.map(imageCard).join('');

    console.log(markup)
    gallery.insertAdjacentHTML('beforeend', markup);

}

const onSearch = (e) => {
    e.preventDefault();
    newApiService.query = e.currentTarget.elements.searchQuery.value;
    newApiService.resetPage();
    newApiService.fetchPosts().then(articles => {
        const totalHits = articles.totalHits;
        console.log(articles)
        if ( totalHits=== 0) {
            Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.')
            return;
        }
        
        Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`)
        console.log(articles)
        appendArticlesMarkup(articles.hits);
    })
}

form.addEventListener('submit', onSearch);
