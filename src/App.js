import "./App.css";
import AppHeader from "./components/common/Header";
import "antd/dist/antd.css";
import { Layout } from "antd";

import AppHero from "./components/Home/AppHero";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Resume from "./components/Home/Resume";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            <Route exact path="/Home" component={AppHero}></Route>
            <Route exact path="/About" component={About}></Route>
            <Route exact path="/Contact" component={Contact}></Route>
            <Route exact path="/Resume" component={Resume}></Route>
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
