import axios from "axios";
// async function fetchData() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
//   data.map(item => console.log(item.name));
//   //console.log();
// }

fetchData();

async function axiosData(params) {
  //axios.get('https://jsonplaceholder.typicode.com/users').then(data=>console.log(data)).catch(err=>console.log(err))
  const user = await axios.get("https://jsonplaceholder.typicode.com/users");
  const post = await axios.get("https://jsonplaceholder.typicode.com/post");
}

axiosData();
