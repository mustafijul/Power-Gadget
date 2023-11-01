import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-200">
      <div className="pb-56">
        <h1 className="text-2xl md:text-4xl lg:text:6xl text-center">
          Welcome to hero gadget
        </h1>
        <p className="my-6 text-xs sm:text-base md:text-lg  text-gray-900 text-center">
          Best E-commerce platform for buying high quality Smart Home <br />
          Appliances at extremely affordable Price.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mb-100">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Shop now
</button>

        <button type="button" className="btn-outlined">
          Learn more
        </button>
      </div>

      <div className=" ">
        <img
          className="w-5/6 mx-auto mb-12 -mt-12 lg:-mt-40 shadow-md bg-gray-500"
          src="/src/assets/hero.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>
  );
};

export default Home;
