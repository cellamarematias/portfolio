import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import Projects from './components/projects/projects';
import ContactUs from './components/contact/contact';

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Header />
        <Body />
        <Projects />
        <ContactUs />
      </div>
    </div>

  );
}

export default App;
