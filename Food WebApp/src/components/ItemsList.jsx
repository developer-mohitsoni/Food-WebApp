const ItemsList = ({ items }) => {
  //   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left "
        >
          <div className="flex justify-between">
            <div className="flex flex-col ">
              <span className="font-semibold">{item.card.info.name}</span>
              <span>
                ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <button className="bg-white w-24 rounded-md text-green-400 font-bold border-2 shadow-md hover:shadow-lg">
              ADD
            </button>
          </div>
          <p className="text-sm mt-5 font-light">
            {item.card.info.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
