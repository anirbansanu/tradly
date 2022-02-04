// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/user/Home';
import ProductDetails from './pages/user/ProductDetails';
import Sell from './pages/user/Sell';
import Queries from './pages/user/Queries';
import MyAdds from './pages/user/MyAdds';
import Dashboard from './pages/admin/Dashboard';
import Login from './pages/Login';
import Reg from './pages/Reg';
import SignIn from './components/SignIn';
// import 'admin-lte/dist/css/adminlte.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <ToastContainer/>
      <div className="wrapper">
      <div className='container-fluid'>
          <Switch>
            <Route exact path="/tradly" component={Home}/>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/> 
            <Route exact path="/login" component={SignIn}/>
            <Route exact path="/reg" component={Reg}/>
            <Route path="/product/:id" component={ProductDetails}/> 
            <Route path="/sell" component={Sell}/>
            <Route path="/myadds" component={MyAdds}/>
            <Route path="/queries" component={Queries}/>
            <Route exact path="/admin" component={Dashboard}/>
            <Route path="/admin/:id" component={ProductDetails}/> 
          </Switch>
      </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
