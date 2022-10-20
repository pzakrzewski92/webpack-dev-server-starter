const getPosts = (page) => {
    let postListMarkup = "";
    const params = new URLSearchParams({
      _limit: POSTS_PER_PAGE,
      _page: page,
    });
    fetch(POSTS_API_URL + "?" + params)
      .then((response) => response.json())
      .then((posts) => {
        posts.forEach((post) => {
          postListMarkup += `
              <li>
                  <h3>${post.title}</h3>
                  <p>${post.body}</p>
              </li>
          `;
        });
        // adding posts markup to DOM
        postsContainer.innerHTML = postListMarkup;
      });
  };
  