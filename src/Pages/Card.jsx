import React, { useContext } from "react";
import { ThemeContext } from "../Themeprovider";

const Card = ({ filteredProducts, navigate }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="row g-4">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            
            {/* CARD */}
            <div
              className={`card h-100 shadow-sm ${
                theme === "dark"
                  ? "bg-dark text-light"
                  : "bg-light text-dark"
              }`}
            >
              
              {/* IMAGE */}
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body d-flex flex-column">

                {/* TITLE */}
                <h5 className="card-title">
                  {product.title}
                </h5>

                {/* DESCRIPTION */}
                <p className="card-text">
                  {product.description.substring(0, 60)}...
                </p>

                {/* CATEGORY */}
                <p
                  className={
                    theme === "dark"
                      ? "text-light"
                      : "text-muted"
                  }
                >
                  {product.category}
                </p>

                {/* PRICE */}
                <h6 className="mb-3 text-success">
                  ₹ {product.price}
                </h6>

                {/* BUTTONS */}
                <div className="d-flex gap-2 mt-auto">

                  {/* VIEW DETAILS */}
                  <button
                    className="btn btn-primary w-50"
                    onClick={() =>
                      navigate(`/products/${product.id}`)
                    }
                  >
                    View Details
                  </button>

                  {/* ADD TO CART */}
                  <button
                    className="btn btn-outline-success w-50"
                    onClick={() =>
                      alert(`${product.title} added to cart`)
                    }
                  >
                    Add To Cart
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <h4>No Products Found</h4>
      )}
    </div>
  );
};

export default Card;