import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import CarouselContainer from './Components/CarouselContainer';
import Contacts from './Components/Contacts';

function App() {
  return (
    <div className="App">
        <Home />
        <CarouselContainer />
        <Contacts />
    </div>
  );
}

export default App;
