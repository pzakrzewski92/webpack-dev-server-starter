import "./css/index.css";
import getPosts from "./modules/getPosts";

function printPosts(posts){
  posts.foreach(post => {
    console.log(post);
  })
}

getPosts(1, printPosts);

try {
  throw new Error ();
} catch (xxx) {
  console.error("ooops", xxx);
}