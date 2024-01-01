import { createContext, useContext, useEffect, useState } from "react";
const APP_URL = "http://localhost:8000";
const AuthorContext = createContext();

function AuthorProvider({ children }) {
  const [authors, setAuthors] = useState([]);
  const [author, setAuthor] = useState({});

  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [isAuthorLoading, setIsAuthorLoading] = useState(false);
  const itemsPerPage = 18;

  useEffect(function () {
    async function getData() {
      setIsAuthorLoading(true);
      const res = await fetch(`${APP_URL}/authors`);
      const data = await res.json();

      setAuthors(data);
      setIsAuthorLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(authors.length / itemsPerPage));
  }, [authors]);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = authors.slice(startIndex, endIndex);
  function handlePageChange({ selected }) {
    setCurrentPage(selected);
  }
  function getAuthorById(id) {
    const authorById = authors.find((author) => author.id === id);

    setAuthor(() => authorById);
  }
  function getCommentWriter(commentArray) {
    const commentWritters = authors.filter((author) => {
      const filteredComment = commentArray.some(
        (commentObj) => commentObj.authorId === Number(author.id)
      );
      return filteredComment;
    });
    return commentWritters;
  }
  return (
    <AuthorContext.Provider
      value={{
        totalPages,
        subset,
        handlePageChange,
        getCommentWriter,

        currentPage,
        authors,
        author,
        getAuthorById,
        isAuthorLoading,
      }}
    >
      {children}
    </AuthorContext.Provider>
  );
}
function useAuthor() {
  const context = useContext(AuthorContext);
  if (context === undefined)
    throw new Error("AuthorContext was used outside AuthorProvider");
  return context;
}

export { AuthorProvider, useAuthor };
