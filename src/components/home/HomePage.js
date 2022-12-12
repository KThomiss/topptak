import Jumbotron from "./Jumbotron";
import Introduction from "./Introduction";
import Services from "./Services";
import ContactForm from "./ContactForm";
import Cards from "./Cards";
import Comments from "./Comments";
import Galleri from "./Galleri";
import Footer from "../layout/Footer";

function homePage() {
  return (
    <>
      <Jumbotron />
      <Introduction></Introduction>
      <Services></Services>
      <ContactForm></ContactForm>
      <Cards></Cards>
      <Comments></Comments>
      <Galleri></Galleri>
      <Footer></Footer>
    </>
  );
}

export default homePage;
