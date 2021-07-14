import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import EditProduct from "./pages/editProduct/EditProduct";
import EditUser from "./pages/editUser/EditUser";
import ListUser from "./pages/listUser/ListUser";
import ListProduct from "./pages/listProduct/ListProduct";
import "./app.scss";
import AddUser from "./pages/addUser/AddUser";
import AddProduct from "./pages/addProduct/AddProduct";

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
          <Route path="/editProduct/:id">
            <EditProduct></EditProduct>
          </Route>
          <Route path="/editUser/:id">
            <EditUser></EditUser>
          </Route>
          <Route path="/listUser">
            <ListUser></ListUser>
          </Route>
          <Route path="/listProduct">
            <ListProduct></ListProduct>
          </Route>
          <Route path="/addUser">
            <AddUser></AddUser>
          </Route>
          <Route path="/addProduct">
            <AddProduct></AddProduct>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
