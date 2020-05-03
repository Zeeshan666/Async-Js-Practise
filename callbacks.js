const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" }
];

const getPosts = () => {
  setTimeout(() => {
    let output = "";
    posts.forEach(item => {
      output += `<li>${item.title}</li>`;
      console.log("get post runing");
    });
    document.body.innerHTML = output;
  }, 1000);
};

//getPosts();
//callback  getPosts hi hai marzi hai
const createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost(
  {
    title: "hello world",
    body: "okay world"
  },
  getPosts
);
