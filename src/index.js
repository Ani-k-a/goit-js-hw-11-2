import NewApiService from "./js/API_posts";

const form = document.querySelector('.search-form');

const newApiService = new NewApiService();


const renderList = () => {
    
}

const loadFetchPosts = (e) => {
    e.preventDefault(); 
    newApiService.query = e.currentTarget.elements.searchQuery.value;
    newApiService.resetPage();
    newApiService.fetchPosts();

    console.log(newApiService.fetchPosts())
   



}

form.addEventListener('submit', loadFetchPosts);
