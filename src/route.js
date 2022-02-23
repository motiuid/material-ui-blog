import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

export const routes = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
    </Routes>
)

export default routes;