import { CDN_URL } from "../utils/constants";
import "../../index.css";

const RestaurantCard = (props) => {
  // console.log(props);
  // Object Destructuring
  const { restData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    cuisines,
    costForTwo,
    locality,
  } = restData?.info;

  const { lastMileTravelString } = restData?.info?.sla;

  const { header, subHeader } = restData?.info?.aggregatedDiscountInfoV3 || {};
  return (
    <div
      className="w-72 h-[350px] p-2 rounded-3xl shadow-3xl hover:shadow-custom-shadow"
      data-aos="zoom-in"
    >
      <div className="w-full h-52 relative">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt="Shankar Foods"
          className="w-full h-full rounded-2xl object-cover relative"
        />
        <div className="absolute top-[175px] text-white font-extrabold text-2xl left-0 bg-gradient-to-br from-transparent to-black rounded-lg w-[272px] text-center backdrop-saturate-200">
          {header} {subHeader}
        </div>
      </div>
      <div className="food-info">
        <div className="flex justify-between">
          <div className="mt-2 my-1.5">
            <h3 className="m-0">{name}</h3>
          </div>
          <div className="max-w-[16%] flex items-center my-1">
            <div className="bg-green-700 flex gap-[1px] p-1 rounded-md">
              <div className="text-white">{avgRatingString}</div>
              <div className="flex items-center">
                <i className="sc-rbbb40-1 iFnyeo" color="#FFFFFF">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#FFFFFF"
                    width="0.8rem"
                    height="0.6rem"
                    viewBox="0 0 20 20"
                    aria-labelledby="icon-svg-title- icon-svg-desc-"
                    role="img"
                    className="sc-rbbb40-0 fauQLv"
                  >
                    <title>star-fill</title>
                    <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-2 my-1.5">
            <p className="max-w-20 text-ellipsis overflow-hidden whitespace-nowrap text-left">
              {cuisines.join(", ")}
            </p>
          </div>
          <div className="m-2">
            <p className="inline h-7 m-0 w-14">{costForTwo}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-2 my-1.5">
            <p>{locality}</p>
          </div>
          <div className="m-2">
            <p className="m-0">
              <b>{lastMileTravelString}</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

//! Higer Order Component

//input - RestaurantCard => RestaurantCardCategory

export const withFoodType = (RestaurantCard) => {
  // Now this return function will return some pieces of JSX
  // We will receive props here:-
  return (props) => {
    // Enhance Component
    return (
      <div>
        <label className="absolute z-10 m-2 p-2 rounded-xl bg-black text-white">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
