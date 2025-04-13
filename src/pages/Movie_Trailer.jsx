import React from "react";

const Movie_Trailer = () => {
  return (
    <div className="mx-[120px] my-5 bg-[#0F0D23] p-4 rounded-2xl shadow-xl/30 shadow-white flex flex-col items-center justify-center gap-4">
      <section className="flex items-center justify-between w-full">
        <h1 className="text-4xl font-bold capitalize">Squid Game 2</h1>
        <div className="flex items-center justify-center gap-2.5">
          <span className="flex items-center justify-center gap-2 bg-[#221F3D] rounded-md text-gray-300 p-2">
            <img src="/assets/icons/star.png" alt="star icon" />
            <span className="text-white font-bold ">8.9</span>/10 (200K)
          </span>
          <span className="flex items-center justify-center gap-2 bg-[#221F3D] rounded-md text-gray-300 p-2">
            <img src="/assets/icons/trend.png" alt="trend png" />
            <span>1</span>
          </span>
        </div>
      </section>

      <section className="flex items-center justify-start gap-4 text-[#A8B5DB] w-full">
        <span className="flex items-center justify-center gap-4">
          2024 <img src="/assets/icons/ellipse2.png" alt="point icon" />
        </span>
        <span className="flex items-center justify-center gap-4">
          PG-13 <img src="/assets/icons/ellipse2.png" alt="point icon" />
        </span>
        <span>2h 46m</span>
      </section>

      <section className="w-full flex items-center justify-center gap-4 h-[441px]">
        <div className="bg-[url(/assets/trailer/squid_game_1.png)] bg-cover rounded-[10px] h-full flex-1/4"></div>
        <div className="bg-[url(/assets/trailer/squid_game_2.png)] bg-cover rounded-[10px] h-full flex-3/4"></div>
      </section>

      <section className="w-full flex items-start justify-between ">
        <div className="flex flex-col gap-5">
          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Generes</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-bold">
                <span className="bg-[#221F3D] px-[18px] py-2 rounded-md">
                  Adventure
                </span>
                <span className="bg-[#221F3D] px-[18px] py-2 rounded-md">
                  Action
                </span>
                <span className="bg-[#221F3D] px-[18px] py-2 rounded-md">
                  Drama
                </span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Overview</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                Hundreds of cash-strapped players accept a strange invitation to
                compete in children's games. Inside, a tempting prize awaits
                with deadly high stakes: a survival game that has a whopping
                45.6 billion-won prize at stake.
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Release date</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                December 26, 2024 (Worldwide)
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Countries</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span className="hover:underline cursor-default">
                  United State
                </span>
                <span className="hover:underline cursor-default">Canada</span>
                <span className="hover:underline cursor-default">UAE</span>
                <span className="hover:underline cursor-default">Hungary</span>
                <span className="hover:underline cursor-default">Italy</span>
                <span className="hover:underline cursor-default">
                  New Zeeland
                </span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Status</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                Released
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Languages</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span className="hover:underline cursor-default">English</span>
                <span className="hover:underline cursor-default">Arabe</span>
                <span className="hover:underline cursor-default">UAE</span>
                <span className="hover:underline cursor-default">Hungary</span>
                <span className="hover:underline cursor-default">Italy</span>
                <span className="hover:underline cursor-default">
                  New Zeeland
                </span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Budget</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span>$24.1 million</span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Revenue</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span>$900 million</span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Tagline</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span>45.6 Billion Won is Child's Play</span>
              </div>
            </div>
          </div>

          <div className="flex-3/4">
            <div className="text-gray-300 flex items-center justify-between gap-10 w-full">
              <h4 className="flex-1/4">Production Companies</h4>
              <div className="flex items-center justify-start flex-3/4 gap-2 font-normal">
                <span className="hover:underline cursor-default">
                  Legendary Entertainment
                </span>
                <span className="hover:underline cursor-default">
                  Warner Bros. Entertainment
                </span>
                <span className="hover:underline cursor-default">
                  Villeneuve Films
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* button section */}
        <div className="flex-1/4 flex items-end justify-end">
          <button className="flex items-center justify-center gap-1.5 bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] w-[186px] h-[44px] rounded-sm text-black font-bold cursor-pointer hover:translate-y-[-2px] transition-all">
            Visit Homepage
            <img src="/assets/icons/arrow-right-black.png" alt="right-arrow" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Movie_Trailer;
