import React from "react";
import ReactDom from 'react-dom/client'
import { Form } from "./corretsisi_front_form.jsx";
import './corretsisi_front_form.css'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h1>CorrETSISI</h1>
    <Form />
  </React.StrictMode>
)