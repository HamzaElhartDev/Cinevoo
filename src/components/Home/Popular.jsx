import React from "react";

const Popular = () => {
  let cards = [
    {
      id: 1,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/1.png",
    },
    {
      id: 2,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/2.png",
    },
    {
      id: 3,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/3.png",
    },
    {
      id: 4,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/4.png",
    },
    {
      id: 5,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/5.png",
    },
    {
      id: 6,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/6.png",
    },
    {
      id: 7,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/7.png",
    },
    {
      id: 8,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/8.png",
    },
    {
      id: 9,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/1.png",
    },
    {
      id: 10,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/2.png",
    },
    {
      id: 11,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/3.png",
    },
    {
      id: 12,
      name: "Antman & The Wasp Quantuman",
      category: "Action",
      type: "movie",
      img: "assets/card/4.png",
    },
  ];

  return (
    <div className="p-3">
      <h1 className="font-bold text-4xl mb-10">Popular </h1>
      <section className="grid gap-3 grid-cols-4 justify-between items-center">
        {cards.map((card) => {
          return (
            <div
              className="px-5 py-[18px] bg-[#0F0D23] rounded-xl w-[300px] h-fit hover:translate-y-[-10px] transition-all cursor-pointer"
              key={card.id}
            >
              <img
                src={card.img}
                alt="card movie"
                className="rounded-xl w-full"
              />
              <p className="font-semibold w-full p-0 mb-1">{card.name}</p>
              <div className="text-[#9CA4AB] flex items-center justify-center gap-2">
                <div className="flex items-center justify-center">
                  <img src="assets/icons/star.png" alt="star icon" />
                  <span className="text-white font-bold">4.6</span>
                </div>
                <div className="flex items-center justify-start gap-1 w-full font-semibold">
                  <span>.</span>
                  <span className="capitalize">{card.type}</span>
                  <span>.</span>
                  <span>{card.category}</span>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="mt-10 flex items-center justify-between">
        <button className="bg-[#0F0D23] p-[18px] rounded-lg hover:bg-[#2b2b42] transition-all cursor-pointer">
          <img src="assets/icons/arrow-left.png" alt="arrow left" />
        </button>
        <div>
          <span className="font-bold">2</span>
          <span className="text-gray-400"> / 50</span>
        </div>
        <button className="bg-[#0F0D23] p-[18px] rounded-lg hover:bg-[#2b2b42] transition-all cursor-pointer">
          <img src="assets/icons/arrow-right.png" alt="arrow right" />
        </button>
      </footer>
    </div>
  );
};

export default Popular;
