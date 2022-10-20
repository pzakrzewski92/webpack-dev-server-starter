import {POSTS_API_URL, POSTS_PER_PAGE } from "./constants";

const getPosts = (page) => {
    const params = new URLSearchParams({
      _limit: POSTS_PER_PAGE,
      _page: page,
    });

    fetch(POSTS_API_URL + "?" + params)
      .then((response) => {
        console.log(response);
        if(!response.ok) {
throw new Error(response.status);
        }
      })
      .then((posts) => {
callback(posts);
      }).catch((error) => {
        console.log("Inside getPosts we have an error", error);
      });
  };
  export default getPosts;