import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import "./app.scss";

const App = () => {
  return (
    <Router>
      <Topbar></Topbar>
      <div className="container">
        <Sidebar></Sidebar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
