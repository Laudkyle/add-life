import Pages from "./pages/Pages";
import NavBar from "./components/NavBar";
import Chatbot from "./components/Chatbot";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
        {/* <Chatbot /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
