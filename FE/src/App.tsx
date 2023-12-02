import { useState } from "react";
import pix from "./Assets/775118.jpg";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router/Router";

function App() {
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
