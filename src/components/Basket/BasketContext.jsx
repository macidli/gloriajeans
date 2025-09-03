import { createContext, useContext, useState, useEffect } from "react";

const BasketContext = createContext();

export const useBasket = () => useContext(BasketContext);

export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState(() => {
    const saved = localStorage.getItem("basketItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const addToBasket = (item) => {
    setBasketItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) =>
          i.slug === item.slug &&
          i.selected === item.selected &&
          i.selectedOption === item.selectedOption &&
          (i.delivery || "") === (item.delivery || "")
      );

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        updated[existingIndex].totalPrice += item.totalPrice;
        return updated;
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromBasket = (slug, selected, selectedOption, delivery) => {
    setBasketItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.slug === slug &&
            item.selected === selected &&
            item.selectedOption === selectedOption &&
            (item.delivery || "") === (delivery || "")
          )
      )
    );
  };

  const increaseQuantity = (slug, selected, selectedOption, delivery) => {
    setBasketItems((prev) =>
      prev.map((item) => {
        if (
          item.slug === slug &&
          item.selected === selected &&
          item.selectedOption === selectedOption &&
          (item.delivery || "") === (delivery || "")
        ) {
          const newQty = item.quantity + 1;
          return {
            ...item,
            quantity: newQty,
            totalPrice: (item.totalPrice / item.quantity) * newQty,
          };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (slug, selected, selectedOption, delivery) => {
    setBasketItems((prev) =>
      prev
        .map((item) => {
          if (
            item.slug === slug &&
            item.selected === selected &&
            item.selectedOption === selectedOption &&
            (item.delivery || "") === (delivery || "")
          ) {
            const newQty = item.quantity - 1;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: newQty,
              totalPrice: (item.totalPrice / item.quantity) * newQty,
            };
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addToBasket,
        removeFromBasket,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
