import "./App.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import NewestActivity from "./components/NewestActivity";
import PolicyIssue from "./components/PolicyIssue";
import Donate from "./components/Donate";
import ServiceEmail from "./components/ServiceEmail";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <NewestActivity />
      <PolicyIssue />
      <Donate />
      <ServiceEmail />
      <Footer />
    </div>
  );
}

export default App;
