import { useState } from "react";
import Rating from "@mui/material/Rating";

const getRandomCountry = () => {
  const countries = ["USA", "UK", "Canada", "Germany", "Azerbaijan"];
  return countries[Math.floor(Math.random() * countries.length)];
};

const getInitials = (name) =>
  name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "NN";

const getCurrentDate = () => {
  const d = new Date();
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

function WriteReview({ onAddReview }) {
  const [rating, setRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !rating || !title || !text) {
      alert("Please fill in all fields");
      return;
    }

    const newReview = {
      id: Date.now(),
      name,
      initials: getInitials(name),
      verified: true,
      country: getRandomCountry(),
      rating,
      date: getCurrentDate(),
      title,
      text,
      product: "General Feedback",
      email,
    };

    onAddReview(newReview);

    // formu sıfırlamaq
    setName("");
    setEmail("");
    setRating(0);
    setTitle("");
    setText("");
  };

  return (
    <div className="max-w-[1176px] mx-auto">
      <form
        onSubmit={handleSubmit}
        className="p-6 border border-[#c9c9c996] flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-[30px] w-full">
          <div className="flex flex-col min-w-0">
            <label className="font-Montserrat mb-2">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-[#c9c9c9d0] p-2 rounded w-full max-w-[350px] outline-0 placeholder:font-Montserrat"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <label className="font-Montserrat mb-2">Email</label>
            <input
              type="email"
              placeholder="john.smith@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-[#c9c9c9d0] p-2 rounded w-full max-w-[350px] outline-0 placeholder:font-Montserrat"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="font-Montserrat pb-[5px]">Rating</label>
          <Rating
            name="review-rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-Montserrat pb-[5px]">Title of Review</label>
          <input
            type="text"
            placeholder="Give your review a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 border-[#c9c9c9d0] outline-0 placeholder:font-Montserrat"
          />
        </div>

        <div className="flex flex-col">
          <label className="font-Montserrat pb-[5px]">
            How was your overall experience?
          </label>
          <textarea
            placeholder="Write your review here"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border p-2 border-[#c9c9c9d0] h-32 outline-0 placeholder:font-Montserrat"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-[#f57f29] font-Montserrat text-[.9em] w-[250px] h-[50px] uppercase text-white font-bold outline-0 hover:text-[#f57f29] hover:bg-[#fff] border-2 border-[#f57f29] transition-all duration-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteReview;
