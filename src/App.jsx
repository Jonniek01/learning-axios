import './App.css';
import Categories from './components/Categories';
import Navbar from './components/navbar';
import Products from './components/products';




function App() {
  return (
    <div className="App">
      <Navbar/>
      <h2>Products</h2>
      <Categories/>
      <Products/>
    </div>
  );
}

export default App;
