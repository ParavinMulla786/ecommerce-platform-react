import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {

    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });

  }, [id]);

  // LOADING
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2 className="text-primary">Loading Product...</h2>
      </div>
    );
  }

  // ERROR
  if (error || !product) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <h2 className="text-danger">Product Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card border-0 shadow-lg rounded-4 overflow-hidden">

        <div className="row g-0">

          {/* LEFT IMAGE SECTION */}
          <div className="col-md-5 bg-light d-flex align-items-center justify-content-center p-4">

            <img
              src={product.thumbnail}
              className="img-fluid rounded-4"
              alt={product.title}
              style={{
                maxHeight: "400px",
                objectFit: "contain"
              }}
            />

          </div>

          {/* RIGHT DETAILS SECTION */}
          <div className="col-md-7">

            <div className="p-4 p-md-5">

              {/* CATEGORY */}
              <span className="badge bg-primary mb-3 px-3 py-2">
                {product.category}
              </span>

              {/* TITLE */}
              <h1 className="fw-bold mb-3">
                {product.title}
              </h1>

              {/* DESCRIPTION */}
              <p className="text-muted fs-5">
                {product.description}
              </p>

              {/* PRICE */}
              <div className="d-flex align-items-center gap-3 my-4">

                <h2 className="text-success fw-bold mb-0">
                  ₹ {product.price}
                </h2>

                <span className="badge bg-danger fs-6">
                  {product.discountPercentage}% OFF
                </span>

              </div>

              {/* PRODUCT INFO */}
              <div className="row mt-4">

                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">Brand</h6>
                    <p className="mb-0">{product.brand}</p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">Stock</h6>
                    <p className="mb-0">{product.stock} Available</p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">Rating</h6>
                    <p className="mb-0">⭐ {product.rating}</p>
                  </div>
                </div>

                <div className="col-md-6 mb-3">
                  <div className="border rounded-3 p-3 h-100">
                    <h6 className="fw-bold">Weight</h6>
                    <p className="mb-0">{product.weight} g</p>
                  </div>
                </div>

              </div>

              {/* EXTRA INFO */}
              <div className="mt-4">

                <h4 className="fw-bold mb-3">
                  Product Details
                </h4>

                <p>
                  <b>Warranty:</b>{" "}
                  {product.warrantyInformation}
                </p>

                <p>
                  <b>Shipping:</b>{" "}
                  {product.shippingInformation}
                </p>

                <p>
                  <b>Availability:</b>{" "}
                  {product.availabilityStatus}
                </p>

                <p>
                  <b>SKU:</b>{" "}
                  {product.sku}
                </p>

                <p>
                  <b>Dimensions:</b>{" "}
                  W: {product.dimensions?.width} |{" "}
                  H: {product.dimensions?.height} |{" "}
                  D: {product.dimensions?.depth}
                </p>

              </div>

              {/* TAGS */}
              <div className="mt-4">

                <h5 className="fw-bold mb-3">
                  Tags
                </h5>

                {product.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="badge bg-dark me-2 mb-2 px-3 py-2"
                  >
                    #{tag}
                  </span>
                ))}

              </div>

              {/* BUTTONS */}
              <div className="mt-5 d-flex gap-3">

                <button className="btn btn-primary px-4 py-2">
                  Add To Cart
                </button>

                <button className="btn btn-outline-dark px-4 py-2">
                  Buy Now
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* REVIEWS SECTION */}
      <div className="mt-5">

        <h2 className="fw-bold mb-4">
          Customer Reviews
        </h2>

        <div className="row">

          {product.reviews?.map((rev, i) => (

            <div className="col-md-6 mb-4" key={i}>

              <div className="card border-0 shadow-sm rounded-4 h-100">

                <div className="card-body p-4">

                  <div className="d-flex justify-content-between align-items-center mb-2">

                    <h5 className="fw-bold mb-0">
                      {rev.reviewerName}
                    </h5>

                    <span className="badge bg-warning text-dark">
                      ⭐ {rev.rating}
                    </span>

                  </div>

                  <p className="text-muted">
                    {rev.comment}
                  </p>

                  <small className="text-secondary">
                    {new Date(rev.date).toDateString()}
                  </small>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;