import './App.css';
import { Store } from './pages/store/Store';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Store/>
      <Footer/>
    </div>
  );
}

export default App;
