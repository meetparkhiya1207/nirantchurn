import logo from './logo.svg';
import './global.css';
import Header from './components/Header';
import { Banner } from './components/Banner';
import AboutSection from './components/About';
import BestSellers from './components/Shop';
function App() {
  return (
    <>
    <Header/>
    <Banner/>
    {/* <AboutSection/> */}
    <BestSellers/>
    </>
  );
}

export default App;
