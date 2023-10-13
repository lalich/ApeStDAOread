import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import App from "./App"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/JoinApeSt"



const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path ='/' element={<App/>}>
        <Route path="" element={<Home/>}/>
    </Route>

    
    
    
    </>
))

export default router