import { createBrowserRouter } from "react-router-dom";
import MyImagesComp from "../component/MyImagesComp";
import HooksComp from "../ReactHooks/HooksComp";
import UseStateComp from "../ReactHooks/UseStateComp";
import UseEffectComp from "../ReactHooks/UseEffectComp";
import Page404Notfound from "../layout/Page404Notfound";
import DashboardComp from "../layout/DashboardComp";
import AddProductComp from "../CRUD/AddProductComp";
import  ProductDetailComp  from "../CRUD/ProductDetailComp";
import UpdateProductComp from "../CRUD/UpdateProductComp";
import DataListComp from "../layout/DataListComp";
import FormValComp from "../component/FormValComp";
import NAvComp from "../layout/NAvComp";
const router = createBrowserRouter([
    {path:"dashboard",element:<DashboardComp/>,children:[
      {path:"myimages",element:<MyImagesComp/>},
      {path:"datalist",element:<DataListComp/>},
      {path:"addproduct",element:<AddProductComp/>},
      {path:"update",element:<UpdateProductComp/>},
      {path:"productdetail",element:<ProductDetailComp/>},
      {path:"formval",element:<FormValComp/>},
    ]},
    //2.default routing
    {path:"", element:<MyImagesComp/>},
    //1.naming routing
    {path:"myimages",element:<MyImagesComp/>},
    
    //3.Parameterized routing
    {path:"myimages",element:<MyImagesComp/>},
    //4.Child routing
    {path:"hooks",element:<HooksComp/>,children:[
      {path:"usestate",element:<UseStateComp/>},
       {path:"useeffect",element:<UseEffectComp/>} 
    ]},
    //5.wildcard routind
     {path:"*",element:<Page404Notfound/>}
]);

export default router;