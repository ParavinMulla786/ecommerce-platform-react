import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  async function fetchData() {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();

      setProducts(data.products);
      setFilteredProducts(data.products);

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

  // FILTER + SEARCH
  useEffect(() => {

    let updatedProducts = products;

    // SEARCH FILTER
    if (search !== "") {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY FILTER
    if (selectedCategory !== "All") {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(updatedProducts);

  }, [search, selectedCategory, products]);

  // UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

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

          {/* SEARCH */}
          <div className="mb-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* CATEGORY FILTER */}
          <h5 className="mb-3">Categories</h5>

          <ul className="list-unstyled">

            {categories.map((category, index) => (

              <li className="mb-2" key={index}>

                <button
                  className={`btn w-100 ${
                    selectedCategory === category
                      ? "btn-light text-dark"
                      : "btn-outline-light"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>

              </li>

            ))}

          </ul>

        </div>

        {/* RIGHT PRODUCTS SECTION */}
        <div className="col-md-9 p-4">

          <h2 className="mb-4">All Products</h2>

          <div className="row g-4">

            {filteredProducts.length > 0 ? (

              filteredProducts.map((product) => (

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

                      {/* CATEGORY */}
                      <p className="text-muted">
                        {product.category}
                      </p>

                      {/* PRICE */}
                      <h6 className="mb-3 text-success">
                        ₹ {product.price}
                      </h6>

                      {/* BUTTON */}
                      <div className="d-flex gap-2 mt-auto">

  {/* VIEW DETAILS BUTTON */}
  <button
    className="btn btn-primary w-50"
    onClick={() => navigate(`/products/${product.id}`)}
  >
    View Details
  </button>

  {/* ADD TO CART BUTTON */}
  <button
    className="btn btn-outline-success w-50"
    onClick={() => alert(`${product.title} added to cart`)}
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

        </div>

      </div>

    </div>
  );
};

export default Dashboard;