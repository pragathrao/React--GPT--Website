import Blog from './Components/Blog';
import Card from './Components/Card';
import Companies from './Components/Companies';
import Footer from './Components/Footer';
import Girl from './Components/Girl';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Section3 from './Components/Section3';
import Strip from './Components/Strip';

function App() {
  return (
    <div className="App">
      <div className='bg'>
        <Header />
        <Hero />
      </div>
      <Companies />
      <Card />
      <Section3 />
      <Girl />
      <Strip />
      <Blog />
      <Footer/>
    </div>
  );
}

export default App;
