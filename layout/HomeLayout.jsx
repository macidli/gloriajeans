
import Swiper from '../src/components/Main/pages/Home/Swiper/Swiper'
import Header from '../src/components/Header/Header'
import Lent from '../src/components/Main/pages/Home/Lent'
import Products from '../src/components/Main/pages/Home/Products'
import LocationCards from '../src/components/Main/pages/Home/LocationCards'
import Footer from '../src/components/Footer/Footer'
import Offerings from '../src/components/Main/pages/Home/Offerings/Offerings'
import useTitle from '../src/components/hooks/useTitle'

const HomeLayout = () => {
   useTitle("Gloria Jean’s Coffees: Gourmet Flavors, Flavor Famous");
  return (
    <>
      <Header />
      <main>
          <Swiper/>
          <Lent />
          <Products />
          <LocationCards />
          <Offerings/>
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
