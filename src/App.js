import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import Tracking from "./historyListen"
import ReactGA from "react-ga4"
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-KXCJGQ2'
}
TagManager.initialize(tagManagerArgs)

ReactGA.initialize("G-FHNLGM2NSJ");


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Tracking />
        <Rotas />
      </BrowserRouter>
    </div>
  );
}

export default App;
