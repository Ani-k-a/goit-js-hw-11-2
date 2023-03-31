export const imageCard = ({webformatURL, tags, likes, views, comments, downloads}) =>
`<div class="photo-card">
    <div class="image-box">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
    </div>
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        <b>${likes}</b>
      </p>
      <p class="info-item">
        <b>Views</b>
        <b>${views}</b>
      </p>
      <p class="info-item">
        <b>Comments</b>
        <b>${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads</b>
        <b>${downloads}</b>
      </p>
    </div>
  </div>`;