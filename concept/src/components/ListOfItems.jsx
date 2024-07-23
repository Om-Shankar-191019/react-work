import React from "react";

const ListOfItems = () => {
  const products = [
    { id: 1, product: "book" },
    { id: 2, product: "key" },
    { id: 3, product: "pen" },
    { id: 4, product: "switch" },
  ];

  return (
    <div>
      {products &&
        products.map((item, index) => (
          <div
            key={item.id + index}
            className="h-12 w-24 bg-yellow-500 border border-red-600"
          >
            <p>{item.product}</p>
          </div>
        ))}
    </div>
  );
};

export default ListOfItems;
