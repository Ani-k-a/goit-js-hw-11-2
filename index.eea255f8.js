const e=document.querySelector(".search-form"),t=new class{async fetchPosts(e){const t=new URLSearchParams({key:"34896772-f933e5acb00e33c723219ffd4",q:this.searchQuery,image_type:"photo",prientation:"horizontal",safesearch:!0,lang:"en",per_page:40,page:this.page}),a=await fetch(`https://pixabay.com/api/?${t}`),s=await a.json();return this.incrementPage(),s}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.search}set query(e){this.searchQuery=e}constructor(){this.searchQuery="",this.page=1}};e.addEventListener("submit",(e=>{e.preventDefault(),t.query=e.currentTarget.elements.searchQuery.value,t.resetPage(),t.fetchPosts(),console.log(t.fetchPosts())}));
//# sourceMappingURL=index.eea255f8.js.map