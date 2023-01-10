import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Stock from "./pages/Stock";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
            <Route path="" element={<Home/>} />
            <Route path='/stocks' element={<Dashboard/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/stocks/:id' element={<Stock/>}/>
        </Route>
    )
)

export default router