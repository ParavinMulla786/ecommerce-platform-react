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

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error || !product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <div className="container py-5">

      <div className="row">

        {/* IMAGE */}
        <div className="col-md-5">
          <img
            src={product.thumbnail}
            className="img-fluid border rounded shadow-sm"
            alt={product.title}
          />
        </div>

        {/* DETAILS */}
        <div className="col-md-7">

          <h2 className="mb-2">{product.title}</h2>

          <p className="text-muted">{product.description}</p>

          <h4 className="text-success mb-3">₹ {product.price}</h4>

          <p><b>Category:</b> {product.category}</p>
          <p><b>Brand:</b> {product.brand}</p>
          <p><b>Stock:</b> {product.stock}</p>
          <p><b>Rating:</b> ⭐ {product.rating}</p>

          <hr />

          <p><b>Discount:</b> {product.discountPercentage}%</p>
          <p><b>Warranty:</b> {product.warrantyInformation}</p>
          <p><b>Shipping:</b> {product.shippingInformation}</p>
          <p><b>Availability:</b> {product.availabilityStatus}</p>

          <p><b>SKU:</b> {product.sku}</p>
          <p><b>Weight:</b> {product.weight} g</p>

          <hr />

          {/* TAGS */}
          <h5>Tags</h5>
          {product.tags?.map((tag, i) => (
            <span key={i} className="badge bg-primary me-2">
              {tag}
            </span>
          ))}

          <hr />

          {/* DIMENSIONS */}
          <h5>Dimensions</h5>
          <p>
            W: {product.dimensions?.width} |{" "}
            H: {product.dimensions?.height} |{" "}
            D: {product.dimensions?.depth}
          </p>

        </div>
      </div>

      {/* REVIEWS */}
      <div className="mt-5">

        <h3 className="mb-3">Customer Reviews</h3>

        {product.reviews?.map((rev, i) => (
          <div key={i} className="border p-3 mb-3 rounded shadow-sm">

            <h6 className="mb-1">{rev.reviewerName}</h6>

            <p className="mb-1">⭐ {rev.rating}</p>

            <p className="mb-1">{rev.comment}</p>

            <small className="text-muted">
              {new Date(rev.date).toDateString()}
            </small>

          </div>
        ))}

      </div>

    </div>
  );
};

export default ProductDetails;