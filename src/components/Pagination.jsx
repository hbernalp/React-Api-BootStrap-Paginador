import React from "react";

const Pagination = ({ prev, next, onPrevious, onNext }) => {
  //Definimos las propiedades para el previous y para el next

  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav className="my-5">
      <ul className="pagination justify-content-center">
        {
          prev ? ( //Si tiene previous (por medio de un ternario)
            <li className="page-item">
              <button className="page-link" onClick={handlePrevious}>
                Previous
              </button>
            </li>
          ) : null //Si no muestra null
        }{
            next ? (
            <li className="page-item">
              <button className="page-link" onClick={handleNext}>
                Next
              </button>
            </li>
            ) : null
        }
      </ul>
    </nav>
  );
};

export default Pagination;
