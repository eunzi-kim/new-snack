import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import TodaySnack from "./pages/TodaySnack";
import ResultSnack from "./pages/ResultSnack";
import PickShop from "./pages/PickShop";
import SelectSnack from "./pages/SelectSnack";
import CreateStore from "./pages/CreateStore";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<TodaySnack />} />
        <Route path="/:id" element={<SelectSnack />} />
        <Route path="/result" element={<ResultSnack />} />
        <Route path="/shop" element={<PickShop />} />
        <Route path="/shop/create" element={<CreateStore />} />
        <Route path="/shop/update" element={<CreateStore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
