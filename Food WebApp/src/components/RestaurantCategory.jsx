import ItemsList from "./ItemsList";
import { useState } from "react";

//! So this is now a Controlled Component, If the Restaurant Category Controlling itself it would have been a Unontrolled Component. If it doesn't have a power to Controlling itself then it is called to be Controlled Component.

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/*Header */}
      <div className="accordion-Title w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 select-none">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>{showItems ? "⬇️" : "⬆️"}</span>
        </div>

        {showItems && <ItemsList items={data.itemCards} />}
      </div>
      {/*Accordion Body */}
    </div>
  );
};

export default RestaurantCategory;
