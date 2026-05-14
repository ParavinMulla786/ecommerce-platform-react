import React, { useEffect, useState } from "react";
import Card from "./Card";

const Dashboard = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FETCH PRODUCTS
  const fetchData = async () => {

    try {

      const res = await fetch(
        "https://dummyjson.com/products"
      );

      const data = await res.json();

      setProducts(data.products);
      setFilteredProducts(data.products);

    } catch (err) {

      setError(true);
      console.log(err);

    } finally {

      setLoading(false);

    }
  };

  // API CALL
  useEffect(() => {
    fetchData();
  }, []);

  // SEARCH + FILTER
  useEffect(() => {

    let updatedProducts = products;

    // SEARCH
    if (search !== "") {

      updatedProducts = updatedProducts.filter(
        (product) =>
          product.title
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    // CATEGORY FILTER
    if (selectedCategory !== "All") {

      updatedProducts = updatedProducts.filter(
        (product) =>
          product.category === selectedCategory
      );
    }

    setFilteredProducts(updatedProducts);

  }, [search, selectedCategory, products]);

  // UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(
      products.map(
        (product) => product.category
      )
    ),
  ];

  // LOADING
  if (loading) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <h2 className="text-center mt-5 text-danger">
        Unable to load products
      </h2>
    );
  }

  return (

    <div className="container-fluid">

      <div className="row">

        {/* LEFT SIDEBAR */}
        <div className="col-md-3 bg-dark text-white min-vh-100 p-4">

          <h3 className="mb-4">My Store</h3>

          {/* SEARCH */}
          <div className="mb-4">

            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>

          {/* CATEGORY FILTER */}
          <h5 className="mb-3">Categories</h5>

          <ul className="list-unstyled">

            {categories.map((category, index) => (

              <li key={index} className="mb-2">

                <button
                  className={`btn w-100 ${
                    selectedCategory === category
                      ? "btn-light text-dark"
                      : "btn-outline-light"
                  }`}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>

              </li>

            ))}

          </ul>

        </div>

        {/* RIGHT PRODUCTS SECTION */}
        <div className="col-md-9 p-4">

          <h2 className="mb-4">
            All Products
          </h2>

          <div className="row g-4">

            <Card
              filteredProducts={filteredProducts}
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;