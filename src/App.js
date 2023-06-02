import "./index.css";
import Nav from "./components/nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import Bookinfo from "./pages/Bookinfo";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home}  />
        <Route exact path="/books" render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <Bookinfo books={books} />} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
