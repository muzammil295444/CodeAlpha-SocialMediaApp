let posts = [];

function createPost() {
  const postText = document.getElementById("postText").value;
  if (postText === "") return;

  const post = {
    user: "Ali", // fake user
    text: postText,
    time: new Date().toLocaleString(),
    comments: [] 
    likes: 0

  };

  posts.push(post);
  document.getElementById("postText").value = "";
  showFeed();
}

function showFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
    div.innerHTML = `
  div.innerHTML = `
  <strong>${post.user}</strong> <em>${post.time}</em>
  <p>${post.text}</p>

  <!-- Like Button -->
  <button onclick="likePost(${index})">❤️ Like (${post.likes})</button>

  <!-- Comment box -->
  <input type="text" id="commentInput${index}" placeholder="Write a comment..." />
  <button onclick="addComment(${index})">Comment</button>

  <!-- Show all comments -->
  <div id="comments${index}">
    ${post.comments.map(c => `<p><strong>${c.user}:</strong> ${c.text}</p>`).join("")}
  </div>
`;

function addComment(postIndex) {
  const input = document.getElementById(`commentInput${postIndex}`);
  const commentText = input.value;

  if (commentText === "") return;

  const comment = {
    user: "Zainab", 
    text: commentText
  };

  posts[postIndex].comments.push(comment);
  input.value = "";
  showFeed(); 
}
function likePost(postIndex) {
  posts[postIndex].likes++; 
  showFeed(); 
}
