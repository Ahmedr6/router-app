import {Routes, Route, Link } from "react-router-dom";


/* Home component */
const Home = () => (
 <div>
   <h2>Home</h2>
 </div>
);
 
/* Category component */
const Category = () => (
 <div>
   <h2>Category</h2>
 </div>
);

/* Products component */
const Products = () => (
 <div>
   <h2>Products</h2>
 </div>
);
function App() {
  return (
    <>
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            {/*  Link components are used for linking to other views */}
            <li>
              {" "}
              <Link to="/">Homes</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        {/*  Route components are rendered if the path prop matches the current URL  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
 };

export default App;
