import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Notiflix from "notiflix";
import NewApiService from "./js/API_posts";
import { imageCard } from "./js/imageCard";

const form = document.querySelector('.search-form');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const newApiService = new NewApiService();


const appendArticlesMarkup = (arr) => {
    const markup = arr.map(imageCard).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionSelector: 'img',
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250
    });
}



const rerender = () => gallery.replaceChildren();

const onSearch = async (e) => {
    e.preventDefault();
    rerender();
    const searchQuery = e.currentTarget.elements.searchQuery.value.trim();

    if (searchQuery === "") {
        console.log(e.currentTarget.elements.searchQuery.value.trim());
        Notiflix.Notify.failure('Erorr, input is empty.');
        return;
    }

    try {
        newApiService.query = searchQuery;
        newApiService.resetPage();
        const articles = await newApiService.fetchPosts();
        const totalHits = articles.totalHits;
        
        if(totalHits > 40) {
            loadMoreBtn.classList.remove('is-hiden');
        }

        if (totalHits === 0) {
            Notiflix.Notify.warning('Sorry, there are no images matching your search query. Please try again.')
            return;
        }
        Notiflix.Notify.info(`Hooray! We found ${totalHits} images.`)
        appendArticlesMarkup(articles.hits);
        

    }
    catch (error) {
        console.log(error.message);
    }
}

const onLoadMore = async () => {
    console.log('rty')
    try {
        const articles = await newApiService.fetchPosts();
        appendArticlesMarkup(articles.hits);

        if(newApiService.page === Math.ceil(articles.totalHits/40)){
            Notiflix.Notify.warning('Were sorry, but youve reached the end of search results.');
            loadMoreBtn.classList.add('is-hiden');
        }
    }
    catch (error) {
        console.log(error.message);}

}

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('click', onLoadMore);

// new SimpleLightbox('.image-box a', {
//     captions: true,
//     captionSelector: 'img',
//     captionsData: 'alt',
//     captionPosition: 'bottom',
//     captionDelay: 250
// })
