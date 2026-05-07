import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);

    } catch (err) {
      setError(true);
      console.log(err);

    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <h2 className="text-center mt-5">Loading...</h2>;
  }

  if (error) {
    return <h2 className="text-center mt-5">Something went wrong</h2>;
  }

  return (
    <div className="container-fluid">

      <div className="row">

        {/* LEFT SIDEBAR */}
        <div className="col-md-3 bg-secondary text-white min-vh-100 p-4">

          <h3 className="mb-4">My Store</h3>

          <ul className="list-unstyled">

            <li className="mb-3">
              <button className="btn btn-outline-light w-100">
                Dashboard
              </button>
            </li>

            <li className="mb-3">
              <button className="btn btn-outline-light w-100">
                Products
              </button>
            </li>

            <li className="mb-3">
              <button className="btn btn-outline-light w-100">
                Categories
              </button>
            </li>

            <li className="mb-3">
              <button className="btn btn-outline-light w-100">
                Orders
              </button>
            </li>

            <li className="mb-3">
              <button className="btn btn-outline-light w-100">
                Settings
              </button>
            </li>

          </ul>

        </div>

        {/* RIGHT PRODUCTS SECTION */}
        <div className="col-md-9 p-4">

          <h2 className="mb-4">All Products</h2>

          <div className="row g-4">

            {products.map((product) => (

              <div className="col-md-4" key={product.id}>

                <div className="card h-100 shadow-sm">

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

                    {/* PRICE */}
                    <h6 className="mb-3 text-success">
                      ₹ {product.price}
                    </h6>

                    {/* BUTTON */}
                    <button
                      className="btn btn-primary mt-auto"
                      onClick={() => navigate(`/products/${product.id}`)}
                    >
                      View Details
                    </button>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;