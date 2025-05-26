import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Pagination = ({ totalProducts, productsPerPage, currentPage }) => {
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const location = useLocation();
  const navigate = useNavigate();

  const handlePrevClick = () => {
    if (currentPage > 1) {
      navigate(`/page/${currentPage - 1}`);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      navigate(`/page/${currentPage + 1}`);
    }
  };

  return (
    <div>
      <div className="product-box__selection">
        <button
          onClick={handlePrevClick}
          className="product-box__arrow"
          disabled={currentPage === 1}
        >
          <svg
            width="8.000000"
            height="14.000000"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M8 2L3 7L8 12L7 14L0 7L7 0L8 2Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>

        <div className="product-box__numbers">
          {Array.from({ length: totalPages }, (_, index) => (
            <Link
              className={`product-box__number ${
                parseInt(location.pathname.split("/")[2]) === index + 1
                  ? "active"
                  : ""
              }`}
              key={index}
              to={`/page/${index + 1}`}
            >
              {index + 1}
            </Link>
          ))}
        </div>

        <button
          onClick={handleNextClick}
          className="product-box__arrow"
          disabled={currentPage === totalPages}
        >
          <svg
            width="8.000000"
            height="14.000000"
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M0 12L5 7L0 2L1 0L8 7L1 14L0 12Z"
              fill="#000000"
              fillOpacity="1.000000"
              fillRule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;

