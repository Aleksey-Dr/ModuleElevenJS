// CRUD
// Read (GET)

// Find elements buttons
const btnPosts = document.querySelector('.btn-posts');
const btnREST = document.querySelector('.btn-rest');
const btnPost = document.querySelector('.btn-post');

// Find elements inputs
const postID = document.querySelector('.post-id');

// Add listeners for buttons
// Get all posts
btnPosts.addEventListener('click', getAllPosts);
// REST
btnREST.addEventListener('click', cleanConsole);
// Get one a post
btnPost.addEventListener('click', getPostToID);

// Add a function for get all posts from JSONPlaceholder API
function getAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => console.log(posts))
        .catch(error => console.log(error));
}

function cleanConsole() {
  console.clear();
}

// Add a function for get one a post by id from JSONPlaceholder API
function getPostToID() {
    const postId = postID.value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(response => response.json())
  .then(post => console.log(post))
  .catch(error => console.log(error));
}

// Create (POST)
// // Add elements inputs
// const postForm = document.querySelector('.post-form');
// const authorName = document.querySelector('.author-name');
// // console.log(authorName.value);
// const bodyFetch = document.querySelector('.body-fetch');

// // Add element button for submit
// const btnAddPost = document.querySelector('.btn-add-post');
// // console.log(btnAddPost);

// // Add listener for button (submit)
// postForm.addEventListener('submit',
//   () => {
//     // Add an object for post to add
//     // const postToAdd = {
//     //   author: authorName.value,
//     //   body: bodyFetch.value,
//     // };

//   console.log(1);
//   });

// Find elements from html
const postPOST = document.querySelector('.post-POST');
// console.log(postPOST);

// Add object for body
const postToAdd = {
  author: 'Man',
  body: 'Hello!'
};

// Add object for options POST
const options = {
  method: 'POST',
  body: JSON.stringify(postToAdd),
  headers: {
    'Content-Type': "application/json; charset=UTF-8",
  },
};

// Add listener
postPOST.addEventListener('click',
  () => {
    fetch("https://jsonplaceholder.typicode.com/posts", options)
      .then(response => response.json())
      .then(post => console.log(post))
      .catch(error => console.log(error));
  });

// Update (PUT and PATCH)
// Find elements from html
const btnPostPatch = document.querySelector('.post-patch');
// console.log(btnPostPatch);

// Add object for body
const postToUpdate = {
  id: 101,
  body: 'Goodbye!',
};

// Add object for options PATCH
const optionsPatch = {
  method: 'PATCH',
  body: JSON.stringify(postToUpdate),
  headers: {
    'Content-type': "application/json; charset=UTF-8",
  },
};

// Add listener
btnPostPatch.addEventListener('click',
  () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postToUpdate.id}`, optionsPatch)
      .then(respones => respones.json())
      .then(post => console.log(post))
      .catch(error => console.log('ERROR' + error));
  });

// Delete DELETE
// Find elements from html
const btnDelete = document.querySelector('.btn-delete');
// console.log(btnDelete);

// Add id
const postIdToDelete = 101;

// Add listener
btnDelete.addEventListener('click',
  () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postIdToDelete}`,
      {
        method: "DELETE",
      })
        .then(() => console.log("Post deleted"))
        .catch(error => console.log('ERROR', error))
  });

  // Asynchronous functions
  // Find elements from html
  
  // Pixaday
  // Find elements from html
  // Create object with elements
const refs = {
  searchForm: document.querySelector('.search-form'),
  galleryImages: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};
// console.log(refs.searchForm);
// console.log(refs.galleryImages);
// console.log(refs.loadMoreBtn);

// Add class to the element loadMoreBtn for hiddening
refs.loadMoreBtn.classList.add('is-hidden');

// Add an object with parameters for query stryng
// const parametersQuery = {
//   term: '&q=',
//   type: '&image_type=photo',
//   orientation: '&orientation=horizontal',
//   safesearch: '&safesearch=true',

// }

// Add CONSTANTS
// Add personal key for Pixabay API
const API_KEY = '35129314-12d9f6cafbe4df38ad9bc5f6b';

// let termImages = '';
// Add default value of a current page
let currentPage = 1;
let valueTermImages = '';
let markup = '';

// Add listeners
// Add listeners by "submit" for form wist function fetchImages(term) in callback
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', 
  onLoadMore);

// Add function onSearch
function onSearch(evt) {
  refs.loadMoreBtn.classList.add('is-hidden');
  // stop reboot page
  evt.preventDefault();
  // Add clear gallary by submit
  clearGallery();
  // Constant for a inputed term (for serach images)
  // Add method trim()
  const termImages = evt.currentTarget.elements.searchQuery.value.trim();;
  console.log(termImages);
  if (valueTermImages !== termImages) {
    // Add function for reset page by new termImages
    restartPage();
  }
  valueTermImages = termImages;

  fetchImages(termImages)
    .then(renderCards)
    .catch(error => console.log(error));
}

// Add asynchronous function
async function fetchImages(term) {
  // console.log('test');
  // Add URL to Pixabay
  // Parts URL
  const frontURL = 'https://pixabay.com/api/?key=';
  const betweenURL = '&q=';
  // Add per_page=40 for change default value of quantity items in response
  const backURL = '&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=';
  // console.log('currentPage before:', currentPage);
  // Complete URL
  const url = frontURL + API_KEY + betweenURL + term + backURL + currentPage;
  
  const response = await fetch(url);
  const images = await response.json();
  // console.log(images);
  // Change page of response
  currentPage += 1;
  // console.log(currentPage);
  return images;
}

// Add function for rendering markup when found images
function renderCards(images) {
  // console.log(images);
  // Test by empty
  if (images.totalHits !== 0) {
    markup = images.hits
      .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        // <a class="card-link" href='${largeImageURL}'>
    return `<div class="photo-card">
      <img class="card-img" src="${webformatURL}" alt="${tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item">
          <b>Likes:${likes}</b>
        </p>
        <p class="info-item">
          <b>Views:${views}</b>
        </p>
        <p class="info-item">
          <b>Comments:${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads:${downloads}</b>
        </p>
      </div>
    </div>`
    // </a>
      }).join('');
    refs.galleryImages.insertAdjacentHTML('beforeend', markup);
    refs.loadMoreBtn.classList.remove('is-hidden');
  } else {
    refs.loadMoreBtn.classList.add('is-hidden');
    console.log("Sorry, there are no images matching your search query. Please try again.");
  }
}

function restartPage() {
  currentPage = 1;
}

function clearGallery() {
  refs.galleryImages.innerHTML = '';
}

function onLoadMore() {
  fetchImages(valueTermImages).then(renderCards);
}