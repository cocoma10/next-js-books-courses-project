import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
          <div className="flex justify-center mt-12">
            {pages.map((page, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(page)}
                className={`border border-black px-3 py-1 font-medium mr-3  ${page === currentPage ? "active bg-[#F0D800]" : ""}`}
              >
                {page}
              </button>
            ))}
          </div>
       
    </div>
  );
};

export default Pagination;
