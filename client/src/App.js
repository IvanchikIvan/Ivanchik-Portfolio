import "./App.css";
import Chat from "./components/Chat/Chat";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/ProjectList/ProjectList";
import SkillsBlock from "./components/skills/skills";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Chat/>
      <SkillsBlock/>
      <Portfolio/>
      <Footer/>
    </>
  );
}

export default App;
