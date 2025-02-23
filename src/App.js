import Routers from "./Router/Routers";
import Topbar from "./layout/Topbar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import TagManager from "react-gtm-module";
import "./App.scss";

const tagManagerArgs = {
  gtmId: "G-BDKCCZY1BX",
};

TagManager.initialize(tagManagerArgs);

function App() {
  return (
    <>
      <Topbar />
      <Header />
      <Routers />
      <Footer />
    </>
  );
}

export default App;
