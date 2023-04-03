
import axios from "axios";
export default class NewApiService {

    constructor() {
        this.searchQuery = '',
        this.page = 1
    }
    

async fetchPosts (searchQuery) {
    const API_KEY = {
        key : '34896772-f933e5acb00e33c723219ffd4',
    }
    const URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams ({
        key : '34896772-f933e5acb00e33c723219ffd4',
        q: this.searchQuery,
        image_type: 'photo',
        prientation: "horizontal",
        min_width: '350px',
        safesearch: true,
        lang: "en",
        per_page: 40,
        page: this.page,  
    })
    
    //  const response = await fetch(`${URL}?${params}`);
    //  const images = await response.json();
     this.incrementPage();
     return (await axios.get(`${URL}?${params}`)).data;
}

incrementPage () {
    this.page += 1;
}

resetPage () {
    this.page = 1;
}

get query () {
    return this.search;
}

set query (newQuery) {
    this.searchQuery = newQuery;
}

}



