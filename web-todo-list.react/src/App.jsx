import "./App.css";

import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ShoppingContext } from "./context/Context";
import { ToDoContext } from "./context/Context";
import { CheckedContext } from "./context/Context";

function App() {
  const [toDo, setToDo] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [checked, setChecked] = useState([]);

  return (
    <>
      <CheckedContext.Provider value={{ checked, setChecked }}>
        <ShoppingContext.Provider value={{ shopping, setShopping }}>
          <ToDoContext.Provider value={{ toDo, setToDo }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shopping" element={<Shopping />} />
              </Routes>
            </BrowserRouter>
          </ToDoContext.Provider>
        </ShoppingContext.Provider>
      </CheckedContext.Provider>
    </>
  );
}

export default App;
