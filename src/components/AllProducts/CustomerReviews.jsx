import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { MdOutlineRateReview } from "react-icons/md";
import { FaStar, FaCheckCircle, FaFlagUsa } from "react-icons/fa";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import WriteReview from "./WriteReview";
import Aos from "aos";
import "aos/dist/aos.css";
import CoffeeAPI from "../Services/CoffeeAPI";

function CustomerReviews() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const reviewsPerPage = 5;

  const api = new CoffeeAPI();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
    api.getAllReviews().then((data) => setReviews(data));
  }, []);

  const paginatedReviews = reviews.slice(
    (page - 1) * reviewsPerPage,
    page * reviewsPerPage
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const toggleForm = () => setIsFormOpen(!isFormOpen);


  const addReview = (newReview) => {
    setReviews([newReview, ...reviews]); 
    setIsFormOpen(false); 
  };

  return (
    <div className="px-[20px]">
      <div className="flex flex-col items-center gap-2 mb-6">
        <h1 className="font-bold font-Montserrat text-[1.8em]">
          Customer Reviews
        </h1>
        <div className="flex items-center gap-2">
          <p className="text-[2.2em] font-semibold font-Montserrat">
            {reviews.length
              ? (
                  reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                ).toFixed(1)
              : 0}
          </p>
          <Rating
            name="read-only"
            value={
              reviews.length
                ? reviews.reduce((a, b) => a + b.rating, 0) / reviews.length
                : 0
            }
            readOnly
          />
        </div>
        <p className="font-Montserrat text-[.9em]">
          Based on {reviews.length} Reviews
        </p>
      </div>

      <div className="max-w-[1176px] mx-auto">
        <div className="flex justify-end mb-4">
          <div
            className="flex items-center justify-center gap-3 border-2 w-[200px] hover:bg-[#f57f29] hover:text-[#fff] rounded h-[40px] border-[#f57f29] text-[#f57f29] transition-all duration-500 cursor-pointer"
            onClick={toggleForm}
          >
            <MdOutlineRateReview />
            <span className="font-bold text-[.9em] font-Montserrat uppercase">
              Write a Review
            </span>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-max-height duration-500 ${
            isFormOpen ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <WriteReview onAddReview={addReview} />
        </div>

        <div className="relative border-b border-[#afafaf67] pb-[10px] mt-6">
          <p className="relative inline-block">
            Reviews {reviews.length}
            <span className="absolute left-0 -bottom-[10px] w-[100px] h-[2px] bg-black"></span>
          </p>
        </div>

        {paginatedReviews.map((review, index) => (
          <div
            key={review.id}
            className="bg-[#fff4ef] p-6 rounded-md border-b-2 border-orange-500 flex flex-col my-[40px]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ff7b6b] text-white font-bold text-lg">
                  {review.initials}
                </div>
                <div>
                  <h2 className="font-bold text-lg">{review.name}</h2>
                  <div className="flex items-center gap-2">
                    {review.verified && (
                      <p className="text-green-600 text-sm font-medium flex items-center gap-1">
                        <FaCheckCircle /> Verified Buyer
                      </p>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <FaFlagUsa /> {review.country}
                  </p>
                  <div className="flex mt-1 text-orange-500">
                    {Array(review.rating)
                      .fill(0)
                      .map((_, i) => (
                        <FaStar key={i} size={16} />
                      ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">{review.date}</p>
            </div>

            <div className="mt-4 pl-[60px]">
              <h3 className="font-bold text-xl">{review.title}</h3>
              <p className="text-gray-800 mt-1">{review.text}</p>
              <p className="text-gray-600 text-sm mt-1">{review.product}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center my-10">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(reviews.length / reviewsPerPage)}
              page={page}
              onChange={handlePageChange}
              renderItem={(item) => (
                <PaginationItem
                  slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
