import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { PaymentUpsert } from "./components/PaymentUpsert";
import { PaymentList } from "./components/PaymentList";
import { Nav, Navbar } from "react-bootstrap";
import { AppNavBar } from "./common/AppNavBar.js";

function App() {
  return (
    <Router>
      <AppNavBar />

      <Switch>
        <Route path="/payment done">
          <PaymentUpsert />
        </Route>

        <Route path="/payment list">
          <PaymentList />
        </Route>

        <Route exact path="/">
          <PaymentUpsert />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
