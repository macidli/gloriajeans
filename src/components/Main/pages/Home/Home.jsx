import useTitle from "../../../hooks/useTitle";
import Lent from "./Lent";
import LocationCards from "./LocationCards";
import Offerings from "./Offerings/Offerings";
import Products from "./Products";
import Swiper from "./Swiper/Swiper"

const Home = () => {
   useTitle("Gloria Jean’s Coffees: Gourmet Flavors, Flavor Famous");
  return (
    <>

      <main>
          <Swiper/>
          <Lent />
          <Products />
          <LocationCards />
          <Offerings/>
      </main>

    </>
  );
};

export default Home;
