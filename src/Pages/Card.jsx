import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../theme/ThemeProvider";
import { CartContext } from "../Cart/CartProvider";

const Card = ({ filteredProducts = [] }) => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { dispatch } = useContext(CartContext);

  const handleAddToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

    // after adding → go to cart page
    navigate("/cart");
  };

  return (
    <>
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div className="col-md-4" key={product.id}>
            
            <div
              className={`card h-100 shadow-sm ${
                theme === "dark"
                  ? "bg-dark text-light"
                  : "bg-light text-dark"
              }`}
            >

              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body d-flex flex-column">

                <h5>{product.title}</h5>

                <p>
                  {product.description?.substring(0, 60)}...
                </p>

                <h6 className="text-success">
                  ₹ {product.price}
                </h6>

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
                      handleAddToCart(product)
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
        <h4 className="text-center">
          No Products Found
        </h4>
      )}
    </>
  );
};

export default Card;