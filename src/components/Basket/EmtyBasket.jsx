export default function EmptyBasket() {
  return (
    <div className="flex flex-col justify-center items-center py-16 text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
        alt="Empty basket"
        className="w-[120px] h-[120px] mb-6 opacity-70"
      />
      <h3 className="font-Montserrat font-[600] text-[1.3em] text-[#333] mb-2">
        Your basket is empty
      </h3>
      <p className="text-[#616161] font-Montserrat text-[.9em] max-w-[280px]">
        Looks like you haven’t added anything to your basket yet.
      </p>
    </div>
  );
}
