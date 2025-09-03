import useTitle from "../../../hooks/useTitle";
import MainMenu from "./MainMenu";
import TopImage from "./TopImage";


function Menu() {
  useTitle("Menu")
  return (
    <>
      <main>
        <TopImage />
        <MainMenu />
      </main>
    </>
  );
}

export default Menu;
