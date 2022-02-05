import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Menu from "./components/menu/Menu";
import Settings from "./components/settings/Settings";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="row">
        <div className="col-3">
          <Home />
        </div>
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-3">
          <Menu />
        </div>
        <div className="col-3">
          <Settings />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
