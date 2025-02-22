import Gallery from "./contents/Rgallary";
import AboutUs from "./contents/Rabout";
import CallUsNow from "./contents/Rcallus";
import ContactUs from "./contents/Rcontact";
import HomePage from "./contents/Rhomepage";
import Menu from "./contents/Rmenu";
import Services from "./contents/Rservices";
import SpecialDish from "./contents/Rspecialdishes";
import BackgroundImage from "./partials/backgroundimage";
import Callus from "./partials/callus";
import Navbar from "./partials/Rnavbar";
import Footer from "./contents/footer";
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div>

      <Callus/>
      <BackgroundImage/>
      <Navbar />
      <HomePage />
      <Services />
      <Menu />
      <SpecialDish/>
      <Gallery />
      <AboutUs />
      <ContactUs />
      <Footer/>
      
     

    </div>

  );
}

export default App;
