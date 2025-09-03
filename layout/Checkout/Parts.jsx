import Contact from "./Contact";
import BasketInfo from "./BasketInfo";

function Parts() {
  return (
    <div className="mx-auto py-[20px] px-[20px] max-w-[540px] thousand:max-w-[1100px]">
      <div className="flex flex-col thousand:flex-row">

        <div className="w-[95%] thousand:w-[50%] order-1 thousand:order-2">
          <BasketInfo />
        </div>


        <div className="w-[95%] thousand:w-[60%] order-2 thousand:order-1">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Parts;
