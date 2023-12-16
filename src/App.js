import "./App.css";
import Chat from "./components/Chat/Chat";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Portfolio from "./components/ProjectList/ProjectList";

function App() {
  return (
    <>
      <NavBar/>
      <Hero/>
      <Chat/>
      <Portfolio/>
    </>
  );
}

export default App;
