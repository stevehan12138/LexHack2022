import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Schools from './views/Schools';
import Login from './views/Login';
import School from './views/School';
import About from './views/About';
import Home from './views/Home';
import MySchools from './views/MySchools';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Averia Serif Libre',
      'cursive',
    ].join(','),
  },});

const root = ReactDOM.createRoot(document.getElementById('root'));




root.render(
  <ThemeProvider theme={theme}>
  <Router>
    <Routes>
      <Route path="/schools" element={<Schools />} />
      <Route path="/login" element={<Login />} /> 
      <Route path="/schools/:schoolName" element={<School />} />
      <Route path="/about" element={<About />} />
      <Route path="/" element={localStorage.getItem("username") === null ? <Navigate to="/login" /> : <Home />} />
      <Route path='/myschools' element={<MySchools />} />
    </Routes> 
  </Router>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
