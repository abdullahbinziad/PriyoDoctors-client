import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router.jsx";
import AuthProvider from "./AuthProvider/AuthProvider.jsx";
import swal from 'sweetalert2/dist/sweetalert2.all.min.js'

import {
  QueryClient,
  QueryClientProvider,

} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  
    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </AuthProvider>
  
  </React.StrictMode>
);
