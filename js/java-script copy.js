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
};
// console.log(refs.searchForm);
// console.log(refs.galleryImages);

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

// Add listeners by "submit" for form wist function fetchImages(term) in callback
refs.searchForm.addEventListener('submit', onSearch);

// Add function onSearch
function onSearch(evt) {
  // stop reboot page
  evt.preventDefault();
  // Constant for a inputed term (for serach images)
  // Add method trim()
  const termImages = evt.currentTarget.elements.searchQuery.value.trim();;
  console.log(termImages);
  fetchImages(termImages)
    .then(images => {
      return images;
    })
    // .then(renderCountry);
}

// Add asynchronous function
async function fetchImages(term) {
  // console.log('test');
  // Add URL to Pixabay
  // Parts URL
  const frontURL = 'https://pixabay.com/api/?key=';
  const betweenURL = '&q=';
  const backURL = '&image_type=photo&orientation=horizontal&safesearch=true';
  // Complete URL
  let url = frontURL + API_KEY + betweenURL + term + backURL;
  const response = await fetch(url);
  const images = await response.json();
  return console.log(images);
}

// Add function create gallery


// Add function for markup rendering
// function renderCardsGallery(images) {
//   galleryImages.innerHTML = '';
//   const markup = images.map((image) => {
//     return `<div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>`;
//   })
//     .join("");
//   galleryImages.innerHTML = markup;
// }