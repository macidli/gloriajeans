import { useEffect, useState } from "react";
import CheckoutSkeleton from "./CheckoutSkeleton";
import Header from "./Header"
import Parts from "./Parts"

function Checkout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
        <Header />
         <div>
          {loading ? <CheckoutSkeleton /> : <Parts />}
        </div>
    </div>
  )
}

export default Checkout