import './App.css';
import Nav from './components/nav/nav';
import Main from './components/main/main';
import Projects from './components/projects/projects';
import Stack from './components/stack/stack';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Main/>
      <Projects/>
      <Stack/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
