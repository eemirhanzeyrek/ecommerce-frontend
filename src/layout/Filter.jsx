import React from "react";

const Filter = ({ setPrice, setRating, setCategory }) => {
  const categoryList = ["bag", "shoe", "pants", "computer", "phone"];
  const ratingList = [1, 2, 3, 4, 5];

  return (
    <div className="w-[200px] mt-3 p-1">
      <div className="my-2">Filtering</div>
      <div className="flex items- center gap-2 my-2">
        <input
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, min: e.target.value }))
          }
          className="border w-16 p-1 outline-none"
          type="number"
          placeholder="min"
        />
        <input
          onChange={(e) =>
            setPrice((prev) => ({ ...prev, max: e.target.value }))
          }
          className="border w-16 p-1 outline-none"
          type="number"
          placeholder="max"
        />
      </div>
      <div className="my-2">Category</div>
      {categoryList.map((category, index) => (
        <div
          onClick={() => setCategory(category)}
          className="text-sm cursor-pointer"
          key={index}
        >
          {category}
        </div>
      ))}
      <hr />
      <div className="my-2">Rating</div>
      {ratingList.map((rating, index) => (
        <div
          onClick={() => setRating(rating)}
          className="text-sm cursor-pointer"
          key={index}
        >
          {rating}
        </div>
      ))}
    </div>
  );
};

export default Filter;
