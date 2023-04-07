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
