import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./page/home/home";
import { Shop } from "./page/shop/shop";
import { MeetUs } from "./page/meetUs/meetus";
import { Recipes } from "./page/recipes/recipes";
import { Contact } from "./page/contact/contact";
import { Navigation } from "./common/navigation";

function App() {
  return (
    <>
      <div className="font-roboto bg-[#F2EFDD] ">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/meetUs" element={<MeetUs />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
