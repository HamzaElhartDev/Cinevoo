import React from "react";

const Trending = () => {
  const movies = [
    {
      id: 1,
      name: "hamza",
      img: "/assets/movies/1.webp",
      number_pic: "/assets/trending/1.png",
    },
    {
      id: 2,
      name: "hamza",
      img: "/assets/movies/2.webp",
      number_pic: "/assets/trending/2.png",
    },
    {
      id: 3,
      name: "hamza",
      img: "/assets/movies/3.webp",
      number_pic: "/assets/trending/3.png",
    },
    {
      id: 4,
      name: "hamza",
      img: "/assets/movies/4.webp",
      number_pic: "/assets/trending/4.png",
    },
    {
      id: 5,
      name: "hamza",
      img: "/assets/movies/1.webp",
      number_pic: "/assets/trending/5.png",
    },
    {
      id: 6,
      name: "hamza",
      img: "/assets/movies/2.webp",
      number_pic: "/assets/trending/6.png",
    },
  ];

  return (
    <div className="flex flex-col items-start w-full p-3 gap-2.5">
      <h3 className="font-bold text-4xl">Trending </h3>
      <section className="flex items-center justify-center gap-2.5 w-full overflow-x-scroll scrollbar-hide flex-nowrap ">
        {movies.map((movie) => {
          console.log("movie : ", movie);
          return (
            <div
              className="flex items-center justify-between p-5 cursor-pointer hover:translate-y-[-10px] transition-all"
              key={movie.id}
            >
              <img
                src={movie.number_pic}
                alt={movie.name}
                className="translate-x-[10px] -z-0"
              />
              <div
                className="w-[107px] h-[143px] bg-cover rounded-sm z-10"
                style={{ backgroundImage: `URL(${movie.img})` }}
              ></div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Trending;
