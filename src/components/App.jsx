import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home";
import { Gallery } from "../pages/Gallery";
import { ProductDetails } from "../pages/ProductDetails";
import { Products } from "../pages/Products";
import { Mission } from "./Mission";
import { Team } from "./Team";
import { Reviews } from "./Reviews";
import { SharedLayout } from "./SharedLayout";

import PostsPage from "../pages/PostsPage/PostsPage";
import SinglePostPage from "../pages/SinglePostPage/SinglePostPage";

 const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
      </Route>
    </Routes>
  );
};


export default App;