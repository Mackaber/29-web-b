function MovieCard({img_src, title, description}) {
  return `
    <div class="card" style="width: 18rem;">
    <img src="${img_src}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${title}</h5>
      <p class="card-text">${description}</p>
    </div>
  </div>
  `
}

export default MovieCard