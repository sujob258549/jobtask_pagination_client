import { createBrowserRouter } from "react-router-dom";
import Main from "./main";
import Home from "./Home";

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element: <Home></Home>
          }
        ]
    }
])


export default router