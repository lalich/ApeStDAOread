import { Routes, Route, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements} from "react-router-dom";
import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/JoinApeSt"
import Jungle from "./pages/Jungle"
import JoinApeSt from "./pages/JoinApeSt";
import BLogin from "./pages/Login";

const apeRouter = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path ='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='/joinapest' element={<JoinApeSt />} />
        <Route path='/blogin' element={<BLogin />} />
        <Route path="/jungle" element={<Jungle />} /> 
    </Route>
    </>
    ))

export default apeRouter