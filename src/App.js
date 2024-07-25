import HomePage from "./contents/Rhomepage";
import Services from "./contents/Rservices";
import BackgroundImage from "./partials/backgroundimage";
import Callus from "./partials/callus";
import Navbar from "./partials/Rnavbar";


function App() {
  return (
    <div>

      <Callus/>
      <BackgroundImage/>
      <Navbar />
      <HomePage />
      <Services/>
      
     

    </div>

  );
}

export default App;
