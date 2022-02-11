import './styles/App.css';
import Header from './components/Header/Index';
import Section from './components/Section/Index';
import Footer from './components/Footer/Index';


const Home: React.FC = () => {

  return (
    <div>
      <Header />
      <Section />
      <Footer/>
    </div>
  );
}

export default Home;