import NavBar from "./components/navbar";
import Home from "./pages/home";
import Connect from "./pages/connect-wallet";
import Place from "./pages/place-to-stay";
import {Route, Routes} from "react-router-dom"
import Footer from "./components/footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/place-to-stay" element={<Place />} />
          <Route path="/connect-wallet" element={<Connect />} />
        </Routes>
      </div>
      <Footer />
    </>

  ) 
   
}

export default App;
