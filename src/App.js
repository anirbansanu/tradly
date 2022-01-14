import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './components/user/header/Header';
import ProductDetails from './pages/user/ProductDetails';
// import Home from './pages/user/Home';


function App() {
  return (
    <>
    <Header/>
    {/* <Home/> */}
    <ProductDetails/>
    </>
  );
}

export default App;
