import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";;
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import UseEffectComp from "../ReactHooks/UseEffectComp";
import Page404Notfound from "../layout/Page404Notfound";
import DashboardComp from "../layout/DashboardComp";
import VirtualDOMComp from "../component/VirtualDOMComp";
const router = createBrowserRouter([
    {path:"dashboard",element:<DashboardComp/>,children:[
      {path:"myimages",element:<MyImagesComp/>},
      
    ]},
    //2.default routing
    {path:"", element:<MyImagesComp/>},
    //1.naming routing
    {path:"myimages",element:<MyImagesComp/>},
    {path:"virtualDOM",element:<VirtualDOMComp/>},
    
    //3.Parameterized routing
    {path:"condren",element:<MyImagesComp/>},
    //4.Child routing
    {path:"hooks",element:<HooksComp/>,children:[
      {path:"usestate",element:<UseStateComp/>},
       {path:"useeffect",element:<UseEffectComp/>} 
    ]},
    //5.wildcard routind
     {path:"*",element:<Page404Notfound/>}
]);

export default router;