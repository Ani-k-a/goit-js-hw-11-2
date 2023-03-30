import NewApiService from "./js/API_posts";
import Notiflix from "notiflix";


const form = document.querySelector('.search-form');

const newApiService = new NewApiService();


const renderList = () => {

}

const loadFetchPosts = (e) => {
    e.preventDefault();
    newApiService.query = e.currentTarget.elements.searchQuery.value;
    newApiService.resetPage();
    newApiService.fetchPosts().then(articles => {
        if (articles.total === 0) {
            Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.')
            return;
        }
        console.log(articles)
    })

}




form.addEventListener('submit', loadFetchPosts);
