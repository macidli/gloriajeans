import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";
import useTitle from "../src/components/hooks/useTitle";
import MainMenu from "../src/components/Main/pages/Menu/MainMenu";
import TopImage from "../src/components/Main/pages/Menu/TopImage";

function MenuLayout() {
  useTitle("Menu")
  return (
    <>
      <Header />
      <main>
        <TopImage />
        <MainMenu />
      </main>
      <Footer />
    </>
  );
}

export default MenuLayout;
