// import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import ProductList from './components/ProductList';
// import { Router,Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Admin from './components/Admin';
import { BrowserRouter ,Routes, Route, Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    
   
    
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route exact path='/' element={<Home/>}> </Route>
        <Route exact path='/add' element={<Add/>}> </Route>
        <Route exact path='/topic' element={<Admin/>}> </Route>
        <Route exact path='/xoa' element={<Admin/>}> </Route>
        <Route exact path='/sua' element={<Admin/>}> </Route>

      </Routes>
        {/* <Router> */}
        {/* <Add></Add>
        <ProductList></ProductList>  <Route path='/' element={<Add></Add>}></Route> */}
        
        {/* </Router> */}
       

      
    </div>
    </BrowserRouter>
  );
}

export default App; 

																		
// import React, {Component} from 'react';																	
// import './App.css';																	
// import AllProduct from './components/AllProduct.js';																	
// import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';																	
// import routes from './routes.js';																	
// import { ToastContainer, toast } from 'react-toastify';																	
// import 'react-toastify/dist/ReactToastify.css';	
// import ProductList from './components/ProductList';																
// class App extends Component {																	
//   render(){																	
//   return (			
    														
//     <Router>																	
//     <ToastContainer />	
//     <App></App>			    
//     <ProductList></ProductList>													
//       <Switch>  																	
//         {this.showContentMenu(routes)} 																	
//       </Switch>    																	
//     </Router>  																	
//     );																	
                                  
//   }																	
//   showContentMenu = (routes) =>{																	
//     var result = null;																	
//     if (routes.length > 0) {																	
//       result = routes.map((route, index) =>{																	
//         return (																	
//             <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />																	
//           );																	
//       });																	
//     }																	
//     return result;																	
//   }																	
                                  
// }																	
                                  
// export default App;																	
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
