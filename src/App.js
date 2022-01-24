// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/user/header/Header';
import Home from './pages/user/Home';
import ProductDetails from './pages/user/ProductDetails';
import Sell from './pages/user/Sell';
import Adds from './pages/user/Adds';
import Menu from './components/user/sidebar/Menu';
// import 'admin-lte/dist/css/adminlte.min.css';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header/>
      <Menu/>
      <div class="wrapper">
      <div className='container-fluid'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/> 
            <Route path="/product/:id" component={ProductDetails}/> 
            <Route path="/sell" component={Sell}/>
            <Route path="/adds" component={Adds}/>
          </Switch>
      </div>
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;
