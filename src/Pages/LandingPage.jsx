import LandingFirstSection from "../Components/LandingFirstSection";
import CategoryButtons from "../Components/CategoryButtons";
import Zx9Container from "../Components/Zx9Container";
import Zx7Container from "../Components/Zx7Container";
import Yx1Container from "../Components/Yx1Container";
import ArticleSection from "../Components/ArticleSection";
import Footer from "../Components/Footer";
import Cart from "../Components/Cart";
const LandingPage = ({ openCart, funcOpen }) => {
  return (
    <>
      {openCart && <Cart openCart={openCart} funcOpen={funcOpen} />}
      <LandingFirstSection />
      <CategoryButtons style={"wrapper"} />
      <Zx9Container />
      <Zx7Container />
      <Yx1Container />
      <ArticleSection style={"container"} />
      <Footer />
    </>
  );
};

export default LandingPage;
