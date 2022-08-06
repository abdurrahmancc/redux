import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./postSlice";

const PostViews = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <h1>post views</h1>
      <section className="posts">
        {posts &&
          posts.map((post) => {
            return (
              <article>
                <h5>{post.title}</h5>
                <>{post.body}</>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default PostViews;
