import "./App.css";
import Footer from "./Components/layout/Footer";
import Header from "./Components/layout/Header";
import Carousel from "./Components/layout/Carousel"
import Films from "./Components/layout/Films"
import Cinema from "./Components/layout/Cinema"
import News from "./Components/layout/News"
import MobileApp from "./Components/layout/MobileApp"
function App() {
  return (
    <div className="App">
      <Header />
      <Carousel/>
      <Films/>
      <Cinema/>
      <News/>
      <MobileApp/>
      <Footer />
    </div>
  );
}

export default App;
