import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layo from './components/layout/Layo';
import './App.css'
import Home from "./components/pages/Home"
import Favs from "./components/pages/Favs"
import Contact from "./components/pages/Contact"
import Detail from './components/pages/Detail';
import ProductContext from "./components/utils/context/ProductContext";
import GlobalThemesProvider from "./components/utils/context/GlobalThemesProvider";
function App() {

return (
  <BrowserRouter>
  <GlobalThemesProvider>
  <ProductContext>
  <Routes>
      
     
      <Route element={<Layo/>} >
              
              <Route path='/' element={<Home/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path= "/favs" element={<Favs/>}/>
              <Route path='/detalle/:id' element={<Detail/>}/>
        

        </Route>


        
        
    </Routes>

  </ProductContext>

  </GlobalThemesProvider>
 
    

  </BrowserRouter>


)
  
}

export default App
