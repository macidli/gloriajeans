import { useEffect, useState } from "react";
import { HiXMark } from "react-icons/hi2";

const ExclusiveOffersModal = ({ isOpen, onClose, setSubmitted }) => {
  const [email, setEmail] = useState("");
  const [signedUp, setSignedUp] = useState(false);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (email.includes("@")) {
      setSignedUp(true);
      setSubmitted(true);
    } else {
      alert("Please enter a valid email with @");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-[20px]"
      onClick={onClose}
    >
      <div
        className="relative bg-white rounded-lg overflow-hidden max-w-2xl w-full flex flex-row transition-all duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {!signedUp ? (
          <>
            <div className="flex-1 p-4 flex flex-col justify-center">
              <h2 className=" text-[1em] md:text-3xl font-bold text-[#f57f29] mb-4 font-Montserrat">
                Join the family!
              </h2>
              <p className="text-gray-700 text-[.8em] md:text-[1em] mb-4 font-Montserrat">
                Hear about promotions & get email only offers when you join!
              </p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded px-2 py-1 w-full mb-4 focus:outline-none focus:border-[#f57f29] text-base"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#f57f29] text-white w-full py-2 rounded font-Montserrat text-base"
              >
                Continue
              </button>
            </div>

            <div className="flex-1 h-auto">
              <img
                src="https://d3k81ch9hvuctc.cloudfront.net/company/SK5caF/images/47780bcb-5379-4c7b-8b81-13f4384788de.png"
                alt="Exclusive Offer"
                className="w-full h-full object-cover"
              />
            </div>
          </>
        ) : (
          <div className="flex w-full">
            <div className="flex-1 p-4 flex flex-col items-center justify-center">
              <img
                src="https://d3k81ch9hvuctc.cloudfront.net/company/SK5caF/images/46cc5dd9-50d4-462a-b397-ae5dad8b80b5.png"
                alt="Check Email"
                className="w-12 h-12 md:w-16 md:h-16 mb-4"
              />
              <h2 className="text-[#f57f29] font-bold text-lg md:text-xl mb-2 text-center font-Montserrat">
                Thanks for signing up!
              </h2>
              <p className="text-gray-700 text-center text-sm md:text-base">
                Check your email to confirm your subscription.
              </p>
            </div>
            <div className="flex-1 h-auto">
              <img
                src="https://d3k81ch9hvuctc.cloudfront.net/company/SK5caF/images/1d89ce10-949b-4476-bb9f-dd5c1f33c023.jpeg"
                alt="Exclusive Offer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <button
          onClick={() => {
            onClose();
            setEmail("");
          }}
          className="absolute top-2 right-2 text-black bg-white w-[26px] h-[26px] flex justify-center items-center rounded-full text-xl"
        >
          <HiXMark />
        </button>
      </div>
    </div>
  );
};

export default ExclusiveOffersModal;
