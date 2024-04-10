import React, { useEffect, useState } from "react";
import avatar from "../assets/img/avatar.png";
import Coins from "../assets/img/Coins.png";
import Illustration from "../assets/img/Illustration.png";

const GoalReached = () => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;
  return (
    <div>
      {isMobile && ( // Render mobile-specific content only if isMobile is true
        <div>
          <header>
            <div className="w-11/12 mx-auto p-2">
              <nav>
                <div className="flex justify-end items-center">
                  <img src={avatar} alt="" />
                </div>
              </nav>
            </div>
          </header>
          <section>
            <div className="w-11/12 mx-auto p-2">
              <div>
                <div className="MainImg flex justify-center">
                  <img src={Illustration} alt="" />
                </div>
                <p className="uppercase text-xs tracking-widest text-center mt-3">
                  Monthly Summary
                </p>
                <h1 className="text-sky-400 text-3xl mt-2 font-extrabold text-center">
                  Goal Reached!
                </h1>
                <p className="text-xs text-center mt-2 text-slate-500">
                  You managed to save <b className="text-black"> 42 kWh </b>{" "}
                  this month!
                  <br /> That’s <b className="text-black"> 3 trees</b>{" "}
                  high-fiving you ✋
                </p>
                <button className="bg-sky-400 text-white p-2 px-3 table rounded-full mx-auto mt-3">
                  Continue
                </button>
              </div>
            </div>
          </section>
          <section className="absolute bottom-5 w-full">
            <div className="w-11/12 mx-auto p-2">
              <div className="w-full bg-yellow-100 flex items-center p-3 rounded-2xl">
                <img className="w-14 h-12" src={Coins} alt="" />
                <div className="ml-3">
                  <span className="text-sm text-orange-500 font-extrabold ">
                    Milestone reached
                  </span>
                  <h4 className="text-xl text-orange-500 font-extrabold -mt-1">
                    +75 Credits
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default GoalReached;
