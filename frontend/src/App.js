import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter,Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Route path="/" component={Home} exact/>
        <Route path="/ProductDetail/:id" component={ProductDetail}/>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
