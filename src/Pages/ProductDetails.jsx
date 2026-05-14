import React, {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import { ThemeContext } from "../theme/ThemeProvider";

import "./ProductDetails.css";

const ProductDetails = () => {

  const [product, setProduct] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  const { theme } =
    useContext(ThemeContext);

  // GET PRODUCT ID
  const { id } = useParams();

  // FETCH DATA
  async function fetchData() {

    try {

      const res = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await res.json();

      // FIND PRODUCT
      const foundProduct =
        data.products.find(
          (item) =>
            item.id === Number(id)
        );

      setProduct(foundProduct);

    } catch (err) {

      setError(true);
      console.log(err);

    } finally {

      setLoading(false);

    }
  }

  // API CALL
  useEffect(() => {
    fetchData();
  }, []);

  // ADD TO CART
  function handleAddToCart() {

    alert(
      `${product.title} added to cart`
    );
  }

  // LOADING
  if (loading) {
    return (
      <h1 className="text-center mt-5">
        Loading...
      </h1>
    );
  }

  // ERROR
  if (error || !product) {
    return (
      <h1 className="text-center mt-5 text-danger">
        Product Not Found
      </h1>
    );
  }

  return (

    <div
      className={`product-page ${
        theme === "dark"
          ? "dark-theme"
          : ""
      }`}
    >

      {/* BACK BUTTON */}
      <Link
        className="back-btn"
        to="/"
      >
        ← Back
      </Link>

      <div className="product-container">

        {/* LEFT IMAGE SECTION */}
        <div className="image-section">

          <img
            src={product.thumbnail}
            alt={product.title}
            className="main-image"
          />

          {/* IMAGE GALLERY */}
          <div className="image-gallery">

            {product?.images?.map(
              (img, index) => (

                <img
                  key={index}
                  src={img}
                  alt="product"
                  className="small-image"
                />

              )
            )}

          </div>

        </div>

        {/* RIGHT DETAILS */}
        <div className="details-section">

          <span className="category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <h2 className="price">
            ${product.price}
          </h2>

          <p className="description">
            {product.description}
          </p>

          {/* PRODUCT INFO */}
          <div className="info-grid">

            <p>
              <strong>Brand:</strong>
              {" "}
              {product.brand}
            </p>

            <p>
              <strong>Rating:</strong>
              {" "}
              ⭐ {product.rating}
            </p>

            <p>
              <strong>Stock:</strong>
              {" "}
              {product.stock}
            </p>

            <p>
              <strong>Discount:</strong>
              {" "}
              {product.discountPercentage}%
            </p>

          </div>

          {/* TAGS */}
          <div className="tags">

            {product?.tags?.map(
              (tag, index) => (

                <span
                  key={index}
                  className="tag"
                >
                  {tag}
                </span>

              )
            )}

          </div>

          {/* BUTTONS */}
          <div className="button-group">

            <button
              className="cart-btn"
              onClick={handleAddToCart}
            >
              Add To Cart
            </button>

            <button className="buy-btn">
              Buy Now
            </button>

          </div>

        </div>

      </div>

      {/* REVIEWS */}
      <div className="reviews-section">

        <h2>Customer Reviews</h2>

        {product?.reviews?.map(
          (review, index) => (

            <div
              key={index}
              className="review-card"
            >

              <h4>
                {review.reviewerName}
              </h4>

              <p>
                ⭐ {review.rating}
              </p>

              <p>
                {review.comment}
              </p>

              <small>
                {new Date(
                  review.date
                ).toLocaleDateString()}
              </small>

            </div>

          )
        )}

      </div>

    </div>
  );
};

export default ProductDetails;