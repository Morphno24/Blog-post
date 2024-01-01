import { createContext, useContext, useEffect, useState } from "react";
const APP_URL = "http://localhost:8000";
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});
  const [authorPosts, setAuthorPosts] = useState([]);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(function () {
    async function getData() {
      setIsPostsLoading(true);
      const res = await fetch(`${APP_URL}/posts`);
      const data = await res.json();

      setPosts(data);
      setIsPostsLoading(false);
    }
    getData();
  }, []);

  function findPostByAuthor(id) {
    const authPosts = posts.filter((post) => post.authorId === id);
    setAuthorPosts(authPosts);
  }
  function findPostById(id) {
    const post = posts.filter((post) => post.id === id);
    setPost(...post);
  }
  function AscendByDate() {
    const AscendByDateArr = [...authorPosts].sort(
      (a, b) => a.datePublished - b.datePublished
    );

    setAuthorPosts(() => AscendByDateArr);
  }
  function DescendByDate() {
    const AscendByDateArr = [...authorPosts].sort(
      (a, b) => b.datePublished - a.datePublished
    );

    setAuthorPosts(() => AscendByDateArr);
  }
  function DescendByLike() {
    const AscendByDateArr = [...authorPosts].sort(
      (a, b) => b.numLikes - a.numLikes
    );

    setAuthorPosts(() => AscendByDateArr);
  }
  function AscendByLike() {
    const AscendByDateArr = [...authorPosts].sort(
      (a, b) => a.numLikes - b.numLikes
    );

    setAuthorPosts(() => AscendByDateArr);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        authorPosts,
        post,
        isPostsLoading,
        findPostByAuthor,
        AscendByDate,
        DescendByDate,
        AscendByLike,
        DescendByLike,
        findPostById,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
function usePost() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside PostProvider");
  return context;
}

export { PostProvider, usePost };
