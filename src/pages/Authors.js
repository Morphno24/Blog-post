import ReactPaginate from "react-paginate";
import Card from "../components/Card";
import { useAuthor } from "../context/AuthorContext";
import LoadingSpinner from "../components/LoadingSpinner";

function Authors() {
  const { subset, totalPages, handlePageChange, currentPage, isAuthorLoading } =
    useAuthor();

  return (
    <div>
      {isAuthorLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="max-w-[50%]  mx-auto grid grid-cols-3 gap-y-5 gap-x-5">
            {subset.map((author) => (
              <Card
                key={author.id}
                id={author.id}
                firstName={author.firstName}
                lastName={author.lastName}
              />
            ))}
          </div>

          <ReactPaginate
            className=" flex justify-center p-6 items-center"
            pageCount={totalPages}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            pageClassName="text-white bg-black py-4 px-6"
            onPageChange={handlePageChange}
            forcePage={currentPage}
            previousLabel={"Previous"}
            previousClassName={`${
              currentPage === 0 ? "text-yellow-300" : "text-blue-600"
            }border-1 bg-white border-[#dee2e6]  rounded p-4 text-lg px-6 `}
            nextLabel={"Next"}
            nextClassName="text-blue-600 border-1 bg-white border-[#dee2e6] rounded py-4 text-lg px-6"
            breakLabel={""}
          />
        </>
      )}
    </div>
  );
}

export default Authors;
