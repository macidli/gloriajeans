import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CoffeeAPI from "../../src/components/Services/CoffeeAPI";

function Contact() {
  const [states, setStates] = useState([]);
  const [modalContent, setModalContent] = useState({});
  const [modalOpen, setModalOpen] = useState(null);

  const api = new CoffeeAPI();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getCheckoutData();
        setStates(data.states || []);
        setModalContent(data.modalContent || {});
      } catch (err) {
        console.error("CheckoutData.json yüklənmədi:", err);
      }
    };
    fetchData();
  }, []);

  const openModal = (type) => setModalOpen(type);
  const closeModal = () => setModalOpen(null);

  return (
    <div className="thousand:pr-[60px] space-y-6">
      <div>
        <div className="flex justify-between items-center mb-2">
          <h5 className="font-bold text-[1.2em]">Contact</h5>
          <Link to="/login">
            <p className="text-[.9em] text-[#ff6600] underline">Log in</p>
          </Link>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="border border-[#a2a2a292] w-full rounded-md p-3 outline-[#ff6600]"
        />
        <div className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            id="offers"
            className="w-4 h-4 outline-[#ff6600] accent-[#ff6600]"
          />
          <label htmlFor="offers" className="text-sm">
            Email me with news and offers
          </label>
        </div>
      </div>

      <div>
        <h5 className="font-bold text-[1.2em] mb-3">Delivery</h5>
        <select className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]">
          <option>United States</option>
        </select>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
          />
        </div>
        <input
          type="text"
          placeholder="Company (optional)"
          className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
        />
        <input
          type="text"
          placeholder="Address (Please note we do not ship to PO Boxes)"
          className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
        />
        <input
          type="text"
          placeholder="Apartment, suite, etc. (optional)"
          className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
        />
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="City"
            className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]"
          />
          <select className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]">
            <option value="">Select state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="ZIP code"
            className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]"
          />
        </div>
        <input
          type="text"
          placeholder="Phone (optional)"
          className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
        />
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="save"
            className="w-4 h-4 outline-[#ff6600] accent-[#ff6600]"
          />
          <label htmlFor="save" className="text-sm">
            Save this information for next time
          </label>
        </div>
      </div>

      <div>
        <h5 className="font-bold text-[1.2em] mb-3">Shipping method</h5>
        <div className="border border-[#a2a2a292] bg-[#f7f7f7] rounded-md p-3 text-sm text-gray-600">
          Enter your shipping address to view available shipping methods.
        </div>
      </div>

      <div>
        <h5 className="font-bold text-[1.2em] mb-1">Payment</h5>
        <p className="text-sm text-gray-600 mb-3">
          All transactions are secure and encrypted.
        </p>

        <div className="rounded-md overflow-hidden">
          <div className="flex justify-between items-center p-3 border border-[#ff6600] bg-[#fff2e9c3]">
            <span className="text-sm font-medium">Credit card</span>
            <div className="flex items-center gap-1">
              <img
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/visa.sxIq5Dot.svg"
                alt="visa"
                className="h-5"
              />
              <img
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/mastercard.1c4_lyMp.svg"
                alt="mastercard"
                className="h-5"
              />
              <img
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/amex.Csr7hRoy.svg"
                alt="amex"
                className="h-5"
              />
              <img
                src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1/assets/discover.C7UbFpNb.svg"
                alt="discover"
                className="h-5"
              />
            </div>
          </div>

          <div className="p-3 space-y-3 bg-[#f4f4f4] border-[1px] border-[#c5c5c596]">
            <input
              type="text"
              placeholder="Card number"
              className="border border-[#a2a2a292] w-full rounded-md p-3 outline-[#ff6600]"
            />
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Expiration date (MM / YY)"
                className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
              />
              <input
                type="text"
                placeholder="Security code"
                className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
              />
            </div>
            <input
              type="text"
              placeholder="Name on card"
              className="border border-[#a2a2a292] w-full rounded-md p-3 outline-[#ff6600]"
            />
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="billing"
                className="w-4 h-4 outline-[#ff6600] accent-[#ff6600]"
                defaultChecked
              />
              <label htmlFor="billing" className="text-sm">
                Use shipping address as billing address
              </label>
            </div>

            <div>
              <h5 className="font-bold text-[1.2em] mb-3">Billing address</h5>
              <select className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]">
                <option>United States</option>
              </select>
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="First name"
                  className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="border border-[#a2a2a292] w-1/2 rounded-md p-3 outline-[#ff6600]"
                />
              </div>
              <input
                type="text"
                placeholder="Company (optional)"
                className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
              />
              <input
                type="text"
                placeholder="Address (Please note we do not ship to PO Boxes)"
                className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
              />
              <input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
              />
              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]"
                />
                <select
                  className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    State
                  </option>
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="ZIP code"
                  className="border border-[#a2a2a292] w-1/3 rounded-md p-3 outline-[#ff6600]"
                />
              </div>
              <input
                type="text"
                placeholder="Phone (optional)"
                className="border border-[#a2a2a292] w-full rounded-md p-3 mb-3 outline-[#ff6600]"
              />
            </div>
          </div>
        </div>

        <button className="w-full bg-[#ff6600] hover:bg-[#e55b00] text-white font-semibold py-3 rounded-md mt-5 transition">
          Pay now
        </button>

        <p className="text-xs text-gray-600 mt-3 leading-relaxed">
          One or more items in your cart is a deferred or recurring purchase. By
          continuing with your payment, you agree that your payment method will
          automatically be charged at the price and frequency listed on this
          page until it ends or you cancel. All cancellations are subject to the{" "}
          <a href="#" className="underline">
            cancellation policy
          </a>
          .
        </p>
      </div>


      <div className="flex flex-wrap gap-4 text-sm mt-6 text-[#ff6600]">
        {Object.keys(modalContent).map((key) => (
          <button
            key={key}
            onClick={() => openModal(key)}
            className="underline"
          >
            {modalContent[key].title}
          </button>
        ))}
      </div>


      {modalOpen && modalContent[modalOpen] && (
        <div
          onClick={closeModal}
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50"
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full relative h-[670px] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              {modalContent[modalOpen].title}
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
              {modalContent[modalOpen].text}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
