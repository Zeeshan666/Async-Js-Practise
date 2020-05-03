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

const createPost = post => {
  return new Promise((res, rex) => {
    setTimeout(() => {
      posts.push(post);
      //callback();
      let err = false;
      if (err) {
        res();
      } else {
        rex("error agya");
      }
    }, 2000);
  });
};

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch(err => console.log(err));


const P1= Promise.resolve("Hello");
const P2 =10;
const P3= new Promise((res,rej)=>{
  setTimeout(res,2000,"world")
})
const P4 = fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json())

Promise.all([P1,P2,P3,P4]).then(val=>console.log(val))
