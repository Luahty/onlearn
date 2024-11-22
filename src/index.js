import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ReactDOM from 'react-dom/client';

//import component
import LoginIndex from './component/views/login.view';
import SignUpIndex from './component/views/signup.view';

// style

import "./component/assets/css/now-ui-kit.css";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter >
    <Routes> 
      <Route path="/" element={<LoginIndex />} />
      <Route path="/login" element={<LoginIndex />} />
      <Route path="/signup" element={<SignUpIndex />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </BrowserRouter>
);
