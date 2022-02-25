import './App.css';
import About from './components/About';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Presentation from './components/Presentation';
import Footer from './components/Footer';
import image1 from './images/download.png';
import image2 from './images/about.png';
import arrow1 from './images/arrow1.svg';
import arrow2 from './images/arrow2.svg';

function App() {
  return (
    <>
      <Hero />
      <img className='arrow-img' src={arrow1} alt="arrow1" />
      <About image={image1} title="With great power comes great responsibility" button="Download Now" />
      <Presentation />
      <img className='arrow-img' src={arrow2} alt="arrow1" />
      <Feature />
      <About image={image2} title="Zero balance account with no hidden fees" button="Get Started" />
      <Footer />
    </>
  )
}

export default App;
