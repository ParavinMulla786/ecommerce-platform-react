import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Card from "./Card";

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
    <>
    <Navbar/>
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
 <Card
      filteredProducts={filteredProducts}
      navigate={navigate}
    />
          </div>

        </div>

      </div>

    </div>
    </>
  );
};

export default Dashboard;