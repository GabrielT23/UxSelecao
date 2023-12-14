import { Routes, Route, Navigate } from "react-router-dom";
export const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<p>home</p>}/>

            <Route path="*" element={<Navigate to="/home"/>}/>
        </Routes>
    );
}